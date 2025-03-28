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
function SvgHash({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="m14.216 10-.444 4H9.784l.444-4zm.79-7.11L14.438 8H10.45l.543-4.89a1 1 0 1 0-1.987-.22L8.438 8H4a1 1 0 0 0 0 2h4.216l-.444 4H4a1 1 0 0 0 0 2h3.549l-.543 4.89a1 1 0 0 0 1.987.221L9.562 16h3.988l-.543 4.89a1 1 0 0 0 1.987.221L15.562 16H20a1 1 0 0 0 0-2h-4.216l.444-4H20a1 1 0 0 0 0-2h-3.549l.543-4.89a1 1 0 0 0-1.987-.221z" />
    </svg>
  );
}
export default SvgHash;
