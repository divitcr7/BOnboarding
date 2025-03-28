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
function SvgArchive({
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
      <path d="M4 9h16v11H4zM1 2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1 2h20v3H2zm8 9h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgArchive;
