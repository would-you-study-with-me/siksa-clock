import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const PushPinIcon = (props: SvgIconProps) => {
  const { fontSize = 'inherit', color = 'inherit' } = props;
  return (
    <SvgIcon fontSize={fontSize} viewBox="0 0 40 40" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M27.75 19.625L31.292 22.875V27.333H22.208V37.292L20 39.5L17.792 37.292V27.333H8.75V22.875L12.083 19.625V7.37501H10.125V2.95801H29.708V7.37501H27.75V19.625Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default PushPinIcon;
