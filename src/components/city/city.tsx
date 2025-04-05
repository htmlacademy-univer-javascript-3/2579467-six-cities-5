import { Link } from 'react-router-dom';
import {useAppSelector } from '../../hooks/hooks';

type cityProps = {
  cityName: string;
  onClick: () => void;
}

export const CityItem = ({cityName, onClick} : cityProps) => {
  const currentCity = useAppSelector((state) => state.city);
  const isCitySelected = currentCity.name === cityName;

  return (
    <li className="locations__item" onClick={onClick}>
      <Link className={`locations__item-link tabs__item ${isCitySelected && 'tabs__item--active'}`} to="#">
        <span>{cityName}</span>
      </Link>
    </li>
  );
};
