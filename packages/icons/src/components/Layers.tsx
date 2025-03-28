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
function SvgLayers({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M12 3.118 19.764 7 12 10.882 4.236 7zm-.447-2.012-10 5a1 1 0 0 0 0 1.788l10 5c.292.146.62.136.894 0l10-5a1 1 0 0 0 0-1.789l-10-5a.997.997 0 0 0-.894 0zm-10 16.788 10 5c.292.146.62.136.894 0l10-5a1 1 0 0 0-.895-1.789L12 20.882l-9.553-4.776a1 1 0 0 0-.895 1.789zm0-5 10 5c.292.146.62.136.894 0l10-5a1 1 0 0 0-.895-1.789L12 15.882l-9.553-4.776a1 1 0 0 0-.895 1.789z" />
    </svg>
  );
}
export default SvgLayers;
