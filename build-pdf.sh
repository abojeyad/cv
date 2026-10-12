#!/usr/bin/env bash
# يولّد ملفي PDF للسيرة (عربي وإنجليزي) في مجلد pdf/ باستخدام Chrome.
# شغّله بعد أي تعديل على data.js أو style.css:   bash build-pdf.sh
set -e
cd "$(dirname "$0")"

CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
DIR="$(pwd -W 2>/dev/null || pwd)"
mkdir -p pdf

for lang in ar en; do
    out="pdf/Anas-Ahmed-CV-$(echo "$lang" | tr a-z A-Z).pdf"
    "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
        --print-to-pdf="$DIR/$out" "file:///$DIR/index.html?lang=$lang" 2>/dev/null
    echo "تم: $out"
done
