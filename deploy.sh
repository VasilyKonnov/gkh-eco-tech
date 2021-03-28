#!/usr/bin/env bash
scp -i $DEPLOY_DEV_FILE -o StrictHostKeyChecking=no -r /www/build_dev/* student@dev.brain4you.ru:/srv/build/build_dev/