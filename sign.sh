#!/bin/bash

set -e

cd /vimium || exit 1
/vimium/node_modules/.bin/web-ext build
/vimium/node_modules/.bin/web-ext sign --api-key $API_KEY --api-secret $API_SECRET
