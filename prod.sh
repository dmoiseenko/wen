#!/usr/bin/env bash

DOCKER_COMPOSE="docker-compose
--project-name wenProd
-f docker-compose.yml
-f docker-compose.prod.yml
-f docker-compose.logs.yml"

case $1 in
"up")
  ${DOCKER_COMPOSE} build
  ${DOCKER_COMPOSE} run --service-ports runner bash -c "yarn run wait:prod && yarn run bootstrap"
	;;
"down")
	${DOCKER_COMPOSE} down -v --rmi local
	;;
*)
  echo "First argument must be one of 'up' or 'down'"
	exit 1;;
esac
