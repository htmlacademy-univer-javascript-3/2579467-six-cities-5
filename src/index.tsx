import ReactDOM from 'react-dom/client';
import { App } from '../components/app/app';
import { CardsNumber } from '../const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App cardsNumber={CardsNumber}/>
);
