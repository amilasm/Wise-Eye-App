import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {scale} from 'react-native-size-matters';

function SvgComponent3(props) {
  return (
    <Svg
      width={scale(451)}
      height={scale(308.95)}
      viewBox="0 0 375 348"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M374.941 29.617V0c-9.609 0-24.939.006-33.131 0H0v182.473c75.036 50.753 228.938 157.94 309.671 164.972 27.037 2.344 48.496-2.96 65.329-11.601l-.059-306.226z"
        fill="#1DC48C"
      />
    </Svg>
  );
}

export default SvgComponent3;
