import { CITIES } from '../../const';
import { CityItem } from '../city/city';
import { City } from '../../types/types';

type citiesListProps = {
  onClick: (city: City) => void;
}

export const CitiesList = ({onClick} : citiesListProps): JSX.Element => (
  <ul className="locations__list tabs__list">
    {
      CITIES.map((city) =>
        (
          <CityItem
            key={city.name}
            cityName={city.name}
            onClick={() => onClick(city)}
          />
        ))
    }
  </ul>
);
