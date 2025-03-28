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
function SvgShare2({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M16.214 18.098a1.11 1.11 0 0 0 .124-.211A1.99 1.99 0 0 1 18 17c.553 0 1.051.223 1.414.586S20 18.447 20 19s-.223 1.051-.586 1.414S18.553 21 18 21s-1.051-.223-1.414-.586S16 19.553 16 19c0-.325.077-.631.214-.902zm.087-12.042-.028-.051-.031-.05A1.991 1.991 0 0 1 16 5c0-.553.223-1.051.586-1.414S17.447 3 18 3s1.051.223 1.414.586S20 4.447 20 5s-.223 1.051-.586 1.414S18.553 7 18 7a1.99 1.99 0 0 1-1.699-.944zm-8.602 4.888.028.051.031.05c.154.283.242.608.242.955a1.987 1.987 0 0 1-.586 1.414C7.051 13.777 6.553 14 6 14s-1.051-.223-1.414-.586S4 12.553 4 12s.223-1.051.586-1.414S5.447 10 6 10a1.99 1.99 0 0 1 1.699.944zm6.451-4.856L8.842 9.185l-.014-.014C8.106 8.449 7.104 8 6 8s-2.106.449-2.828 1.172a3.994 3.994 0 0 0 0 5.656 3.994 3.994 0 0 0 5.656 0l.014-.014 5.309 3.094a3.988 3.988 0 0 0 1.021 3.92 3.994 3.994 0 0 0 5.656 0 3.994 3.994 0 0 0 0-5.656 3.994 3.994 0 0 0-5.656 0l-.01.01-5.312-3.095a3.987 3.987 0 0 0 0-2.175l5.308-3.098.014.014C15.894 8.551 16.896 9 18 9s2.106-.449 2.828-1.172a3.994 3.994 0 0 0 0-5.656 3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0-1.022 3.916z" />
    </svg>
  );
}
export default SvgShare2;
