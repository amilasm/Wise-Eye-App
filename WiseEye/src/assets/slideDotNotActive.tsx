import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SlideDotNotActive(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={0.2}
        d="M12 6a6 6 0 11-6-6 6.023 6.023 0 016 6z"
        fill="#1DC48C"
      />
    </Svg>
  );
}

export default SlideDotNotActive;
