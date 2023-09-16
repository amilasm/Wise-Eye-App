import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DotIcon = props => {
  return (
    <Svg
      width={4}
      height={17}
      viewBox="0 0 4 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 4.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="#000"
      />
    </Svg>
  );
};

export default DotIcon;
