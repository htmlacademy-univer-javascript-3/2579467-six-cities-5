import { MainPage } from '../../pages/main-page/main-page';

type AppProps = {
  cardsNumber: number;
}

const App = ({cardsNumber}: AppProps) => (
  <MainPage cardsNumber={cardsNumber}/>
);

export { App };
