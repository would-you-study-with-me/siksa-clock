import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const StarIcon = (props: SvgIconProps) => {
  const { width = 40, height = 40, color = 'inherit' } = props;
  return (
    <SvgIcon width={width} height={height} viewBox="0 0 40 40" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M13.875 34.458C12.9864 35.1247 12.1044 35.1457 11.229 34.521C10.3544 33.8957 10.0837 33.0553 10.417 32L12.792 24.375L6.75003 20.042C5.86137 19.4307 5.5767 18.611 5.89603 17.583C6.21537 16.5557 6.9307 16.042 8.04203 16.042H15.417L17.875 7.958C18.0137 7.458 18.2984 7.06933 18.729 6.792C19.1597 6.514 19.5834 6.375 20 6.375C20.4167 6.375 20.8404 6.514 21.271 6.792C21.7017 7.06933 22.0004 7.458 22.167 7.958L24.583 16.042H32C33.0834 16.042 33.7847 16.5557 34.104 17.583C34.4234 18.611 34.1387 19.4307 33.25 20.042L27.208 24.375L29.583 31.958C29.9164 33.0413 29.6457 33.8887 28.771 34.5C27.8957 35.1113 27.0277 35.0837 26.167 34.417L20.042 29.792L13.875 34.458Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default StarIcon;