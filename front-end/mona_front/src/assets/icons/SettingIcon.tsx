import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const SettingIcon = (props: SvgIconProps) => {
  const { width = 40, height = 40, color = 'inherit' } = props;
  return (
    <SvgIcon width={width} height={height} viewBox="0 0 40 40" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M23.208 37.875H16.792C16.236 37.875 15.7426 37.7083 15.312 37.375C14.882 37.0417 14.639 36.5833 14.583 36L14 32.25C13.722 32.1387 13.4093 31.986 13.062 31.792C12.7153 31.5973 12.4306 31.4027 12.208 31.208L8.74995 32.792C8.24995 33.042 7.72229 33.0697 7.16695 32.875C6.61095 32.6803 6.19429 32.3193 5.91695 31.792L2.70795 26.125C2.37462 25.625 2.27762 25.104 2.41695 24.562C2.55562 24.0207 2.84729 23.5833 3.29195 23.25L6.41695 20.917C6.38895 20.8057 6.37495 20.6527 6.37495 20.458C6.37495 20.264 6.37495 20.1113 6.37495 20C6.37495 19.8613 6.37495 19.7087 6.37495 19.542C6.37495 19.3753 6.38895 19.2087 6.41695 19.042L3.29195 16.75C2.84729 16.3887 2.55562 15.9373 2.41695 15.396C2.27762 14.854 2.36095 14.333 2.66695 13.833L5.91695 8.16701C6.22229 7.69434 6.64595 7.36801 7.18795 7.18801C7.72929 7.00734 8.23595 7.02801 8.70795 7.25001L12.25 8.79201C12.472 8.65267 12.7566 8.47901 13.104 8.27101C13.4513 8.06234 13.764 7.91634 14.042 7.83301L14.583 3.95801C14.639 3.40267 14.889 2.95134 15.333 2.60401C15.7776 2.25667 16.264 2.08301 16.792 2.08301H23.208C23.736 2.08301 24.2223 2.25667 24.667 2.60401C25.111 2.95134 25.3746 3.40267 25.458 3.95801L25.958 7.79201C26.2913 7.90267 26.6246 8.05534 26.958 8.25001C27.2913 8.44467 27.583 8.62534 27.833 8.79201L31.25 7.20801C31.75 6.98601 32.2776 6.97234 32.833 7.16701C33.389 7.36101 33.8056 7.69434 34.083 8.16701L37.375 13.792C37.6803 14.3193 37.7636 14.854 37.625 15.396C37.4863 15.9373 37.1946 16.3887 36.75 16.75L33.542 18.958C33.5693 19.1247 33.597 19.3053 33.625 19.5C33.653 19.6947 33.667 19.8613 33.667 20C33.667 20.1387 33.646 20.2983 33.604 20.479C33.5626 20.6597 33.542 20.8193 33.542 20.958L36.75 23.25C37.1666 23.6113 37.4373 24.0557 37.562 24.583C37.6873 25.111 37.611 25.639 37.333 26.167L34.042 31.833C33.736 32.361 33.3193 32.7153 32.792 32.896C32.264 33.0767 31.75 33.042 31.25 32.792L27.792 31.208C27.542 31.3747 27.2433 31.5693 26.896 31.792C26.5486 32.014 26.25 32.1527 26 32.208L25.458 36C25.3746 36.5833 25.111 37.0417 24.667 37.375C24.2223 37.7083 23.736 37.875 23.208 37.875ZM19.958 25.625C21.514 25.625 22.8406 25.0763 23.938 23.979C25.0346 22.8817 25.583 21.5553 25.583 20C25.583 18.4447 25.0346 17.1183 23.938 16.021C22.8406 14.9237 21.514 14.375 19.958 14.375C18.3746 14.375 17.0413 14.9237 15.958 16.021C14.8746 17.1183 14.333 18.4447 14.333 20C14.333 21.5553 14.8746 22.8817 15.958 23.979C17.0413 25.0763 18.3746 25.625 19.958 25.625Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default SettingIcon;