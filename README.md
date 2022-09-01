# yvm-github-gateway

> ## ⚠️ Deprecation Notice (2022-02-20) ⚠️
>
> yvm has been deprecated in favour of [corepack](https://github.com/nodejs/corepack) which is distributed by default with NodeJS v14, and is available in older versions by installing the corepack npm package globally.
>
> With corepack, you specify your package manager and version via the `packageManager` field in your project's package.json file ([see example](https://github.com/tophat/monodeploy/blob/84dbb366ae1699adeb161e38d413c66f92cb33a3/package.json#L107)).
>
> _What does it mean to be deprecated?_ yvm will no longer receive updates (except for critical security vulnerabilities) and the repository will eventually be archived.

[![Builds](https://img.shields.io/circleci/project/github/tophat/yvm-github-gateway/master.svg)](https://circleci.com/gh/tophat/yvm-github-gateway)
[![Slack workspace](https://slackinvite.dev.tophat.com/badge.svg)](https://opensource.tophat.com/slack)
[![Maturity badge - level 2](https://img.shields.io/badge/Maturity-Level%202%20--%20First%20Release-yellowgreen.svg)](https://github.com/tophat/getting-started/blob/master/scorecard.md)

This is simply a project for yvm, for the yvm project head to [github.com/tophat/yvm](https://github.com/tophat/yvm)

## Installation on Lambda

**Step 1:** Generate AWS access and secret key by creating a user in [AWS IAM](https://console.aws.amazon.com/iam/home) with `AdministratorAccess` permission.

**Step 2:** Generate a personal access token on Github: [/settings/tokens](https://github.com/settings/tokens)

**Step 3:** Set following ENV variables:

- `AWS_ACCESS_KEY_ID`: Your AWS access key generated in Step 1
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key generated in Step 1
- `GITHUB_AUTH_TOKEN`: Your GitHub personal access token generated in Step 2

**Step 4:** Run following commands:

```sh
make deploy
```

You should be able to pass the ENV variables like this:

```sh
GITHUB_AUTH_TOKEN="something" AWS_ACCESS_KEY_ID="abc" AWS_SECRET_ACCESS_KEY="abc" serverless deploy
```

It should give you a link to the service!

## Running as standalone Webserver

```sh
make start
```

## Endpoints

**`GET /yvm-releases`**
**`GET /yvm-releases/all`**
**`GET /yarn-releases`**

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/3534236?v=4" width="100px;"/><br /><sub><b>Jake Bolam</b></sub>](https://jakebolam.com)<br />[💻](https://github.com/tophat/yvm-github-gateway/commits?author=jakebolam "Code") [🚇](#infra-jakebolam "Infrastructure (Hosting, Build-Tools, etc)") [📖](https://github.com/tophat/yvm-github-gateway/commits?author=jakebolam "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/4661702?v=4" width="100px;"/><br /><sub><b>Tom Grant</b></sub>](http://www.linkedin.com/profile/view?id=245244184)<br />[💻](https://github.com/tophat/yvm-github-gateway/commits?author=tgrant59 "Code") [🚇](#infra-tgrant59 "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars0.githubusercontent.com/u/2528959?v=4" width="100px;"/><br /><sub><b>Emmanuel Ogbizi</b></sub>](http://emmanuel.ogbizi.com)<br />[👀](#review-iamogbz "Reviewed Pull Requests") [💻](https://github.com/tophat/yvm-github-gateway/commits?author=iamogbz "Code") [🚇](#infra-iamogbz "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Credits

Thanks to [Carol Skelly](https://github.com/iatek) for donating the github organization!
