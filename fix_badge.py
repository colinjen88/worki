#!/usr/bin/env python3
"""
Fix Status Badge text only
"""

import re

# Read the file
with open('let/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Simplify Status Badge text using regex for more flexible matching
pattern = r'<span\s+class="text-sm font-medium text-slate-300 tracking-wide">戰國策網路科技的主管您好，我想應徵貴公司的「<span class="text-white font-bold">網頁設計師</span>」職務，<br>能夠從規劃、設計到完整建置網站上線，熟SEO，我的配合度很高，希望能有這個機會，感謝。</span>'

replacement = '<span class="text-sm font-medium text-slate-300 tracking-wide">開放職涯機會 — <span class="text-white font-bold">網頁設計師</span> 職缺</span>'

# Try regex replacement
new_content = re.sub(pattern, replacement, content)

# Check if replacement was made
if new_content != content:
    print("Status Badge text updated successfully!")
else:
    print("Pattern not found, trying alternative approach...")
    # Try a simpler pattern that matches just the unique text portion
    simple_pattern = r'戰國策網路科技的主管您好，我想應徵貴公司的.*希望能有這個機會，感謝。'
    simple_replacement = '開放職涯機會 — <span class="text-white font-bold">網頁設計師</span> 職缺'
    new_content = re.sub(simple_pattern, simple_replacement, content, flags=re.DOTALL)
    if new_content != content:
        print("Status Badge text updated with alternative pattern!")
    else:
        print("ERROR: Could not find Status Badge text to replace")
        # Print what we're looking for
        print("Looking for text containing: 戰國策網路科技")
        if '戰國策網路科技' in content:
            print("Found the text in content, but pattern matching failed")
        else:
            print("Text not found in content at all")

# Write the file back
with open('let/index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done!")
