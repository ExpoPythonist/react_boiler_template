#!/bin/bash

if [ "$DEPLOYMENT_GROUP_NAME" == "oametrix-frontend-dev" ]
then
    rm -rf /apps/oametrix/frontend/*
fi


