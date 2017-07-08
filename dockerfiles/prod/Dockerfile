FROM node:7.10-alpine

WORKDIR /usr/src/app

COPY yarn.lock .
COPY package.json .

RUN apk --no-cache add --virtual builds-deps build-base python make gcc g++ && \
    apk --no-cache add bash && \
    yarn && \
    npm rebuild bcrypt --build-from-source && \
    yarn cache clean && \
    apk del builds-deps

COPY client client
COPY common common
COPY scripts scripts
COPY server server
COPY static static
COPY jest.unit.json .
COPY jest.integration.json .
COPY .babelrc .
COPY .env.prod .
COPY e2e e2e
COPY chimp.js .
COPY .eslintrc .
COPY .eslintignore .

ENV NODE_ENV production

RUN yarn run build
