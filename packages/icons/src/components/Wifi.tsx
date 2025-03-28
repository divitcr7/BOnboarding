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
function SvgWifi({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M5.64 13.318a9.929 9.929 0 0 1 6.733-2.305c2.167.077 4.31.855 6.071 2.308a1 1 0 0 0 1.273-1.543 12.095 12.095 0 0 0-7.272-2.763 11.923 11.923 0 0 0-8.084 2.767 1 1 0 1 0 1.28 1.536zM2.081 9.75a14.906 14.906 0 0 1 10.236-3.737 15.093 15.093 0 0 1 9.604 3.739 1 1 0 1 0 1.317-1.505 17.09 17.09 0 0 0-10.876-4.234A16.904 16.904 0 0 0 .759 8.25a1 1 0 1 0 1.322 1.5zm7.028 7.175a4.95 4.95 0 0 1 3.274-.906c.891.07 1.765.378 2.523.909a1 1 0 0 0 1.148-1.638 7.093 7.093 0 0 0-3.513-1.265 6.954 6.954 0 0 0-4.59 1.269 1 1 0 1 0 1.158 1.63zM12 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgWifi;
