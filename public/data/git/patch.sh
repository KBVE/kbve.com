#!/bin/sh
set -e

# Checkout Origin Dev Branch
git checkout origin/dev

git_date=$(date +'%m-%d-%Y-%s')

git branch "patch-ubuntu-${git_date}"

git checkout "patch-ubuntu-${git_date}"
#

