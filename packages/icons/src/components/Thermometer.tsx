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
function SvgThermometer({
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
      <path d="M13 14.76c.002.329.161.646.453.837.349.228.686.554.958.96.537.804.698 1.747.523 2.627s-.684 1.69-1.488 2.227-1.747.698-2.627.523-1.69-.684-2.227-1.488-.698-1.747-.523-2.627.684-1.69 1.488-2.227c.268-.182.443-.487.443-.832V3.5A1.497 1.497 0 0 1 11.5 2 1.497 1.497 0 0 1 13 3.5zm2-.504V3.5c0-.966-.393-1.843-1.025-2.475S12.466 0 11.5 0 9.657.393 9.025 1.025 8 2.534 8 3.5v10.759a5.483 5.483 0 0 0-1.894 3.17c-.274 1.379-.022 2.866.821 4.129s2.121 2.064 3.5 2.339 2.866.022 4.129-.821 2.064-2.121 2.339-3.5.022-2.866-.821-4.129a5.533 5.533 0 0 0-1.073-1.19z" />
    </svg>
  );
}
export default SvgThermometer;
