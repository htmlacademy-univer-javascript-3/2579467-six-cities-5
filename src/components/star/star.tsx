type StarProps = {
  title: string;
  value: number;
  name: string;
  checked: boolean;
  onChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Star = ({title, value, name, checked, onChange}: StarProps): JSX.Element => (
  <>
    <input className="form__rating-input visually-hidden" name={name} value={value} id={`${value}-stars`} type="radio" onChange={onChange} checked={checked}/>
    <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);
