#!/bin/bash


set -a
. ./env/stage.env
set +a

REACT_APP_ENV=stage npm run build