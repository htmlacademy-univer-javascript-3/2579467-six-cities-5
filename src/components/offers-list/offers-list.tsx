import { Card } from '../card/card';
import { Offer } from '../../types/types';
import { OFFERS_LIST_CLASS } from '../../const';

type OffersListProps = {
  offers: Offer[];
  variant?: string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
};

export const OffersList = ({ offers, variant = 'default', onMouseEnter, onMouseLeave}: OffersListProps): JSX.Element => {
  const listClass = OFFERS_LIST_CLASS[variant as keyof typeof OFFERS_LIST_CLASS];

  return (
    <div className={listClass}>
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
};
