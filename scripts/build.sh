#!/bin/bash

npm run prebuild &&
    npm run build-legacy &&
    npm run build-modern &&
    npm run headers-tm &&
    npm run readme &&
    npm run stackapps

declare files=$(find dist -iname "*\.js" -not -iname "headers*")

for file in ${files}; do
    mv "$file" "${file%.js}.user.js"
done
