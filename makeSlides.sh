#!/bin/bash
set -e

# Recursively all .pdf files in the slides directory to static/slides
mkdir -p static/slides
find slides -type f -name '*.pdf' -exec cp {} static/slides/ \;

convert_to_pdf() {
    local file="$1"
    local filename=$(basename "$file" .md)
    
    # Convert the markdown file to PDF using marp
    yarn marp "$file" "--pdf" "--pdf-notes" "--allow-local-files" "-o" "static/slides/$filename.pdf"
}

convert_to_pdf slides/23-pilot-qualification/30-sport-instructors.md            static/slides/30-sport-instructors.pdf
convert_to_pdf slides/23-pilot-qualification/26-private.md                      static/slides/26-private.pdf
convert_to_pdf slides/23-pilot-qualification/24-student.md                      static/slides/24-student.pdf
convert_to_pdf slides/23-pilot-qualification/29-sport.md                        static/slides/29-sport.pdf
convert_to_pdf slides/23-pilot-qualification/23-endorsements.md                 static/slides/23-endorsements.pdf
convert_to_pdf slides/23-pilot-qualification/31-qualifications.md               static/slides/31-qualifications.pdf
convert_to_pdf slides/23-pilot-qualification/27-commercial.md                   static/slides/27-commercial.pdf
convert_to_pdf slides/23-pilot-qualification/28-instructors.md                  static/slides/28-instructors.pdf
convert_to_pdf slides/23-pilot-qualification/25-recreational.md                 static/slides/25-recreational.pdf
convert_to_pdf slides/00-human-factors/00-human-factors.md                       static/slides/00-human-factors.pdf
convert_to_pdf slides/04-ground-operations/04a-airport-markings.md              static/slides/04a-airport-markings.pdf
convert_to_pdf slides/04-ground-operations/04c-runway-incursions.md             static/slides/04c-runway-incursions.pdf
convert_to_pdf slides/04-ground-operations/04b-taxi-operations.md               static/slides/04b-taxi-operations.pdf
convert_to_pdf slides/10-systems/10-flight-controls.md                          static/slides/10-flight-controls.pdf
convert_to_pdf slides/10-systems/11-powerplants.md                              static/slides/11-powerplants.pdf
convert_to_pdf slides/10-systems/12-systems.md                                  static/slides/12-systems.pdf
convert_to_pdf slides/10-systems/13-instruments.md                              static/slides/13-instruments.pdf
convert_to_pdf slides/05-airport-operations/05-airport-operations.md            static/slides/05-airport-operations.pdf


# Recursively scan all .md files in the slides directory and convert them to .pdf using marp
# mkdir -p static/slides
# find slides -type f -name '*.md' | while read -r file; do
#     filename=$(basename "$file" .md)
#     echo "convert_to_pdf $file            static/slides/$filename.pdf"
# done