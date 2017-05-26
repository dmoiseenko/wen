#!/usr/bin/env bash

DOCKER_COMPOSE="docker-compose
--project-name wen_production
-f docker-compose.yml
-f docker-compose.prod.yml
-f docker-compose.logs.yml"

case $1 in
"up")
	${DOCKER_COMPOSE} build
  ${DOCKER_COMPOSE} up -d
	;;
"down")
	${DOCKER_COMPOSE} down
	;;
*)
  echo "First argument must be one of 'up' or 'down'"
	exit 1;;
esac
