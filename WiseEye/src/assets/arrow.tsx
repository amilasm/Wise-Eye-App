import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Arrow = props => {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15 7.5H3.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 00-1.41 0L.71 7.79a.996.996 0 000 1.41l6.59 6.59a.996.996 0 101.41-1.41L3.83 9.5H15c.55 0 1-.45 1-1s-.45-1-1-1z"
        fill="#160B07"
      />
    </Svg>
  );
};

export default Arrow;
