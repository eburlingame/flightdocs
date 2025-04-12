#!/bin/bash
set -e

# Recursively all .pdf files in the slides directory to static/slides
mkdir -p static/slides
find slides -type f -name '*.pdf' -exec cp {} static/slides/ \;

# Recursively scan all .md files in the slides directory and convert them to .pdf using marp
mkdir -p static/slides
find slides -type f -name '*.md' | while read -r file; do
    filename=$(basename "$file" .md)
        
    # Convert the markdown file to PDF using marp
    echo "Converting static/slides/$filename.pdf"
    yarn marp "$file" --pdf --pdf-notes --allow-local-files -o "static/slides/$filename.pdf"
done