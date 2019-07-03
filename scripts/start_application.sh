#!/bin/bash

if [ "$DEPLOYMENT_GROUP_NAME" == "oametrix-frontend-dev" ]
then
    if [ -f "/apps/oametrix/frontend/docker-dev.yml" ]; then
	    docker-compose -f /apps/oametrix/frontend/docker-dev.yml build
        docker-compose -f /apps/oametrix/frontend/docker-dev.yml up -d
    fi
fi

if [ "$DEPLOYMENT_GROUP_NAME" == "oametrix-frontend-staging" ]
then
    if [ -f "/apps/oametrix/frontend/docker-stage.yml" ]; then
        docker-compose -f /apps/oametrix/frontend/docker-stage.yml build
        docker-compose -f /apps/oametrix/frontend/docker-stage.yml up -d
    fi
fi

if [ "$DEPLOYMENT_GROUP_NAME" == "oametrix-frontend" ]
then
    sudo systemctl restart nginx
fi
