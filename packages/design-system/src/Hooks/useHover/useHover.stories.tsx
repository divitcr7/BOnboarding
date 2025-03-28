import { useHover } from '.';

export default {
  title: 'Hooks/useHover',
};

export function Example() {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return (
    <div
      ref={hoverRef}
      style={{
        padding: 10,
        width: 150,
        height: 150,
        backgroundColor: '#f4f3f3',
      }}
    >
      {isHovered ? 'Boom!' : 'Hover me'}
    </div>
  );
}
