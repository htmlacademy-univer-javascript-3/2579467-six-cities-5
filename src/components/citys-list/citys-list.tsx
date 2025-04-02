import { CITYS } from '../../const';
import { CityItem } from '../city/city';
import { City } from '../../types/types';

type citysListProps = {
  onClick: (city: City) => void;
}

export const CitysList = ({onClick} : citysListProps): JSX.Element => (
  <ul className="locations__list tabs__list">
    {
      CITYS.map((city) =>
        (
          <CityItem
            key={city.title}
            cityName={city.title}
            onClick={() => onClick(city)}
          />
        ))
    }
  </ul>
);
