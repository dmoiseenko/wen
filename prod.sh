#!/usr/bin/env bash

DOCKER_COMPOSE="docker-compose
--project-name wenProd
-f docker-compose.yml
-f docker-compose.prod.yml
-f docker-compose.logs.yml"

${DOCKER_COMPOSE} down
${DOCKER_COMPOSE} build
${DOCKER_COMPOSE} up -d
