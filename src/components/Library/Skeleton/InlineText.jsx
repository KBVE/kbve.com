import React from 'react';

/**
 * Inline Text Skeleton - Placeholder Component
 * @param {number} width in px
 * @param {number} height in px
 * @returns 
 */
const InlineText = ({ width = 100, height = 24 }) => {
  return (
    <div className={`w-[${width}px] h-[${height}px] rounded bg-gray-700 animate-pulse inline-flex ml-2 mr-2`} />
  )
}

export default InlineText;
