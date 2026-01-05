import React from 'react';

/**
 * Parse simple markdown and convert to React elements
 * Supports: **bold**
 */
export function parseMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let currentText = '';
  let i = 0;

  while (i < text.length) {
    // Check for **bold**
    if (text[i] === '*' && text[i + 1] === '*') {
      // Save any text before the **
      if (currentText) {
        parts.push(currentText);
        currentText = '';
      }

      // Find the closing **
      let j = i + 2;
      let boldText = '';
      while (j < text.length - 1) {
        if (text[j] === '*' && text[j + 1] === '*') {
          // Found closing **
          parts.push(<strong key={`bold-${i}`}>{boldText}</strong>);
          i = j + 2;
          break;
        }
        boldText += text[j];
        j++;
      }

      // If no closing ** found, treat as regular text
      if (j >= text.length - 1 && !(text[j] === '*' && text[j + 1] === '*')) {
        currentText += '**' + boldText;
        i = j;
      }
    } else {
      currentText += text[i];
      i++;
    }
  }

  // Add any remaining text
  if (currentText) {
    parts.push(currentText);
  }

  return parts;
}

/**
 * Component to render text with markdown support
 */
export function MarkdownText({ text, className }: { text: string; className?: string }) {
  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {lineIndex > 0 && <br />}
          <span className={className}>{parseMarkdown(line)}</span>
        </React.Fragment>
      ))}
    </>
  );
}
