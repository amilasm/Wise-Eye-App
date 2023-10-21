import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LiveIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.636 4.575a.75.75 0 010 1.061 9 9 0 000 12.728.75.75 0 11-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 011.06 0zm12.728 0a.75.75 0 011.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 11-1.06-1.061 9 9 0 000-12.728.75.75 0 010-1.06zM7.757 6.697a.75.75 0 010 1.06 6 6 0 000 8.486.75.75 0 01-1.06 1.06 7.5 7.5 0 010-10.606.75.75 0 011.06 0zm8.486 0a.75.75 0 011.06 0 7.5 7.5 0 010 10.606.75.75 0 01-1.06-1.06 6 6 0 000-8.486.75.75 0 010-1.06zM9.879 8.818a.75.75 0 010 1.06 3 3 0 000 4.243.75.75 0 11-1.061 1.061 4.5 4.5 0 010-6.364.75.75 0 011.06 0zm4.242 0a.75.75 0 011.061 0 4.5 4.5 0 010 6.364.75.75 0 01-1.06-1.06 3 3 0 000-4.243.75.75 0 010-1.061zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
        fill={props.focused == true ? '#000000' : '#BDBDBD'}
      />
    </Svg>
  );
}

export default LiveIcon;
