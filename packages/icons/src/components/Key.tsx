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
function SvgKey({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="m20.293 1.293-2 2a.999.999 0 1 0 1.414 1.414l2-2a.999.999 0 1 0-1.414-1.414zm-8.201 9.605a6.492 6.492 0 0 0-4.553-1.873 6.482 6.482 0 0 0-4.578 1.873c-1.277 1.26-1.923 2.921-1.935 4.583S1.64 18.813 2.9 20.09c1.34 1.323 3.009 1.946 4.671 1.935s3.323-.657 4.583-1.935 1.884-2.947 1.873-4.609-.657-3.323-1.935-4.583zm-1.404 1.424c.885.873 1.332 2.02 1.339 3.173s-.424 2.306-1.297 3.191-2.02 1.332-3.173 1.339-2.306-.424-3.191-1.297c-.916-.927-1.347-2.08-1.339-3.233s.455-2.3 1.339-3.173a4.48 4.48 0 0 1 3.169-1.296 4.486 4.486 0 0 1 3.152 1.296zm1.409-.005 4.11-4.11a.999.999 0 1 0-1.414-1.414l-4.11 4.11a.999.999 0 1 0 1.414 1.414zm2.696-4.11 3 3a.999.999 0 0 0 1.414 0l3.5-3.5a.999.999 0 0 0 0-1.414l-3-3a.999.999 0 1 0-1.414 1.414L20.586 7 18.5 9.086l-2.293-2.293a.999.999 0 1 0-1.414 1.414zm1.414 0 3.5-3.5a.999.999 0 1 0-1.414-1.414l-3.5 3.5a.999.999 0 1 0 1.414 1.414z" />
    </svg>
  );
}
export default SvgKey;
