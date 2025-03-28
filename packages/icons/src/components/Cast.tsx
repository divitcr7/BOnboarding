import * as React from 'react';
import type { SVGProps } from 'react';
import useWithViewbox from '../useWithViewbox';
const mapSize = {
  sm: 16,
  md: 24,
  lg: 32,
};
interface SvgIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}
function SvgCast({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
  const ref: React.RefObject<SVGSVGElement> = React.useRef(null);
  useWithViewbox(ref);
  const actualSize = mapSize[size] || 24;
  props = {
    fill: color,
    width: actualSize,
    height: actualSize,
    ref,
    ...props,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <path d="M1.8 17.08a3.956 3.956 0 0 1 2.292 1.386c.405.497.693 1.093.829 1.741a1 1 0 0 0 1.957-.413 6.098 6.098 0 0 0-1.235-2.591A5.962 5.962 0 0 0 2.2 15.12a1.001 1.001 0 0 0-.4 1.96zm.089-4.036a7.935 7.935 0 0 1 5.006 2.546 8.105 8.105 0 0 1 2.061 4.526 1 1 0 1 0 1.986-.232 10.106 10.106 0 0 0-2.57-5.642 9.936 9.936 0 0 0-6.263-3.186 1 1 0 1 0-.221 1.987zM3 8V6c0-.276.111-.525.293-.707S3.724 5 4 5h16c.276 0 .525.111.707.293S21 5.724 21 6v12c0 .276-.111.525-.293.707S20.276 19 20 19h-6a1 1 0 0 0 0 2h6a2.997 2.997 0 0 0 3-3V6a2.997 2.997 0 0 0-3-3H4a2.997 2.997 0 0 0-3 3v2a1 1 0 0 0 2 0zM2 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgCast;
