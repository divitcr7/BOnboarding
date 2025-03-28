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
function SvgMoreVertical({
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
      <path d="M14 12c0-.552-.225-1.053-.586-1.414a1.996 1.996 0 0 0-2.828 0 1.996 1.996 0 0 0 0 2.828 1.996 1.996 0 0 0 2.828 0c.361-.361.586-.862.586-1.414zm0-7c0-.552-.225-1.053-.586-1.414a1.996 1.996 0 0 0-2.828 0 1.996 1.996 0 0 0 0 2.828 1.996 1.996 0 0 0 2.828 0C13.775 6.053 14 5.552 14 5zm0 14c0-.552-.225-1.053-.586-1.414a1.996 1.996 0 0 0-2.828 0 1.996 1.996 0 0 0 0 2.828 1.996 1.996 0 0 0 2.828 0c.361-.361.586-.862.586-1.414z" />
    </svg>
  );
}
export default SvgMoreVertical;
