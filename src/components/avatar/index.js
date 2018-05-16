import React from 'react'

import './avatar.css'

const Avatar = ({ width, height }) => (
  <svg
    className="avatar"
    viewBox="0 0 150 150"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
  >
    <defs>
      <circle id="path-1" cx="75" cy="75" r="75" />
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Desktop-Startsida-Copy-3" transform="translate(-645.000000, -345.000000)">
        <g id="Fill-1" transform="translate(645.000000, 345.000000)">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <use id="Mask" fill="#FFE500" xlinkHref="#path-1" />
          <path
            d="M117.894667,150 L32,150 C32,122.313333 43.5193333,106.644 59.614,100.426 C64.0313333,103.244 69.288,104.877333 75.0033333,104.877333 C80.6293333,104.877333 85.874,103.244 90.18,100.492667 C106.374667,106.644 117.894667,122.302 117.894667,150 M100,72.386 C100,86.2206667 88.782,97.4386667 74.9473333,97.4386667 C61.1126667,97.4386667 49.8946667,86.2206667 49.8946667,72.386 C49.8946667,58.5513333 61.1126667,47.3333333 74.9473333,47.3333333 C88.782,47.3333333 100,58.5513333 100,72.386"
            fill="#FFFFFF"
            mask="url(#mask-2)"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default Avatar
