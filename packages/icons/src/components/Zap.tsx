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
function SvgZap({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="m11.585 5.26-.577 4.616c.033.716.465 1.124.992 1.124h6.865l-6.45 7.74.577-4.616C12.959 13.408 12.527 13 12 13H5.135zm.647-3.9-10 12A1 1 0 0 0 3 15h7.867l-.859 6.876a.999.999 0 0 0 1.76.764l10-12A1 1 0 0 0 21 9h-7.867l.859-6.876a.999.999 0 0 0-1.76-.764z" />
    </svg>
  );
}
export default SvgZap;
