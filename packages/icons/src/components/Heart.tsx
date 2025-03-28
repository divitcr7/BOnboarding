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
function SvgHeart({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M20.133 5.317c.88.881 1.319 2.031 1.319 3.184s-.44 2.303-1.319 3.182L12 19.816l-8.133-8.133c-.879-.879-1.318-2.029-1.318-3.183s.439-2.304 1.318-3.183S5.896 3.999 7.05 3.999s2.304.439 3.183 1.318l1.06 1.06a.999.999 0 0 0 1.414 0l1.062-1.062c.879-.879 2.029-1.318 3.182-1.317s2.303.44 3.182 1.319zm1.414-1.414c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327.634-4.597 1.903L12 4.256l-.353-.353C10.378 2.634 8.712 1.999 7.05 1.999s-3.328.635-4.597 1.904S.549 6.838.549 8.5s.635 3.328 1.904 4.597l8.84 8.84a.999.999 0 0 0 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-.634-3.327-1.905-4.598z" />
    </svg>
  );
}
export default SvgHeart;
