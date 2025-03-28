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
function SvgEdit3({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M12 21h9a1 1 0 0 0 0-2h-9a1 1 0 0 0 0 2zm3.793-18.207-12.5 12.5a.992.992 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.213l4-1c.167-.041.33-.129.465-.263l12.5-12.5c.609-.609.914-1.41.914-2.207s-.305-1.598-.914-2.207a3.119 3.119 0 0 0-4.415-.001zm1.414 1.414c.219-.219.504-.328.793-.328s.574.109.793.328.328.504.328.793-.109.574-.328.793L6.489 18.097l-2.115.529.529-2.115z" />
    </svg>
  );
}
export default SvgEdit3;
