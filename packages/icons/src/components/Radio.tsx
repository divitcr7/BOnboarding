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
function SvgRadio({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M15 12a2.997 2.997 0 0 0-5.121-2.121 2.997 2.997 0 0 0 0 4.242 2.997 2.997 0 0 0 4.242 0A2.997 2.997 0 0 0 15 12zm-2 0c0 .276-.111.525-.293.707S12.276 13 12 13s-.525-.111-.707-.293S11 12.276 11 12s.111-.525.293-.707S11.724 11 12 11s.525.111.707.293.293.431.293.707zm2.533-3.532c.977.976 1.466 2.254 1.466 3.535s-.487 2.559-1.462 3.536a1 1 0 1 0 1.415 1.413c1.366-1.367 2.048-3.161 2.047-4.951s-.686-3.583-2.053-4.949a1 1 0 1 0-1.413 1.415zm-7.066 7.064C7.49 14.557 7.001 13.279 7 11.998s.487-2.559 1.462-3.536a1 1 0 1 0-1.415-1.413C5.682 8.415 4.999 10.209 5 11.999s.686 3.583 2.053 4.949a1 1 0 1 0 1.413-1.415zm9.896-9.895a8.97 8.97 0 0 1 2.635 6.364 8.966 8.966 0 0 1-2.635 6.362 1 1 0 0 0 1.414 1.414 10.97 10.97 0 0 0 3.221-7.776c0-2.815-1.074-5.631-3.221-7.778a.999.999 0 1 0-1.414 1.414zM5.637 18.363a8.97 8.97 0 0 1-2.635-6.364c0-2.304.878-4.605 2.635-6.362a1 1 0 0 0-1.414-1.414c-2.147 2.147-3.22 4.963-3.221 7.776s1.074 5.63 3.221 7.778a.999.999 0 1 0 1.414-1.414z" />
    </svg>
  );
}
export default SvgRadio;
