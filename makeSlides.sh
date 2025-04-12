#!/bin/bash
set -e

# Recursively all .pdf files in the slides directory to static/slides
mkdir -p static/slides
find slides -type f -name '*.pdf' -exec cp {} static/slides/ \;

