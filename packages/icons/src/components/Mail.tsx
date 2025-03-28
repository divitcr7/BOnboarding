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
function SvgMail({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="m3 7.921 8.427 5.899c.34.235.795.246 1.147 0L21 7.921V18c0 .272-.11.521-.295.705S20.272 19 20 19H4c-.272 0-.521-.11-.705-.295S3 18.272 3 18zM1 5.983V18c0 .828.34 1.579.88 2.12S3.172 21 4 21h16c.828 0 1.579-.34 2.12-.88S23 18.828 23 18V5.982a2.995 2.995 0 0 0-.88-2.102A2.998 2.998 0 0 0 20 3H4c-.828 0-1.579.34-2.12.88A2.995 2.995 0 0 0 1 5.983zm19.894-.429L12 11.779 3.106 5.554a.999.999 0 0 1 .188-.259A.994.994 0 0 1 4 5h16a1.016 1.016 0 0 1 .893.554z" />
    </svg>
  );
}
export default SvgMail;
