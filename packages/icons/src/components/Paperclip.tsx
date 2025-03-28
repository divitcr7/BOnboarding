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
function SvgPaperclip({
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
      <path d="m20.733 10.343-9.19 9.19c-.977.977-2.256 1.465-3.538 1.465s-2.561-.488-3.538-1.465-1.465-2.256-1.465-3.538.488-2.561 1.465-3.538l9.19-9.19c.586-.586 1.353-.879 2.123-.879s1.536.293 2.123.879.879 1.353.879 2.123-.293 1.536-.879 2.123l-9.2 9.19a1 1 0 1 1-1.416-1.415l8.49-8.48a1 1 0 1 0-1.413-1.415l-8.49 8.48c-.586.586-.879 1.356-.879 2.122s.293 1.536.879 2.122 1.356.879 2.122.879 1.536-.293 2.122-.879l9.2-9.19c.977-.977 1.465-2.258 1.465-3.537s-.489-2.561-1.465-3.537S17.06.388 15.781.388s-2.561.489-3.537 1.465l-9.19 9.19c-1.367 1.367-2.051 3.161-2.051 4.952s.684 3.585 2.051 4.952 3.161 2.051 4.952 2.051 3.585-.684 4.952-2.051l9.19-9.19a.999.999 0 1 0-1.414-1.414z" />
    </svg>
  );
}
export default SvgPaperclip;
