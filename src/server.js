import YVMGitHubGateway from './lib/app'
import { Server as http } from 'http'

const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = process.env.PORT || 3000

var options = {
    githubAuthToken: process.env.GITHUB_AUTH_TOKEN,
}
var app = YVMGitHubGateway(options)
let srv = http(app)
srv.app = app

srv.listen(port, hostname, function(err) {
    if (err) throw err

    // eslint-disable-next-line
    console.log('%s – listening on %s:%d', new Date(), hostname, port)
})
