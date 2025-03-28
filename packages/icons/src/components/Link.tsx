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
function SvgLink({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M9.199 13.599c.992 1.327 2.43 2.126 3.948 2.345a5.986 5.986 0 0 0 5.105-1.702l2.995-2.995a5.997 5.997 0 0 0-.135-8.496 5.976 5.976 0 0 0-4.199-1.683 5.994 5.994 0 0 0-4.137 1.683l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a4 4 0 0 1 6.779 2.807 3.975 3.975 0 0 1-1.11 2.836l-3.005 3.005a3.986 3.986 0 0 1-3.395 1.126 3.979 3.979 0 0 1-2.632-1.563A1 1 0 0 0 9.199 13.6zm5.602-3.198c-.992-1.327-2.43-2.126-3.948-2.345a5.988 5.988 0 0 0-5.106 1.702l-2.995 2.995a5.997 5.997 0 0 0 .135 8.496 5.976 5.976 0 0 0 4.199 1.683 5.994 5.994 0 0 0 4.137-1.683l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a4 4 0 0 1-6.779-2.807 3.975 3.975 0 0 1 1.11-2.836l3.005-3.005a3.986 3.986 0 0 1 3.395-1.126 3.979 3.979 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z" />
    </svg>
  );
}
export default SvgLink;
