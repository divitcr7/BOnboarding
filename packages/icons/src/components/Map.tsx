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
function SvgMap({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M7 3.723V17.42l-5 2.857V6.58zm10 16.554V6.58l5-2.857v13.696zm-1.465 2.608a.993.993 0 0 0 .466.114L16 23h.001c.173 0 .344-.046.496-.132l.015-.009 6.985-3.991c.32-.183.501-.518.503-.868V2a1 1 0 0 0-1.496-.868l-6.535 3.734-7.503-3.752a1.05 1.05 0 0 0-.365-.109A1.16 1.16 0 0 0 7.999 1H8h-.001c-.173 0-.344.046-.495.132l-.015.008L.504 5.132A1 1 0 0 0 0 6v16a1 1 0 0 0 1.496.868l6.535-3.734zM15 6.618v13.764l-6-3V3.618z" />
    </svg>
  );
}
export default SvgMap;
