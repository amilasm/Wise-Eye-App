import * as React from 'react';
import {Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';

function SvgComponent2(props) {
  const Width = Dimensions.get('screen').width;
  return (
    <Svg
      width={scale(355)}
      height={scale(285)}
      viewBox="0 0 379 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M375.155 0H-.022v292.868c16.833 8.633 38.291 13.893 65.328 11.59C146 297.433 302.82 172.462 375.155 139.617V0z"
        fill="#1DC48C"
      />
    </Svg>
    // <Svg
    //   width={scale(355)}
    //   height={scale(285)}
    //   viewBox={`0 0 379 305`}
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}>
    //   <Path
    //     d="M375.155 0H-.022v253.499c16.833 7.473 38.291 12.025 65.328 10.032C146 257.45 300 203.5 375.155 120.849V0z"
    //     fill="#1DC48C"
    //   />
    // </Svg>
  );
}

export default SvgComponent2;
