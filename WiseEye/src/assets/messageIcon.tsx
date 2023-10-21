import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MessageIcon(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.8 0H1.2C.54 0 .006.54.006 1.2L0 12l2.4-2.4h8.4c.66 0 1.2-.54 1.2-1.2V1.2c0-.66-.54-1.2-1.2-1.2zM9.6 7.2H2.4V6h7.2v1.2zm0-1.8H2.4V4.2h7.2v1.2zm0-1.8H2.4V2.4h7.2v1.2z"
        fill="#000"
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export default MessageIcon;
