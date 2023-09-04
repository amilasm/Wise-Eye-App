import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

function DeviceActive(props) {
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
          <Use xlinkHref="#image0_157_2622" transform="scale(.02)" />
        </Pattern>
        <Image
          id="image0_157_2622"
          width={50}
          height={50}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAErklEQVR4nO1ZW4gbVRiebqvUu9DW7Wb+M6Gl3n1QWxDFS/GKWlARQUQFi1i8gA/eEMGhL7LJ/09qbZFW8a2UGvShL1q1mm7+f7YXV6lrfaoVRRSV+lBtu9W1G/knSTdJk8lszMQo88GBycycM/93zn/5zollJUiQIEGCBAm6j9QIGSOZ62zxHnSYHgOh50HwueCasw8Ypmth1LOtfkN655qLgelZI/i+YfzVCJUiNaaDRug9YHwm7dNF/4rxi8eGz6nMthjGqcjGhzQQGjNMTw8VaH7sBBbtfHUQGF8HoYluGN+C0IQRXD/o43ldJzD4AZ7hML4AjIfiItCkHQah4SW71p7dFRKOT9cYoe96SKBUt0JM39pFvKpzBqXSLF0FIzQZ3S3wgBHcDIIvB1mrSCucIt1UaSv0Hgi5lXcORCeDf2pSUJtmxGHp2MZTjNC70bIP7gbGp4Z42JnpXGkf7WuY9kQktMUquHOijZ7Pz9YO4cbTcRDMpyR7udUlpH26Ipg8puNtJm6TVXIH2g5oBN9qtwLdJNAIZyRzJTB+2mYi3wgd5JJ97qkhmWlSK7SumBU38vnZofHJ9JvaGjqGBqZhPFrfGX+xGZe3+/48yZzlcPZmDXZ1T2DcDoyfg9Bnlest+sww3aLvthvPZlwOTD83kDiiNkaaEDWmSgaYflAZ0vLlkjtgi3eHxgwIHptBhjumfRwf7wzz+ZRkLjRM358g4eONkUg0kNkGo96SVu8Yyd5qBPf+83qBe8Gn21raMoKLQOht8PF6q5vQats2s3VS/ATzquOsXkCVqmHc320S02ToG3WnWEmom2nMRDaM8SgI/qjt5ATStOD9BIL7DOMn9q5hiI8I4/Y2hk+B0Efg4yPq13WSIpA8ucUg9KgaWtNn3Ag9HqvhjQDO3qO6p8Vs+g7TUisijOSWGfYeDjJWwZ2j2QiEXBDaaITWaR0JxpupvooKW7x7a8kE1+yt6uiDpdIsYFp5Ir1K0/aF1p24V+awzXh7R2OMeqdpSo0Ya1OGaXUsq6N7hLAao1AZoXGRKtIFanjdSkQlIXWEXrR6CSPZu0DwwwYlO6n+r8+DgI+4EiC4QetL+beOl1sWO4F0Yc25YfsYFZ2614mcwhlfm46liphl3BYriaEx93TNXGGGaYoNpE80EuPpgjtXx9Zgn36Gfy0srl0QGxF7R+b8Vqm5YsDvFaNWRymkhnOXBhNUoPmNKwhFutuKE/oBYPqjuVvRV2Ui+OZ06qaPVQjqQV29ofhEjUttPblm0ZNW3ChL+ibnXozjAVnBDTUGrdR76kJV1QCMW6tpVg1uvmLeKqsXKG8B6Ej9x+mgPjNCL9UQ+doZyQ3p/QWF9WcaxneqJ43g42Wt9FmntasjQNG7QbekNQrgkMp/rT8NBL9M7X5lXm3fdMGdW9FgzVx0QklbvYRqpUDyM+7XU5LgZskdCBRuPZk9tVtfI7QuJBFssvoFGkdNstqOdCG7UIVky4Nx3eqqqu4n6LlupHoiNVXex/utvkP1SLbdgZyU48Ip4kNWPyMl2auDjVYTQhDUJNyswtP6r0DTsMPeffpnj54H66F31/5SSJAggfW/wd+WP/RFyfJe+gAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

export default DeviceActive;
