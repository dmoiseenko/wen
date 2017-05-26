#!/usr/bin/env bash

#!/usr/bin/env bash

DOCKER_COMPOSE="docker-compose
--project-name wenDev
-f docker-compose.yml
-f docker-compose.dev.yml
-f docker-compose.logs.yml"

${DOCKER_COMPOSE} build
${DOCKER_COMPOSE} run --service-ports runner yarn run test:common
${DOCKER_COMPOSE} down
