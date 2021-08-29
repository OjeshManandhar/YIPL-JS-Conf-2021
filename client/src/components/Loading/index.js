// components
import Spinner from 'components/Spinner';

// styles
import * as G from 'global/styles';

function Loading() {
  return (
    <G.Center>
      <Spinner />
    </G.Center>
  );
}

export default Loading;
