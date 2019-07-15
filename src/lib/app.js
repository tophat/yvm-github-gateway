import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import GitHub from './GitHub'

export default function YVMGitHubGateway({ githubAuthToken }) {
    let app = express()
    app.use(bodyParser.json({ strict: false }))

    const github = new GitHub({ githubAuthToken })

    app.options('*', cors())
    app.use(cors())

    app.get('/', (req, res) => {
        res.json({ hello: 'world' })
    })

    app.get('/yvm-releases', (req, res) => {
        github
            .getPath('/repos/tophat/yvm/releases/latest')
            .then(response => {
                res.set('Cache-Control', 'public, max-age=300')
                res.json(response)
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    })

    app.get('/yvm-releases/all', (req, res) => {
        github
            .getPath('/repos/tophat/yvm/releases')
            .then(response => {
                res.set('Cache-Control', 'public, max-age=3600')
                res.json(response)
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    })

    app.get('/yarn-releases', (req, res) => {
        github
            .getPath('/repos/yarnpkg/yarn/tags')
            .then(response => {
                res.set('Cache-Control', 'public, max-age=3600')
                res.json(response)
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    })

    return app
}
