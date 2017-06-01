FROM node:7.10-alpine

WORKDIR /usr/src/app

COPY yarn.lock .
COPY package.json .

RUN apk add --no-cache make gcc g++ python && \
    yarn && \
    yarn cache clean && \
    apk del make gcc g++ python

COPY client client
COPY common common
COPY scripts scripts
COPY server server
COPY jest.json .
COPY .babelrc .
COPY .env.prod .

ENV NODE_ENV production

RUN yarn run build
