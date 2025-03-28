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
function SvgThumbsDown({
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
      <path d="M11 15a1 1 0 0 0-1-1H4.321c-.065-.002-.153-.011-.153-.011-.273-.041-.502-.188-.655-.396s-.225-.47-.184-.742l1.38-8.998c.037-.239.156-.448.325-.6A.994.994 0 0 1 5.72 3H16v9.788l-3.608 8.118A2 2 0 0 1 11 19zm-2 1v3c0 1.104.449 2.106 1.172 2.828S11.896 23 13 23c.405 0 .754-.241.914-.594l4-9A.982.982 0 0 0 18 13V2a1 1 0 0 0-1-1H5.72a2.982 2.982 0 0 0-2.021.763 3.013 3.013 0 0 0-.967 1.783l-1.38 9.002c-.125.82.096 1.614.55 2.231A2.992 2.992 0 0 0 4.359 16zm8-13h2.67A1.312 1.312 0 0 1 21 4.078v6.787c-.037.34-.208.63-.455.833a1.317 1.317 0 0 1-.861.301L17 12a1 1 0 0 0 0 2h2.656a3.32 3.32 0 0 0 2.16-.756 3.3 3.3 0 0 0 1.176-2.11A1.11 1.11 0 0 0 23 11V4c0-.042-.003-.089-.009-.137a3.316 3.316 0 0 0-3.321-2.862H17a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgThumbsDown;
