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
function SvgRotateCw({
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
      <path d="M19.547 14.667c-.736 2.083-2.245 3.67-4.094 4.553s-4.031 1.061-6.114.325-3.67-2.245-4.553-4.094-1.061-4.031-.325-6.114 2.245-3.67 4.094-4.553 4.031-1.061 6.114-.325a7.859 7.859 0 0 1 2.987 1.882L20.48 9H17a1 1 0 0 0 0 2h6.01a.986.986 0 0 0 .71-.307l.034-.038a.993.993 0 0 0 .244-.615c.002-.014.002-.028.002-.042V4a1 1 0 0 0-2 0v3.685L19.084 4.94a9.854 9.854 0 0 0-3.748-2.366c-2.604-.921-5.336-.698-7.644.405S3.495 6.067 2.575 8.671s-.696 5.335.406 7.643 3.088 4.197 5.692 5.117 5.335.697 7.643-.406 4.197-3.088 5.117-5.692a1 1 0 1 0-1.886-.666z" />
    </svg>
  );
}
export default SvgRotateCw;
