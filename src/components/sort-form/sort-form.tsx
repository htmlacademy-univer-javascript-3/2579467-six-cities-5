import { SortName } from '../../const';
import { Sort } from '../../types/types';
import { useState } from 'react';

type SortProps = {
  currentSort: Sort;
  onClick: (variant: Sort) => void;
}

export const SortForm = ({currentSort, onClick} : SortProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOptionClick = (variant: Sort) => {
    onClick(variant);
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpened(!isOpened)}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}>
        {
          Object.values(SortName).map((sortItem) =>
            <li key={sortItem} className={`places__option ${(currentSort === sortItem) && 'places__option--active'} `} tabIndex={0} onClick={() => handleOptionClick(sortItem)}>{sortItem}</li>
          )
        }
      </ul>
    </form>
  );
};
