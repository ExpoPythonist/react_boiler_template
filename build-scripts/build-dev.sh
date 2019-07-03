#!/bin/bash


set -a
. ./env/dev.env
set +a

REACT_APP_ENV=development npm run build
