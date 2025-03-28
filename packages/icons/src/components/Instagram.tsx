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
function SvgInstagram({
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
      <path d="M7 1c-1.657 0-3.158.673-4.243 1.757S1 5.343 1 7v10c0 1.657.673 3.158 1.757 4.243S5.343 23 7 23h10c1.657 0 3.158-.673 4.243-1.757S23 18.657 23 17V7c0-1.657-.673-3.158-1.757-4.243S18.657 1 17 1zm0 2h10c1.105 0 2.103.447 2.828 1.172S21 5.895 21 7v10c0 1.105-.447 2.103-1.172 2.828S18.105 21 17 21H7c-1.105 0-2.103-.447-2.828-1.172S3 18.105 3 17V7c0-1.105.447-2.103 1.172-2.828S5.895 3 7 3zm9.989 8.223a5.054 5.054 0 0 0-1.194-2.567 4.962 4.962 0 0 0-3.009-1.644 4.904 4.904 0 0 0-1.477-.002c-1.366.202-2.521.941-3.282 1.967s-1.133 2.347-.93 3.712.941 2.521 1.967 3.282 2.347 1.133 3.712.93 2.521-.941 3.282-1.967 1.133-2.347.93-3.712zm-1.978.294c.122.82-.1 1.609-.558 2.227s-1.15 1.059-1.969 1.18-1.609-.1-2.227-.558-1.059-1.15-1.18-1.969.1-1.609.558-2.227 1.15-1.059 1.969-1.18a2.976 2.976 0 0 1 2.688.984c.375.428.63.963.72 1.543zM17.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgInstagram;
