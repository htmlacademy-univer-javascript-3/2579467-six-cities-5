import { Card } from '../card/card';
import { Offers } from '../../types/types';
import { useState } from 'react';

type OffersListProps = {
  offers: Offers[];
  variant?: string;
};

export const OffersList = ({ offers, variant = 'default' }: OffersListProps): JSX.Element => {
  const [, setActiveCard] = useState<string | null>(null);

  return (
    <div className={variant === 'favorites' ? 'favorites__places' : 'cities__places-list places__list tabs__content'}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          variant={variant}
          onMouseEnter={() => setActiveCard(offer.id)}
          onMouseLeave={() => setActiveCard(null)}
        />
      ))}
    </div>
  );
};
