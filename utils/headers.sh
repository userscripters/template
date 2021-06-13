#!/usr/bin/env bash

prepend_headers() {
    local path=$1
    local headers=$(cat $2)

    echo "$(
        echo $headers
        cat $path
    z)" >$path
}

iterate_dist() {
    local folder=$1
    local headers=$2

    local path

    ls -1 $folder | while read entry; do
        path="${folder}/${entry}"

        if [[ $(stat $path -c %F) == directory ]]; then
            iterate_dist $path $headers
        else
            prepend_headers $path $headers
        fi
    done

}

iterate_dist dist dist/headers.js
