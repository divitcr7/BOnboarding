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
function SvgEdit({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M11 3H4a2.997 2.997 0 0 0-3 3v14a2.997 2.997 0 0 0 3 3h14a2.997 2.997 0 0 0 3-3v-7a1 1 0 0 0-2 0v7c0 .276-.111.525-.293.707S18.276 21 18 21H4c-.276 0-.525-.111-.707-.293S3 20.276 3 20V6c0-.276.111-.525.293-.707S3.724 5 4 5h7a1 1 0 0 0 0-2zm6.793-1.207-9.5 9.5a.992.992 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.213l4-1c.167-.041.33-.129.465-.263l9.5-9.5c.609-.609.914-1.41.914-2.207s-.305-1.598-.914-2.207a3.119 3.119 0 0 0-4.415-.001zm1.414 1.414c.219-.219.504-.328.793-.328s.574.109.793.328.328.504.328.793-.109.574-.328.793l-9.304 9.304-2.114.529.529-2.114z" />
    </svg>
  );
}
export default SvgEdit;
