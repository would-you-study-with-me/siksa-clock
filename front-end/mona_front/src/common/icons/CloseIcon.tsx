import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const CloseIcon = (props: SvgIconProps) => {
  const { width = 40, height = 40, color = 'inherit' } = props;
  return (
    <SvgIcon width={width} height={height} viewBox="0 0 40 40" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M20 23.083L12.042 31.083C11.5973 31.5277 11.0763 31.75 10.479 31.75C9.88167 31.75 9.361 31.5277 8.917 31.083C8.47233 30.639 8.25 30.1183 8.25 29.521C8.25 28.9237 8.47233 28.4167 8.917 28L16.917 20L8.917 12C8.50033 11.5833 8.292 11.0693 8.292 10.458C8.292 9.84733 8.50033 9.33367 8.917 8.917C9.33367 8.50033 9.84733 8.292 10.458 8.292C11.0693 8.292 11.5973 8.50033 12.042 8.917L20 16.917L28 8.875C28.4167 8.45833 28.9237 8.25 29.521 8.25C30.1183 8.25 30.639 8.45833 31.083 8.875C31.5277 9.31967 31.75 9.84733 31.75 10.458C31.75 11.0693 31.5277 11.5833 31.083 12L23.083 19.958L31.083 27.958C31.5277 28.4027 31.75 28.9307 31.75 29.542C31.75 30.1527 31.5277 30.6663 31.083 31.083C30.6663 31.5277 30.1527 31.75 29.542 31.75C28.9307 31.75 28.4167 31.5277 28 31.083L20 23.083Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default CloseIcon;
