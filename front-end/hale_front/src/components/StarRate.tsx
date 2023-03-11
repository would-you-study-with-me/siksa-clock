import StarIcon from './icons/StarIcon';

interface RateProps extends React.PropsWithChildren {
  rate: number;
}

const StarRate = ({ rate }: RateProps) => {
  const rateArr = new Array(rate).fill(true);
  const restArr = new Array(5 - rate).fill(false);
  const finalArr = rateArr.concat(restArr);
  return (
    <div>
      {finalArr.map(val => (
        <StarIcon color={val ? 'primary' : 'disabled'} />
      ))}
    </div>
  );
};

export default StarRate;
