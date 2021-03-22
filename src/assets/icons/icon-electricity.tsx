import { IconProps } from './icon.types';
import './icon.css';

export const IconElectricity: React.FC<IconProps> = ({ size = 40, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M15.7714 40.0001L18.2298 21.5631H9.17274L24.393 0L21.9111 14.8977H30.8325L15.7714 40.0001ZM11.7458 20.23H19.752L17.9451 33.7865L28.4784 16.2308H20.3365L22.1197 5.53275L11.7458 20.23Z"
        fill="#FFC927"
      />
      <path
        d="M11.7458 20.23H19.752L17.9451 33.7865L28.4784 16.2308H20.3365L22.1197 5.53275L11.7458 20.23Z"
        fill="#FFC927"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
