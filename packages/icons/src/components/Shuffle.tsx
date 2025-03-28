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
function SvgShuffle({
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
      <path d="M4.707 20.707 20 5.414V8a1 1 0 0 0 2 0V3a.995.995 0 0 0-.292-.706l-.002-.002A.996.996 0 0 0 21 2h-5a1 1 0 0 0 0 2h2.586L3.293 19.293a.999.999 0 1 0 1.414 1.414zm9.586-5L18.586 20H16a1 1 0 0 0 0 2h5a.995.995 0 0 0 .924-.617A.995.995 0 0 0 22 21v-5a1 1 0 0 0-2 0v2.586l-4.293-4.293a.999.999 0 1 0-1.414 1.414zm-11-11 5 5a.999.999 0 1 0 1.414-1.414l-5-5a.999.999 0 1 0-1.414 1.414z" />
    </svg>
  );
}
export default SvgShuffle;
