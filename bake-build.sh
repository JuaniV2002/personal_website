#!/usr/bin/env bash
# Updates the VERSION group's Build hash in index.html to the current HEAD short hash.
# Run before deploy. Then commit the result.

set -e
HASH=$(git rev-parse --short=6 HEAD)
sed -i '' -E "s|id=\"build-hash\">[0-9a-f]{6}|id=\"build-hash\">$HASH|" index.html
echo "Build hash set to $HASH"
