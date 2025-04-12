#!/bin/bash
set -e

# Recursively all .pdf files in the slides directory to static/slides
mkdir -p static/slides
find slides -type f -name '*.pdf' -exec cp {} static/slides/ \;

convert_to_pdf() {
    local file="$1"
    local filename=$(basename "$file" .md)
    
    # Convert the markdown file to PDF using marp
    marp "$file" "--pdf" "--pdf-notes" "--allow-local-files" "-o" "static/slides/$filename.pdf"
}

# Recursively scan all .md files in the slides directory and convert them to .pdf using marp
mkdir -p static/slides
find slides -type f -name '*.md' | while read -r file; do
    filename=$(basename "$file" .md)
        
    # Convert the markdown file to PDF using marp
    echo "Converting $file to static/slides/$filename.pdf"
    cat "$file" | marp --pdf --pdf-notes --allow-local-files -o "static/slides/$filename.pdf"
done

