import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const MoodBadIcon = (props: SvgIconProps) => {
  const { fontSize = 'inherit' } = props;
  return (
    <SvgIcon fontSize={fontSize} viewBox="0 0 40 40" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M26.0833 17.7916C26.7222 17.7916 27.2569 17.5764 27.6875 17.1458C28.118 16.7153 28.3333 16.1805 28.3333 15.5416C28.3333 14.9028 28.118 14.368 27.6875 13.9375C27.2569 13.5069 26.7222 13.2916 26.0833 13.2916C25.4444 13.2916 24.9097 13.5069 24.4791 13.9375C24.0486 14.368 23.8333 14.9028 23.8333 15.5416C23.8333 16.1805 24.0486 16.7153 24.4791 17.1458C24.9097 17.5764 25.4444 17.7916 26.0833 17.7916ZM13.9166 17.7916C14.5555 17.7916 15.0903 17.5764 15.5208 17.1458C15.9514 16.7153 16.1666 16.1805 16.1666 15.5416C16.1666 14.9028 15.9514 14.368 15.5208 13.9375C15.0903 13.5069 14.5555 13.2916 13.9166 13.2916C13.2778 13.2916 12.743 13.5069 12.3125 13.9375C11.8819 14.368 11.6666 14.9028 11.6666 15.5416C11.6666 16.1805 11.8819 16.7153 12.3125 17.1458C12.743 17.5764 13.2778 17.7916 13.9166 17.7916ZM20 36.6666C17.7222 36.6666 15.5694 36.2291 13.5416 35.3541C11.5139 34.4791 9.74304 33.2847 8.22915 31.7708C6.71526 30.2569 5.52081 28.4861 4.64581 26.4583C3.77081 24.4305 3.33331 22.2639 3.33331 19.9583C3.33331 17.6805 3.77081 15.5278 4.64581 13.5C5.52081 11.4722 6.71526 9.70831 8.22915 8.20831C9.74304 6.70831 11.5139 5.52081 13.5416 4.64581C15.5694 3.77081 17.7361 3.33331 20.0416 3.33331C22.3194 3.33331 24.4722 3.77081 26.5 4.64581C28.5278 5.52081 30.2916 6.70831 31.7916 8.20831C33.2916 9.70831 34.4791 11.4722 35.3541 13.5C36.2291 15.5278 36.6666 17.6944 36.6666 20C36.6666 22.2778 36.2291 24.4305 35.3541 26.4583C34.4791 28.4861 33.2916 30.2569 31.7916 31.7708C30.2916 33.2847 28.5278 34.4791 26.5 35.3541C24.4722 36.2291 22.3055 36.6666 20 36.6666ZM20 34.1666C23.9444 34.1666 27.2916 32.7847 30.0416 30.0208C32.7916 27.2569 34.1666 23.9166 34.1666 20C34.1666 16.0555 32.7916 12.7083 30.0416 9.95831C27.2916 7.20831 23.9444 5.83331 20 5.83331C16.0833 5.83331 12.743 7.20831 9.97915 9.95831C7.21526 12.7083 5.83331 16.0555 5.83331 20C5.83331 23.9166 7.21526 27.2569 9.97915 30.0208C12.743 32.7847 16.0833 34.1666 20 34.1666ZM13 28.125H27C27.3889 28.125 27.6736 28 27.8541 27.75C28.0347 27.5 28.0139 27.2083 27.7916 26.875C26.9861 25.5416 25.8819 24.5 24.4791 23.75C23.0764 23 21.5833 22.625 20 22.625C18.4166 22.625 16.9305 23 15.5416 23.75C14.1528 24.5 13.0555 25.5416 12.25 26.875C12.0278 27.2083 12 27.5 12.1666 27.75C12.3333 28 12.6111 28.125 13 28.125Z"
        fill="#C80C0D"
      />
    </SvgIcon>
  );
};

export default MoodBadIcon;
