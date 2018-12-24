import YVMGitHubGateway from './lib/app'
import awsServerlessExpress from 'aws-serverless-express'

exports.init = (event, context) => {
    var options = {
        githubAuthToken: process.env.GITHUB_AUTH_TOKEN,
    }
    var app = YVMGitHubGateway(options)
    const server = awsServerlessExpress.createServer(app)
    awsServerlessExpress.proxy(server, event, context)
}
