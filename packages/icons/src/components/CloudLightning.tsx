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
function SvgCloudLightning({
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
      <path d="M19.199 17.88c1.623-.33 2.961-1.288 3.808-2.566s1.208-2.884.878-4.507a5.963 5.963 0 0 0-2.267-3.592A6.04 6.04 0 0 0 18.004 6h-.524a8.978 8.978 0 0 0-3.915-4.753C11.582.078 9.15-.335 6.744.286S2.41 2.448 1.241 4.43-.341 8.845.28 11.251a8.969 8.969 0 0 0 4.355 5.623 1 1 0 1 0 .969-1.749 6.974 6.974 0 0 1-3.388-4.374c-.483-1.872-.163-3.761.747-5.305s2.408-2.739 4.28-3.223 3.761-.163 5.305.747 2.739 2.408 3.223 4.28c.116.435.506.75.969.75h1.256c.896.004 1.74.3 2.42.812a3.964 3.964 0 0 1 1.509 2.392c.22 1.083-.019 2.15-.585 3.005s-1.456 1.491-2.539 1.711a1 1 0 0 0 .398 1.96zm-7.031-7.435-4 6A1.001 1.001 0 0 0 9 18h4.131l-2.964 4.445a1.001 1.001 0 0 0 1.664 1.11l4-6A1 1 0 0 0 15 16h-4.131l2.964-4.445a1.001 1.001 0 0 0-1.664-1.11z" />
    </svg>
  );
}
export default SvgCloudLightning;
