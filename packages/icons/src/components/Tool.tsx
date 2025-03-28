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
function SvgTool({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="m15.407 6.993 3.77-3.756a1 1 0 0 0-.296-1.618 6.971 6.971 0 0 0-5.77.001 6.98 6.98 0 0 0-3.664 3.909 6.978 6.978 0 0 0-.087 4.697l-6.447 6.447c-.609.609-.914 1.41-.914 2.207s.305 1.598.914 2.207 1.41.914 2.207.914 1.598-.305 2.207-.914l6.448-6.448.151.049a6.971 6.971 0 0 0 4.963-.307c1.761-.797 3.033-2.234 3.664-3.909s.624-3.594-.173-5.355a.999.999 0 0 0-1.618-.295l-3.756 3.77zM13.986 5.6a1.997 1.997 0 0 0-.001 2.8l1.607 1.608a2.004 2.004 0 0 0 2.807.008l2.574-2.574a5.007 5.007 0 0 1-2.908 5.118 4.976 4.976 0 0 1-4.124-.001 1.003 1.003 0 0 0-1.118.205l-6.91 6.91c-.219.219-.504.328-.793.328s-.574-.109-.793-.328-.328-.504-.328-.793.109-.574.328-.793l6.91-6.91c.301-.301.37-.746.204-1.119-.569-1.258-.575-2.626-.123-3.825s1.359-2.222 2.617-2.792a4.96 4.96 0 0 1 2.623-.413z" />
    </svg>
  );
}
export default SvgTool;
