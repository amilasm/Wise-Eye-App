import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function WifiIcon(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_356_17363)">
        <Path
          d="M1.5 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2c-6.07-6.07-15.92-6.07-22 0zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2c-3.86-3.86-10.13-3.86-14 0z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_356_17363">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default WifiIcon;
