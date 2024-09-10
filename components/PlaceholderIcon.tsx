import React from 'react';

interface PlaceholderIconProps {
  width: number;
  height: number;
  className?: string;
}

export function PlaceholderIcon({ width, height, className = '' }: PlaceholderIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" fill="#E5E7EB" />
      <path
        d="M30 40 L50 60 L70 40"
        stroke="#9CA3AF"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );
}