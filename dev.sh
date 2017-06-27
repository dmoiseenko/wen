#!/usr/bin/env bash

DOCKER_COMPOSE="docker-compose
--project-name wenDev
-f docker-compose.logs.yml
-f docker-compose.yml
-f docker-compose.dev.yml"

case $1 in
"up")
	${DOCKER_COMPOSE} build
  ${DOCKER_COMPOSE} run --service-ports runner bash
  ${DOCKER_COMPOSE} down
	;;
"down")
	${DOCKER_COMPOSE} down
	;;
*)
  ${DOCKER_COMPOSE} build
  ${DOCKER_COMPOSE} run --service-ports runner bash -c "yarn run bootstrap && yarn run wait:dev && bash"
  ${DOCKER_COMPOSE} down
esac
