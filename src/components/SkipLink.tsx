"use client";

import { useState } from "react";

export function SkipLink() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`skip-link ${isFocused ? "skip-link--focused" : ""}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      跳至主要內容
    </a>
  );
}
