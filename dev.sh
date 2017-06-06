#!/usr/bin/env bash

DOCKER_COMPOSE="docker-compose
--project-name wenDev
-f docker-compose.yml
-f docker-compose.dev.yml
-f docker-compose.logs.yml"

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
  echo "First argument must be one of 'up' or 'down'"
	exit 1;;
esac
