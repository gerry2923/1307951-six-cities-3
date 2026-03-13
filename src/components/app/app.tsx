import MainPage from '../../pages/main-page/main-page.tsx';
import { NumberOfOffers } from '../const.ts';


function App(): JSX.Element {
  return (<MainPage offers={NumberOfOffers.offers}/>);
}

export default App;
