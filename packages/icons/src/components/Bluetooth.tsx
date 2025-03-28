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
function SvgBluetooth({
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
      <path d="M13 9.586V3.414L16.086 6.5zm0 4.828 3.086 3.086L13 20.586zM5.793 7.207 10.586 12l-4.793 4.793a.999.999 0 1 0 1.414 1.414L11 14.414V23a.999.999 0 0 0 1.707.707l5.5-5.5a.999.999 0 0 0 0-1.414L13.414 12l4.793-4.793a.999.999 0 0 0 0-1.414l-5.5-5.5A1 1 0 0 0 11 1v8.586L7.207 5.793a.999.999 0 1 0-1.414 1.414z" />
    </svg>
  );
}
export default SvgBluetooth;
