import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackIcon(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.5 11H8.33l5.59-5.59L12.5 4l-8 8 8 8 1.41-1.41L8.33 13H20.5v-2z"
        fill="#040A1A"
      />
    </Svg>
  );
}

export default BackIcon;
