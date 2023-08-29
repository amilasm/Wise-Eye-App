import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {scale} from 'react-native-size-matters';

function SvgComponent(props) {
  return (
    <Svg
      width={scale(415)}
      height={scale(168)}
      viewBox="0 0 375 151"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M375 0H0v121.149c19.841-21.087 72.202-78.024 184.246-70.744C286.409 57.03 328.234 103.607 375 150.283V0z"
        fill="#1DC48C"
      />
    </Svg>
  );
}

export default SvgComponent;
