#!/usr/bin/env bash

DOCKER_COMPOSE="docker-compose
--project-name wenTest
-f docker-compose.yml
-f docker-compose.dev.yml
-f docker-compose.logs.yml"

${DOCKER_COMPOSE} build
${DOCKER_COMPOSE} run --service-ports runner yarn run test
docker_command_status=$?

${DOCKER_COMPOSE} down -v
cleanup_command_status=$?

if [[ "$docker_command_status" -ne 0 ]] ; then
  echo "Test fails"
	exit $docker_command_status
fi

if [[ "$cleanup_command_status" -ne 0 ]] ; then
  echo "Clean up fails"
	exit $cleanup_command_status
fi

exit 0
