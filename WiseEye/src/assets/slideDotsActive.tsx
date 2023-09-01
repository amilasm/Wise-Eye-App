import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SlideDotActive(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M12 6A6 6 0 110 6a6 6 0 0112 0z" fill="#1DC48C" />
    </Svg>
  );
}

export default SlideDotActive;
