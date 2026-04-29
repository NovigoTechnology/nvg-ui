#!/bin/sh
# This script ensures that only yarn is used to install dependencies
# Only runs in development mode, not when installed as a dependency

# Detect if we're being installed as a dependency (inside node_modules)
case "$PWD" in
  */node_modules/@novigotechnology/nvg-ui|*/node_modules/nvg-ui)
    # Skip validation when installed as a dependency
    exit 0
    ;;
esac

# Only enforce yarn in development
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
