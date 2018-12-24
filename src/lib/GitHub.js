import request from 'superagent'

const GITHUB_API_BASE = 'https://api.github.com'

export default class GitHub {
    constructor({ githubAuthToken }) {
        this.githubAuthToken = githubAuthToken
    }
    getPath(path = '/') {
        const githubAuthToken = this.githubAuthToken
        return new Promise((resolve, reject) => {
            const newRequest = request.get(`${GITHUB_API_BASE}${path}`)
            if (githubAuthToken) {
                newRequest.set('authorization', `token ${githubAuthToken}`)
            }

            newRequest.end((err, res) => {
                if (err) return reject(err)

                if (!res.body) reject(new Error(`Invalid GitHub response.`))

                resolve(res.body)
            })
        })
    }
}
