FROM node:7.10-alpine

RUN apk add --no-cache build-base make gcc g++ python bash

WORKDIR /usr/src/app

COPY yarn.lock .
COPY package.json .

RUN yarn
RUN npm rebuild bcrypt --build-from-source
