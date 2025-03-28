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
function SvgLoader({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M11 2v4a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 16v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0zM4.223 5.637l2.83 2.83a.999.999 0 1 0 1.414-1.414l-2.83-2.83a.999.999 0 1 0-1.414 1.414zm11.31 11.31 2.83 2.83a.999.999 0 1 0 1.414-1.414l-2.83-2.83a.999.999 0 1 0-1.414 1.414zM2 13h4a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm16 0h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2zM5.637 19.777l2.83-2.83a.999.999 0 1 0-1.414-1.414l-2.83 2.83a.999.999 0 1 0 1.414 1.414zm11.31-11.31 2.83-2.83a.999.999 0 1 0-1.414-1.414l-2.83 2.83a.999.999 0 1 0 1.414 1.414z" />
    </svg>
  );
}
export default SvgLoader;
