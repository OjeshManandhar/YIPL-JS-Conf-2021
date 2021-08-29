// components
import Spinner from 'components/Spinner';

// styles
import * as G from 'global/styles';

function SplashScreen() {
  return (
    <G.FullScreenCenter>
      <Spinner />
    </G.FullScreenCenter>
  );
}

export default SplashScreen;
