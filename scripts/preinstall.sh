#!/bin/sh
# This script ensures that only yarn is used to install dependencies

if [ "$npm_execpath" != "" ] && [ "$(basename "$npm_execpath")" != "yarn.js" ] && [ "$(basename "$npm_execpath")" != "yarn" ]; then
  echo ""
  echo "⚠️  This project uses Yarn for package management."
  echo "📦 Please use 'yarn install' instead of 'npm install'"
  echo ""
  echo "If you don't have Yarn installed, run:"
  echo "  npm install -g yarn"
  echo ""
  exit 1
fi
