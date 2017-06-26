#!/usr/bin/env bash

DOCKER_COMPOSE="docker-compose
--project-name wenProd
-f docker-compose.yml
-f docker-compose.prod.yml
-f docker-compose.logs.yml"

case $1 in
"up")
	docker system prune -f
  ${DOCKER_COMPOSE} build
  ${DOCKER_COMPOSE} up -d
	;;
"down")
	${DOCKER_COMPOSE} down -v --rmi local
	;;
*)
  echo "First argument must be one of 'up' or 'down'"
	exit 1;;
esac
