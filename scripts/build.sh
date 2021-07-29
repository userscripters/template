#!/bin/bash

npm run prebuild &&
    npm run build-legacy &&
    npm run build-modern &&
    npm run headers-tm &&
    npm run readme
