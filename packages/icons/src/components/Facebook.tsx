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
function SvgFacebook({
  size = 'md',
  color = '#000000',
  ...props
}: SvgIconProps) {
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
      <path d="M17 3v2h-2c-.552 0-1.053.225-1.414.586S13 6.448 13 7v3a1 1 0 0 0 1 1h2.719l-.5 2H14a1 1 0 0 0-1 1v7h-2v-7a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7c0-1.105.447-2.103 1.172-2.828S13.895 3 15 3zm1-2h-3c-1.657 0-3.158.673-4.243 1.757S9 5.343 9 7v2H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7h2c.466 0 .858-.319.97-.757l1-4A1 1 0 0 0 18 9h-3V7h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
    </svg>
  );
}
export default SvgFacebook;
