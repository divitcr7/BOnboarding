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
function SvgUmbrella({
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
      <path d="M21.84 11H2.166a10.148 10.148 0 0 1 2.485-4.796 9.974 9.974 0 0 1 6.394-3.158 10.013 10.013 0 0 1 7.354 2.255 10.02 10.02 0 0 1 3.441 5.7zm2.155.905c-.316-3.312-1.946-6.184-4.323-8.147s-5.505-3.02-8.817-2.704a11.976 11.976 0 0 0-7.67 3.789A12.156 12.156 0 0 0 .005 11.9 1 1 0 0 0 1 13h22a1 1 0 0 0 .998-.937 2.2 2.2 0 0 0-.003-.158zM17 19c0 .553-.223 1.051-.586 1.414S15.553 21 15 21s-1.051-.223-1.414-.586S13 19.553 13 19v-7a1 1 0 0 0-2 0v7c0 1.104.449 2.106 1.172 2.828a3.994 3.994 0 0 0 5.656 0A3.994 3.994 0 0 0 19 19a1 1 0 0 0-2 0z" />
    </svg>
  );
}
export default SvgUmbrella;
