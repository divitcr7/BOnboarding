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
function SvgCloudSnow({
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
      <path d="M20.401 18.496c1.517-.665 2.623-1.883 3.181-3.312s.572-3.074-.092-4.591a5.96 5.96 0 0 0-2.752-2.925A6.104 6.104 0 0 0 18.008 7h-.528a8.978 8.978 0 0 0-3.915-4.753C11.582 1.078 9.15.665 6.744 1.286S2.41 3.447 1.241 5.43-.341 9.845.28 12.251a8.941 8.941 0 0 0 3.099 4.783 1 1 0 1 0 1.242-1.568 6.947 6.947 0 0 1-2.405-3.716c-.483-1.871-.163-3.76.748-5.305s2.408-2.739 4.28-3.223 3.761-.163 5.305.748 2.739 2.408 3.223 4.28c.115.435.505.75.968.75h1.252a4.098 4.098 0 0 1 1.834.448 3.966 3.966 0 0 1 1.832 1.947c.443 1.012.435 2.106.062 3.061s-1.109 1.765-2.121 2.208a1 1 0 0 0 .802 1.832zM8 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgCloudSnow;
