import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const FavoriteIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17 34L14.458 31.625C11.208 28.6803 8.34 25.7567 5.854 22.854C3.368 19.9513 2.125 16.7777 2.125 13.333C2.125 10.4443 3.08333 8.02067 5 6.062C6.91667 4.104 9.30567 3.125 12.167 3.125C13.5837 3.125 14.9587 3.41667 16.292 4C17.6253 4.58333 18.8473 5.486 19.958 6.708C21.1527 5.486 22.389 4.58333 23.667 4C24.9443 3.41667 26.3053 3.125 27.75 3.125C30.6387 3.125 33.0553 4.104 35 6.062C36.9447 8.02067 37.917 10.4443 37.917 13.333C37.917 16.7777 36.646 19.9583 34.104 22.875C31.5627 25.7917 28.6947 28.7223 25.5 31.667L23 34C22.0833 34.778 21.0763 35.167 19.979 35.167C18.8817 35.167 17.8887 34.778 17 34Z" />
    </SvgIcon>
  );
};

export default FavoriteIcon;