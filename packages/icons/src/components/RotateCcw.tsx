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
function SvgRotateCcw({
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
      <path d="M2.567 15.332c.918 2.604 2.805 4.591 5.112 5.696s5.038 1.33 7.643.413 4.591-2.805 5.696-5.112 1.33-5.038.413-7.643-2.805-4.591-5.112-5.696-5.038-1.33-7.643-.413a9.882 9.882 0 0 0-3.749 2.362L2 7.689V4a1 1 0 0 0-2 0v5.998l.001.044a1.003 1.003 0 0 0 .242.611l.036.039a.993.993 0 0 0 .71.307H7A1 1 0 0 0 7 9H3.524l2.829-2.659A7.865 7.865 0 0 1 9.34 4.464c2.084-.734 4.266-.555 6.114.33s3.356 2.473 4.09 4.557.555 4.266-.33 6.114-2.473 3.356-4.557 4.09-4.266.555-6.114-.33-3.356-2.473-4.09-4.557a1 1 0 0 0-1.886.664z" />
    </svg>
  );
}
export default SvgRotateCcw;
