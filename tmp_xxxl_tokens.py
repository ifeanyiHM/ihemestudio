from pathlib import Path
import re
root = Path('src')
tokens = set()
for path in sorted(root.rglob('*.tsx')):
    text = path.read_text(encoding='utf-8')
    tokens.update(re.findall(r'xxxl:([^\s"\']+)', text))
for token in sorted(tokens):
    print(token)
