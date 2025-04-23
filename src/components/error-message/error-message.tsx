import { useAppSelector } from '../../hooks/hooks';
import './error-message.css';

export const ErrorMessage = (): JSX.Element | null => {
  const error = useAppSelector((state) => state.error.error);

  return error
    ? <div className='error-message'>{error}</div>
    : null;

};
