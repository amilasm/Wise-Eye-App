import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

function DeviceDeactivated(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#pattern0)" d="M0 0H20V20H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#image0_157_2624" transform="scale(.02)" />
        </Pattern>
        <Image
          id="image0_157_2624"
          width={50}
          height={50}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAELUlEQVR4nO1YW4hbZRD+bbVe0AcpiCtlk8ycdWtkdzPzb6EqGlFU6oOgshR8UNEH768+CIoXtIJiRXyp4o3aWqR4qagvCuKLD4ooeMGKrhbWbmay69Z6xbaROUm2J92czUmySSycDw5Lsvx//m/ON/PN/M6lSJEiRYoUKVIkRiWfX2OPOx5QKRZPlMmAyoR3C+EOZfxMGUQZKw0P4awwfioM25WDO0uF7ERlyq0e6OH3bVx3qhBuFoY9ynBwyaETPkLwmzC8VaLc9XuD4OS+EZil3LgyvigEBzo9fCwpxnll3FamkfN6RmD/RCZrPyKEh1aaQBNCh5Xg9dnJEVhRCSnDM0Lwbxtysbf1pTJ8pAzvK+N7QvihMn4hhHPJScHfwvh418XCklEYvm4RvSNC8IkyPiIF2LR/HM5qte/C2PCZynCZMDyghB+Hb2A5QgSfq8+s74iEFIJbLSLxm+MvwnifSc51ifJYsE4J7lWGH5f5vT/Uww1tbawe7rBIx0RH7f/TxcwpboVRmXKrywzXKsP3cblTYrg5GQmC22NJML5wYMP6ta4/pX1Ls8KSmIwS/NAsecUHU67PkAJsEsZfmwT0u5aL5wgvMJOKROAnncyOdnKQinOrLLErzp3gOoROZkeF8OdoUMscbEy0WGjkEmX43SqWJWKSNTN+6LRQ34RbrQ1RxlKDRC1ZGafNxZXwYSkERSOaZO95ymaqeQMHSx4ucu1AafScJPV7bgLP79TphWFGCJ4QPzyUKFBjyYLaFswvlOC5FXF6wr/sTZby+dNdP1Ezs5ketCfTbUunU5Q93NTSiatRnrV2XhjeVsJ3zP2FYF8Cuf3TtvG1ixLjVctJSRi+KhHeY8kZu8eGzNnKeJcwfBO7D+Eh8XB1z4hY2VPCP5u2K5S7JWkVWnTxAt5onhAOW4RvCOMHVpnC8u/x0p4RCcn44MooGWF4RS8cPaPbfSven2R/LeHNe1w/UPa5K4RwQTzc37VUGfbUS7fYmyB8t6eyOhbdzNrmT0r40rJJT7ijF41pV35jRhY1VyV4PqFhbh/o4YVzFyvDLmtzoi1KeFlRCIqRqG9RwqePaVCfNLevf7ac7DsBk0L1qicmwuO5c5XxtaPfwS6rdELwWI3sgyZZZdwdIfZm34m00n11zmg0Rat6RkYJLjcStXuxyDqQQRC5JnTmGCJ2kdcgt7p8CK6z9UK4uZk5djMGdDUMNTVNO5QfHloylxM+FMqJ4LYGmUXM1g0K5srR4Wwx8tV55aj8CLfWcmJnVGZC8Gxk3U43SFg7U7s5XGwiLdnFI9ebTiF8ORy0GgnvFsJXq8TwiE2sbtCw69Vacu8tF4J8/fsl8ol94Cn3f4FdTFuSR7+rValH48YBYTxsXjLwm/o2L8S3WUtvMhTCb8Op0yMP+mwpUqRIkcIlwX/7zfHD9e8mCQAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

export default DeviceDeactivated;
