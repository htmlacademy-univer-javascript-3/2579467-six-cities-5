import { Card } from '../card/card';
import { Offer } from '../../types/types';

type OffersListProps = {
  offers: Offer[];
  variant?: string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
};

export const OffersList = ({ offers, variant = 'default', onMouseEnter, onMouseLeave}: OffersListProps): JSX.Element => (
  <div className={variant === 'favorites' ? 'favorites__places' : 'cities__places-list places__list tabs__content'}>
    {offers.map((offer) => (
      <Card
        key={offer.id}
        offer={offer}
        variant={variant}
        onMouseEnter={() => onMouseEnter?.(offer.id)}
        onMouseLeave={() => onMouseLeave?.()}
      />
    ))}
  </div>
);
