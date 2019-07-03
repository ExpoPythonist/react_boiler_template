#!/bin/bash

if [ "$DEPLOYMENT_GROUP_NAME" == "oametrix-frontend-dev" ]
then
    if [ -f "/apps/oametrix/frontend/docker-dev.yml" ]; then
        systemctl disable apparmor.service --now
        service apparmor teardown
	docker-compose -f /apps/oametrix/frontend/docker-dev.yml down
    fi
fi

if [ "$DEPLOYMENT_GROUP_NAME" == "oametrix-frontend-staging" ]
then
    if [ -f "/apps/oametrix/frontend/docker-staging.yml" ]; then
        systemctl disable apparmor.service --now
        service apparmor teardown	    
        docker-compose -f /apps/oametrix/frontend/docker-staging.yml down
    fi
fi

if [ "$DEPLOYMENT_GROUP_NAME" == "oametrix-frontend" ]
then
    sudo systemctl restart nginx
fi

