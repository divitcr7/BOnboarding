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
function SvgCloudOff({
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
      <path d="M23.531 17.34c.646-1.525.612-3.17.036-4.592s-1.696-2.627-3.221-3.273A5.934 5.934 0 0 0 17.989 9h-.506a8.938 8.938 0 0 0-3.211-4.309 9.135 9.135 0 0 0-4.487-1.687 1 1 0 1 0-.189 1.991 7.136 7.136 0 0 1 3.505 1.317 6.942 6.942 0 0 1 2.671 3.934.999.999 0 0 0 .968.754h1.271c.49-.005 1.03.094 1.555.317 1.017.431 1.763 1.232 2.148 2.182s.407 2.044-.024 3.061a1 1 0 0 0 1.842.78zM4.854 6.268 17.586 19H8.99a7.153 7.153 0 0 1-2.774-.527 6.942 6.942 0 0 1-3.471-3.085 6.978 6.978 0 0 1-.601-5.324 6.977 6.977 0 0 1 2.709-3.797zM.293 1.707l3.129 3.13a8.984 8.984 0 0 0-3.2 4.675 8.972 8.972 0 0 0 .773 6.845 8.94 8.94 0 0 0 4.466 3.969A9.19 9.19 0 0 0 9.01 21H18c.489-.001.967-.06 1.417-.169l2.876 2.876a.999.999 0 1 0 1.414-1.414l-22-22A.999.999 0 1 0 .293 1.707z" />
    </svg>
  );
}
export default SvgCloudOff;
