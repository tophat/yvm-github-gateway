import url from 'url'
import request from 'superagent'
import parseLinkHeader from 'parse-link-header'

const GITHUB_API_BASE = 'https://api.github.com'

const getNextPathFromLinkHeader = resp => {
    if (!resp.headers.link) return null
    const link = parseLinkHeader(resp.headers.link)
    if (!link.next) return null

    const nextURL = new url.URL(link.next.url)
    return nextURL.pathname + nextURL.search
}

export default class GitHub {
    constructor({ githubAuthToken }) {
        this.githubAuthToken = githubAuthToken
    }
    getResponse(path) {
        const githubAuthToken = this.githubAuthToken
        return new Promise((resolve, reject) => {
            const newRequest = request.get(`${GITHUB_API_BASE}${path}`)
            if (githubAuthToken) {
                newRequest.set('authorization', `token ${githubAuthToken}`)
            }

            newRequest.end((err, res) => {
                if (err) return reject(err)

                if (!res.body) reject(new Error(`Invalid GitHub response.`))

                resolve(res)
            })
        })
    }
    getPath(path = '/') {
        return new Promise((resolve, reject) => {
            this.getResponse(path)
                .then(thisPageResp => {
                    const thisPageResults = thisPageResp.body
                    const nextPath = getNextPathFromLinkHeader(thisPageResp)
                    if (!nextPath) {
                        resolve(thisPageResults)
                        return
                    }

                    this.getPath(nextPath)
                        .then(nextPageResults => {
                            resolve(thisPageResults.concat(nextPageResults))
                        })
                        .catch(err => reject(err))
                })
                .catch(err => reject(err))
        })
    }
}
