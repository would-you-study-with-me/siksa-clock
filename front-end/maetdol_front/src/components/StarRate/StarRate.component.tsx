import Icon, { IconFileNames } from 'components/Icon';
import colors from 'styles/palette';
import { repeat } from 'utils';

type Props = {
  rating: number;
};

export default function StarRate({ rating }: Props) {
  if (rating < 0 || rating > 5) {
    throw Error(`Rating must in range 0 ~ 5 but received ${rating}`);
  }
  return (
    <span>
      {repeat(5, index => (
        <Icon
          key={index}
          type={IconFileNames.STAR}
          colors={{ black: index < rating ? colors.primaryLight : colors.gray }}
        />
      ))}
    </span>
  );
}
