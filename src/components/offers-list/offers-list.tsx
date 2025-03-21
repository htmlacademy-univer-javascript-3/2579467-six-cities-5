import { Card } from '../card/card';
import { Offers } from '../../types/types';

type OffersListProps = {
  offers: Offers[];
};

export const OffersList = ({ offers }: OffersListProps): JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <Card key={offer.id} offer={offer} />
    ))}
  </div>
);
