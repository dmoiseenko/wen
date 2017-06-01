FROM node:7.10-alpine

RUN apk add --no-cache make gcc g++ python bash

WORKDIR /usr/src/app

COPY yarn.lock .
COPY package.json .

RUN yarn
