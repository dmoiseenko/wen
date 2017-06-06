#!/usr/bin/env bash

DOCKER_COMPOSE="docker-compose
--project-name wenTest
-f docker-compose.yml
-f docker-compose.test.yml
-f docker-compose.logs.yml"

${DOCKER_COMPOSE} down -v
cleanup_command_status=$?

docker system prune -f
docker system df
docker system info

if [[ "$cleanup_command_status" -ne 0 ]] ; then
	exit ${cleanup_command_status}
fi


${DOCKER_COMPOSE} build
${DOCKER_COMPOSE} run --service-ports runner yarn run test
docker_command_status=$?

${DOCKER_COMPOSE} down -v
cleanup_command_status=$?

if [[ "$docker_command_status" -ne 0 ]] ; then
	exit ${docker_command_status}
fi

if [[ "$cleanup_command_status" -ne 0 ]] ; then
	exit ${cleanup_command_status}
fi

exit 0
