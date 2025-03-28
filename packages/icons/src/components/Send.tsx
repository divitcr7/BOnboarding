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
function SvgSend({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M22.963 2.269a1.014 1.014 0 0 0-.354-1.063.99.99 0 0 0-.812-.185 1.122 1.122 0 0 0-.126.035l-.021.007L1.67 8.056a.999.999 0 0 0-.076 1.858l8.649 3.844 3.844 8.649a1 1 0 0 0 1.857-.076l6.993-19.979c.01-.027.019-.054.027-.082zm-12.184 9.538L4.711 9.111l13.483-4.72zm8.83-6.001-4.72 13.483-2.696-6.068z" />
    </svg>
  );
}
export default SvgSend;
