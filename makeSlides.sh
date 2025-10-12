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

convert_to_pdf slides/endorsements-logbooks/endorsements-logbooks.md
convert_to_pdf slides/pilot-qualifications/pilot-qualifications.md
convert_to_pdf slides/part-61/c-student.md
convert_to_pdf slides/part-61/d-recreational.md
convert_to_pdf slides/part-61/e-private.md
convert_to_pdf slides/part-61/f-commercial.md
convert_to_pdf slides/part-61/h-instructors.md
convert_to_pdf slides/part-61/j-sport.md
convert_to_pdf slides/part-61/k-sport-instructors.md

convert_to_pdf slides/human-factors/human-factors.md
convert_to_pdf slides/ground-operations/airport-markings.md
convert_to_pdf slides/ground-operations/runway-incursions.md
convert_to_pdf slides/ground-operations/taxi-operations.md
convert_to_pdf slides/systems/flight-controls.md
convert_to_pdf slides/systems/powerplants.md
convert_to_pdf slides/systems/systems.md
convert_to_pdf slides/systems/instruments.md
convert_to_pdf slides/airport-operations/airport-operations.md
convert_to_pdf slides/weather/weather-products.md
convert_to_pdf slides/weather/weather-theory.md
convert_to_pdf slides/airworthiness/airworthiness.md
convert_to_pdf slides/collision-avoidance/collision-avoidance.md
convert_to_pdf slides/night-operations/night-operations.md
convert_to_pdf slides/navigation-systems/navigation-systems.md
convert_to_pdf slides/airspace/airspace-1.md
convert_to_pdf slides/airspace/airspace-2.md
convert_to_pdf slides/airspace/airspace-3.md
convert_to_pdf slides/airspace/airspace-4.md
convert_to_pdf slides/regulations/regulations.md
convert_to_pdf slides/performance/performance.md
convert_to_pdf slides/weight-and-balance/weight-and-balance.md
convert_to_pdf slides/flight-planning/flight-planning.md
convert_to_pdf slides/high-altitude/high-altitude.md

convert_to_pdf slides/foi/effective-teaching.md
convert_to_pdf slides/foi/human-behavior.md
convert_to_pdf slides/foi/learning-process.md
convert_to_pdf slides/foi/lesson-plans.md
convert_to_pdf slides/foi/student-evaluation.md
convert_to_pdf slides/foi/teaching-risk-management.md

convert_to_pdf slides/aerodynamics/forces-template.md
convert_to_pdf slides/aerodynamics/lift-drag-template.md
convert_to_pdf slides/aerodynamics/load-factor-template.md
convert_to_pdf slides/aerodynamics/stability-template.md

convert_to_pdf slides/ifr/approaches-2.md

# Recursively scan all .md files in the slides directory and convert them to .pdf using marp
# mkdir -p static/slides
# find slides -type f -name '*.md' | while read -r file; do
#     filename=$(basename "$file" .md)
#     echo "convert_to_pdf $file            static/slides/$filename.pdf"
# done