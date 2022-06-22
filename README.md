## gg-components

![Build status](https://github.com/georgegillams/gg-components/workflows/CI/badge.svg)
![Dependencies status](https://img.shields.io/david/georgegillams/gg-components)
![Dependencies status](https://img.shields.io/librariesio/release/npm/gg-components)

A set of reusable React components, that are published as plain JS and CSS for maximum compatibility.

To use in a Next.js app, follow this [guide for using styled components in next.js](https://www.simplenextjs.com/posts/next-styled-components).

## Developing

To develop components within Storybook, run `npm start`.

If components have changed, snapshot tests may need to be updated. Backstop js visual regression tests may also need to be updated.

To update jest snapshots:

```
npx jest -u
```

To update backstopJS snapshots:

Make sure docker is running. Then run these three commands:

```
/bin/bash ./scripts/docker/snapshot-test/prepare.sh
/bin/bash ./scripts/docker/snapshot-test/run-tests.sh --update
/bin/bash ./scripts/docker/snapshot-test/clean-up.sh'
```

- The first will setup the docker image and container. If they already exist this will be super fast.
- The second will copy the project over, setup dependencies, build and run, and take screenshots. Failed screenshots will be copied back to your machine.
- The third simply stops the docker container.

Any changes resulting from these commands should be verified and checked in.

## Publishing

Use one of the following to release. These update the version, commit and tag the change, and publish transpiled code:

- `npm run release:major` for breaking changes
- `npm run release:minor` for additions
- `npm run release:patch` for fixes

## Documentation

[General docs can be found here](https://github.com/georgegillams/gg-components/tree/main/docs). Docs for each component should be available soon(ish).

That's it!

## Contributing

Want to add or change something? Just fork me and open a PR.
