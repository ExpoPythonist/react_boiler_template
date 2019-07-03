#!/bin/bash

set -a
. ./env/prod.env
set +a

REACT_APP_ENV=production npm run build