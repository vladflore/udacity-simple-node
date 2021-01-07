# Overview

This is a small Node.js app to exemplify CI and CD using TravisCI and Docker (as part of Udacity Cloud Developer Nanodegree Program).

# Tech/Tool Stack

* Node.js
* JavaScript / TypeScript
* Docker
* GitHub
* TravisCI

# Use Cases

* building a Docker image
* running a Docker image
* passing arguments (build image process) and environment variables (running container)
* reading environment variables in Node.js
* executing a TravisCI build (TravisCI - GitHub interaction)
* pushing a Docker image to Docker Hub, pulling an image from Docker Hub

# Nerdy stuff

Simple commands to build and run a docker image, tag an image, log in into docker hub and push an image to docker hub: 

```
docker build -t simple-node .
docker build -t simple-node --build-arg FAVORITE_FOOD=pizza .
docker run simple-node
docker run -d simple-node
docker run -e FAVORITE_FOOD=pizza simple-node
docker tag simple-node <YOUR_DOCKER_HUB_ACCOUNT>/simple-node:latest
echo <DOCKER_PASSWORD> | docker login -u <DOCKER_USERNAME> --password-stdin
docker push <YOUR_DOCKER_HUB_ACCOUNT>/simple-node
```