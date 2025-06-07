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

# convert_to_pdf slides/endorsements-logbooks/endorsements-logbooks.md    static/slides/endorsements-logbooks.pdf
# convert_to_pdf slides/pilot-qualifications/pilot-qualifications.md      static/slides/pilot-qualifications.pdf
# convert_to_pdf slides/part-61/c-student.md                              static/slides/c-student.pdf
# convert_to_pdf slides/part-61/d-recreational.md                         static/slides/d-recreational.pdf
# convert_to_pdf slides/part-61/e-private.md                              static/slides/e-private.pdf
# convert_to_pdf slides/part-61/f-commercial.md                           static/slides/f-commercial.pdf
# convert_to_pdf slides/part-61/h-instructors.md                          static/slides/h-instructors.pdf
# convert_to_pdf slides/part-61/j-sport.md                                static/slides/j-sport.pdf
# convert_to_pdf slides/part-61/k-sport-instructors.md                    static/slides/k-sport-instructors.pdf

# convert_to_pdf slides/human-factors/human-factors.md                      static/slides/human-factors.pdf
# convert_to_pdf slides/ground-operations/airport-markings.md               static/slides/airport-markings.pdf
# convert_to_pdf slides/ground-operations/runway-incursions.md              static/slides/runway-incursions.pdf
# convert_to_pdf slides/ground-operations/taxi-operations.md                static/slides/taxi-operations.pdf
# convert_to_pdf slides/systems/flight-controls.md                          static/slides/flight-controls.pdf
# convert_to_pdf slides/systems/powerplants.md                              static/slides/powerplants.pdf
# convert_to_pdf slides/systems/systems.md                                  static/slides/systems.pdf
# convert_to_pdf slides/systems/instruments.md                              static/slides/instruments.pdf
# convert_to_pdf slides/airport-operations/airport-operations.md            static/slides/airport-operations.pdf
# convert_to_pdf slides/weather/weather-products.md                         static/slides/weather-products.pdf
# convert_to_pdf slides/weather/weather-theory.md                           static/slides/weather-theory.pdf
# convert_to_pdf slides/airworthiness/airworthiness.md                      static/slides/airworthiness.pdf
# convert_to_pdf slides/collision-avoidance/collision-avoidance.md          static/slides/collision-avoidance.pdf
# convert_to_pdf slides/night-operations/night-operations.md                static/slides/night-operations.pdf
# convert_to_pdf slides/navigation-systems/navigation-systems.md            static/slides/navigation-systems.pdf
# convert_to_pdf slides/airspace/airspace-1.md                              static/slides/airspace-1.pdf
# convert_to_pdf slides/airspace/airspace-2.md                              static/slides/airspace-2.pdf
# convert_to_pdf slides/airspace/airspace-3.md                              static/slides/airspace-3.pdf
# convert_to_pdf slides/airspace/airspace-4.md                              static/slides/airspace-4.pdf
# convert_to_pdf slides/regulations/regulations.md                          static/slides/regulations.pdf
convert_to_pdf slides/performance/performance.md                          static/slides/performance.pdf
convert_to_pdf slides/weight-and-balance/weight-and-balance.md            static/slides/weight-and-balance.pdf
# convert_to_pdf slides/flight-planning/flight-planning.md                  static/slides/flight-planning.pdf
# convert_to_pdf slides/high-altitude/high-altitude.md                      static/slides/high-altitude.pdf

# convert_to_pdf slides/foi/effective-teaching.md                           static/slides/effective-teaching.pdf
# convert_to_pdf slides/foi/human-behavior.md                               static/slides/human-behavior.pdf
# convert_to_pdf slides/foi/learning-process.md                             static/slides/learning-process.pdf
# convert_to_pdf slides/foi/lesson-plans.md                                 static/slides/lesson-plans.pdf
# convert_to_pdf slides/foi/student-evaluation.md                           static/slides/student-evaluation.pdf
# convert_to_pdf slides/foi/teaching-risk-management.md                     static/slides/teaching-risk-management.pdf

# Recursively scan all .md files in the slides directory and convert them to .pdf using marp
# mkdir -p static/slides
# find slides -type f -name '*.md' | while read -r file; do
#     filename=$(basename "$file" .md)
#     echo "convert_to_pdf $file            static/slides/$filename.pdf"
# done