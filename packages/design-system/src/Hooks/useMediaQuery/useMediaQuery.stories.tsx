import { useMediaQuery } from '.';

export default {
  title: 'Hooks/useMediaQuery',
};

export function Example() {
  const smMatched = useMediaQuery({ breakPoint: 'sm' });
  const mdMatched = useMediaQuery({ breakPoint: 'md' });
  const lgMatched = useMediaQuery({ breakPoint: 'lg' });
  return (
    <div
      style={{
        padding: 20,
        textAlign: 'center',
        backgroundColor: '#f4f3f3',
      }}
    >
      <p>{lgMatched && 'size **Lg** and lower is matched'}</p>
      <p>{mdMatched && 'size **Md** and lower is matched'}</p>
      <p>{smMatched && 'size **Sm** and lower is matched'}</p>
    </div>
  );
}
