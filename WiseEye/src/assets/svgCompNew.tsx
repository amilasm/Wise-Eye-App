import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponentNew(props) {
  return (
    <Svg
      width={375}
      height={264}
      viewBox="0 0 375 264"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M375.155 0H-.022v253.499c16.833 7.473 38.291 12.025 65.328 10.032C146 257.45 300 203.5 375.155 120.849V0z"
        fill="#1DC48C"
      />
    </Svg>
  );
}

export default SvgComponentNew;
