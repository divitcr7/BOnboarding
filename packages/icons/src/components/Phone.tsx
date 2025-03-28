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
function SvgPhone({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M23 16.92a3.006 3.006 0 0 0-2.598-3.023c-.8-.098-1.695-.314-2.586-.646a3.045 3.045 0 0 0-1.344-.174 2.987 2.987 0 0 0-1.819.855l-.72.72a14.84 14.84 0 0 1-4.583-4.589l.726-.726c.322-.33.563-.726.707-1.156a2.992 2.992 0 0 0-.039-2.011 11.591 11.591 0 0 1-.644-2.595 3.02 3.02 0 0 0-.963-1.804A2.982 2.982 0 0 0 7.11 1H4.114a2.998 2.998 0 0 0-2.989 3.277c.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231a2.994 2.994 0 0 0 2.406-.874c.54-.544.873-1.297.87-2.121zm-2 0v3a.997.997 0 0 1-.996 1.008c-3.149-.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-.024-.268.064-.526.229-.724s.403-.33.678-.355L7.11 3a.995.995 0 0 1 .687.256c.17.154.288.366.323.608.142 1.072.408 2.117.757 3.025.081.216.08.447.01.658a1.049 1.049 0 0 1-.242.395L7.383 9.203a1.001 1.001 0 0 0-.162 1.201c1.584 2.785 3.839 4.957 6.381 6.378.397.222.882.144 1.195-.166l1.27-1.27a.984.984 0 0 1 .598-.279c.152-.015.31.005.459.06 1.022.381 2.07.636 3.034.754a.976.976 0 0 1 .615.355c.147.181.231.412.226.682z" />
    </svg>
  );
}
export default SvgPhone;
