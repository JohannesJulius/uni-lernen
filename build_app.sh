#!/bin/zsh
# Baut Uni Lernen.app und legt sie in den Ordner "Uni Lernen" auf dem Schreibtisch.
set -e
cd "$(dirname "$0")"
node build.mjs
OUT="${1:-$HOME/Desktop/Uni Lernen}"
mkdir -p "$OUT"
APP="$OUT/Uni Lernen.app"
TMP=$(mktemp -d)
mkdir -p "$TMP/Uni Lernen.app/Contents/MacOS" "$TMP/Uni Lernen.app/Contents/Resources"
# Universal-Binary (Apple Silicon + Intel), damit die App auf jedem Mac ab macOS 13 läuft
for ARCH in arm64 x86_64; do
  swiftc -O -target "$ARCH-apple-macos13.0" -o "$TMP/UniLernen-$ARCH" App/main.swift -framework Cocoa -framework WebKit -framework PDFKit
done
lipo -create -output "$TMP/Uni Lernen.app/Contents/MacOS/UniLernen" "$TMP/UniLernen-arm64" "$TMP/UniLernen-x86_64"
rm "$TMP/UniLernen-arm64" "$TMP/UniLernen-x86_64"
cp -R web "$TMP/Uni Lernen.app/Contents/Resources/web"
cp -R claude-projekt "$TMP/Uni Lernen.app/Contents/Resources/claude-projekt"
[ -f App/AppIcon.icns ] && cp App/AppIcon.icns "$TMP/Uni Lernen.app/Contents/Resources/"
cat > "$TMP/Uni Lernen.app/Contents/Info.plist" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
<key>CFBundleName</key><string>Uni Lernen</string>
<key>CFBundleDisplayName</key><string>Uni Lernen</string>
<key>CFBundleIdentifier</key><string>de.johannes.unilernen</string>
<key>CFBundleExecutable</key><string>UniLernen</string>
<key>CFBundlePackageType</key><string>APPL</string>
<key>CFBundleShortVersionString</key><string>${VERSION:-1.0}</string>
<key>CFBundleVersion</key><string>$(date +%Y%m%d%H%M)</string>
<key>CFBundleIconFile</key><string>AppIcon</string>
<key>LSMinimumSystemVersion</key><string>13.0</string>
<key>NSHighResolutionCapable</key><true/>
<key>NSPrincipalClass</key><string>NSApplication</string>
</dict></plist>
PLIST
codesign --force --deep -s - "$TMP/Uni Lernen.app" 2>/dev/null || true
rm -rf "$APP"
mv "$TMP/Uni Lernen.app" "$APP"
echo "Fertig: $APP"
