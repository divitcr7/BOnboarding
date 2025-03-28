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
function SvgClipboard({
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
      <path d="M7 5c0 .552.225 1.053.586 1.414S8.448 7 9 7h6c.552 0 1.053-.225 1.414-.586S17 5.552 17 5h1c.276 0 .525.111.707.293S19 5.724 19 6v14c0 .276-.111.525-.293.707S18.276 21 18 21H6c-.276 0-.525-.111-.707-.293S5 20.276 5 20V6c0-.276.111-.525.293-.707S5.724 5 6 5zm2-4c-.552 0-1.053.225-1.414.586S7 2.448 7 3H6a2.997 2.997 0 0 0-3 3v14a2.997 2.997 0 0 0 3 3h12a2.997 2.997 0 0 0 3-3V6a2.997 2.997 0 0 0-3-3h-1c0-.552-.225-1.053-.586-1.414S15.552 1 15 1zm0 2h6v2H9z" />
    </svg>
  );
}
export default SvgClipboard;
