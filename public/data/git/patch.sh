#!/bin/sh
set -e

# Checkout Origin Dev Branch
git checkout origin/dev

git_date=$(date +'%m-%d-%Y')

git switch -c "patch-ubuntu-${git_date}"
#

