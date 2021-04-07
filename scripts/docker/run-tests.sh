#!/bin/bash

containerId=$(docker ps -a | grep gg-snapshot-test  | awk '{print $1}')
destinationDirectory="/usr/src/tmp/gg-components/"

# copy project to container (except node_modules)
docker cp .storybook $containerId:$destinationDirectory
docker cp babel.config.js $containerId:$destinationDirectory
docker cp backstop_data $containerId:$destinationDirectory
docker cp config $containerId:$destinationDirectory
docker cp package-lock.json $containerId:$destinationDirectory
docker cp package.json $containerId:$destinationDirectory
docker cp scripts $containerId:$destinationDirectory
docker cp src $containerId:$destinationDirectory
docker cp test $containerId:$destinationDirectory

# prepare project
docker exec -it $containerId npm ci
docker exec -it $containerId npm run build

# run tests
docker exec -it $containerId npm run backstopjs:test:allow-failure

# copy any failed snapshots back to the host
docker cp $containerId:${destinationDirectory}backstop_data ./