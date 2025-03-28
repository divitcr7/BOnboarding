import { RefObject, useEffect, useRef, useState } from 'react';

// Standard hook implementation https://usehooks.com/useHover/
export function useHover<T extends HTMLElement>(): [RefObject<T>, boolean] {
  const [value, setValue] = useState<boolean>(false);
  const ref = useRef<T>(null);
  const handleMouseOver = (): void => setValue(true);
  const handleMouseOut = (): void => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}
