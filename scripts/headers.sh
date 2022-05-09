#!/bin/bash

dist="dist"
output=$dist"/headers.js"

generate-headers tampermonkey \
    -o $output \
    -m all meta "https://domain/questions/*" \
    --pretty

userscript="$(find -iwholename "./$dist/*\.js" -type f -not -iname "*headers\.js")"

sed -i -e "{1e cat $output; echo; echo" -e "; N}" $userscript
