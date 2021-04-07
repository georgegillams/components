#!/bin/bash

# build image if it doesn't already exist
if !(docker images | grep gg-snapshot-test); then
echo "building"
    docker build -t gg-snapshot-test -f Dockerfile .
fi

# create container if it doesn't already exist
if !(docker ps -a | grep gg-snapshot-test); then
    docker create -t gg-snapshot-test bash
fi

containerId=$(docker ps -a | grep gg-snapshot-test  | awk '{print $1}')

# start the container
docker container start $containerId