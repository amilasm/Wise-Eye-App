import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function ArrowHead(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_364_697)">
        <Path
          d="M10.5 6L9.09 7.41 13.67 12l-4.58 4.59L10.5 18l6-6-6-6z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_364_697">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ArrowHead;
