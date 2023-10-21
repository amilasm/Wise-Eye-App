import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TempIcon(props) {
  return (
    <Svg
      width={11}
      height={20}
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.75 11V3c0-1.66-1.34-3-3-3s-3 1.34-3 3v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V3z"
        fill="#000"
      />
    </Svg>
  );
}

export default TempIcon;
