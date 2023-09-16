import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function AlertIcon(props) {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.057 1.872A.9.9 0 002.67.726a10.764 10.764 0 00-2.228 4.59.9.9 0 101.76.38 8.964 8.964 0 011.855-3.824zM19.33.726a.9.9 0 00-1.388 1.146 8.965 8.965 0 011.856 3.823.9.9 0 101.76-.379A10.764 10.764 0 0019.33.726z"
        fill={props.focused == true ? '#0BE9A6' : 'black'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 .4a7.2 7.2 0 00-7.2 7.2c0 2.264-.545 4.398-1.509 6.281a.9.9 0 00.618 1.292c1.281.266 2.585.47 3.908.609a4.2 4.2 0 008.366 0 39.522 39.522 0 003.908-.61.9.9 0 00.618-1.29A13.737 13.737 0 0118.2 7.6 7.2 7.2 0 0011 .4zm0 17.4a2.4 2.4 0 01-2.34-1.868 40.179 40.179 0 004.68 0A2.4 2.4 0 0111 17.8z"
        fill={props.focused == true ? '#0BE9A6' : 'black'}
      />
    </Svg>
  );
}

export default AlertIcon;
