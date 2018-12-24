# yvm-github-gateway
[![Builds](https://img.shields.io/circleci/project/github/tophat/yvm-github-gateway/master.svg)](https://circleci.com/gh/tophat/yvm-github-gateway)
[![Slack workspace](https://slackinvite.dev.tophat.com/badge.svg)](https://opensource.tophat.com/slack)
[![Maturity badge - level 2](https://img.shields.io/badge/Maturity-Level%202%20--%20First%20Release-yellowgreen.svg)](https://github.com/tophat/getting-started/blob/master/scorecard.md)

This is simply a project for yvm, for the yvm project head to [github.com/tophat/yvm](https://github.com/tophat/yvm)

## Installation on Lambda

**Step 1:** Generate AWS access and secret key by creating a user in [AWS IAM](https://console.aws.amazon.com/iam/home) with `AdministratorAccess` permission.

**Step 2:** Generate a personal access token on Github: https://github.com/settings/tokens

**Step 3:** Set following ENV variables:
- `AWS_ACCESS_KEY_ID`: Your AWS access key generated in Step 1
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key generated in Step 1
- `GITHUB_AUTH_TOKEN`: Your GitHub personal access token generated in Step 2

**Step 4:** Run following commands:

```
yarn install
yarn build
serverless deploy
```

You should be able to pass the ENV variables like this:

```
GITHUB_AUTH_TOKEN="something" AWS_ACCESS_KEY_ID="abc" AWS_SECRET_ACCESS_KEY="abc" serverless deploy
```

It should give you a link to the service!

## Running as standalone Webserver

```
yarn install
yarn build
PORT=3000 node dist/server.js
```

## Endpoints


**`GET /stats`**

Returns number of active and total members on Slack in following format:

```{"success": true, "stats": {"total": 39, "active": 25}}```


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/3534236?v=4" width="100px;"/><br /><sub><b>Jake Bolam</b></sub>](https://jakebolam.com)<br />[💻](https://github.com/tophat/serverless-slack-invite/commits?author=jakebolam "Code") [🚇](#infra-jakebolam "Infrastructure (Hosting, Build-Tools, etc)") [📖](https://github.com/tophat/serverless-slack-invite/commits?author=jakebolam "Documentation") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Credits
Thanks to [Carol Skelly](https://github.com/iatek) for donating the github organization!
