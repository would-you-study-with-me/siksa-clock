import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const MainIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.87501 36.208C8.65301 36.208 7.61134 35.7777 6.75001 34.917C5.88867 34.0557 5.45801 33.014 5.45801 31.792V16.583C5.45801 15.889 5.61101 15.2363 5.91701 14.625C6.22234 14.0137 6.66667 13.486 7.25001 13.042L17.333 5.45801C17.7497 5.20801 18.1803 4.99967 18.625 4.83301C19.0697 4.66634 19.528 4.58301 20 4.58301C20.472 4.58301 20.9303 4.66634 21.375 4.83301C21.8197 4.99967 22.2503 5.20801 22.667 5.45801L32.75 13.042C33.3613 13.486 33.8197 14.0137 34.125 14.625C34.4303 15.2363 34.583 15.889 34.583 16.583V31.792C34.583 33.014 34.1457 34.0557 33.271 34.917C32.3957 35.7777 31.347 36.208 30.125 36.208H23.625V23.042H16.375V36.208H9.87501Z" />
    </SvgIcon>
  );
};

export default MainIcon;