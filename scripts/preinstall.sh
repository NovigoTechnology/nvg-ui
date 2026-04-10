#!/bin/sh
# This script ensures that only yarn is used to install dependencies
# Only runs in development mode, not when installed as a dependency

# Detect if we're being installed as a dependency
# INIT_CWD is set by npm/yarn to the original directory where the install was run
# If it differs from PWD, we're being installed as a dependency
if [ -n "$INIT_CWD" ] && [ "$INIT_CWD" != "$PWD" ]; then
  # Skip validation when installed as a dependency
  exit 0
fi

# Only enforce yarn in development (top-level install)
if [ "$npm_execpath" != "" ] && [ "$(basename "$npm_execpath")" != "yarn.js" ] && [ "$(basename "$npm_execpath")" != "yarn" ]; then
  echo ""
  echo "⚠️  This project uses Yarn for package management."
  echo "📦 Please use 'yarn install' instead of 'npm install'"
  echo ""
  echo "If Yarn isn't available yet, enable Corepack first:"
  echo "  corepack enable"
  echo "Then run:"
  echo "  yarn install"
  echo ""
  exit 1
fi
