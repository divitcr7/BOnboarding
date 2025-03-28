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
function SvgThumbsUp({
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
      <path d="M13 9a1 1 0 0 0 1 1h5.679a.99.99 0 0 1 .808.407c.153.208.225.47.184.742l-1.38 8.998a1.015 1.015 0 0 1-.325.6.995.995 0 0 1-.686.253H8v-9.788l3.608-8.118A2 2 0 0 1 13 5zm2-1V5c0-1.104-.449-2.106-1.172-2.828S12.104 1 11 1c-.405 0-.754.241-.914.594l-4 9A.982.982 0 0 0 6 11v11a1 1 0 0 0 1 1h11.28a2.982 2.982 0 0 0 2.021-.763 3.013 3.013 0 0 0 .967-1.783l1.38-9.002c.125-.82-.096-1.614-.55-2.231A2.992 2.992 0 0 0 19.641 8zM7 21H4c-.276 0-.525-.111-.707-.293S3 20.276 3 20v-7c0-.276.111-.525.293-.707S3.724 12 4 12h3a1 1 0 0 0 0-2H4a2.997 2.997 0 0 0-3 3v7a2.997 2.997 0 0 0 3 3h3a1 1 0 0 0 0-2z" />
    </svg>
  );
}
export default SvgThumbsUp;
