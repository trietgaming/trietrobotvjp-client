find ./src -type f -name '*.jsx' -exec bash -c 'grep -l "</" $0' {} \; -exec bash -c 'mv "$0" "${0%.jsx}.tsx"' {} \;
