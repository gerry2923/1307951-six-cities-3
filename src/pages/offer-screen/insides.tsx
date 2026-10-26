import { TOffer } from '../../components/types';

function Insides({ offer }: { offer: TOffer }) {

  if (!offer?.goods || offer.goods?.length === 0) {
    return null;
  }

  const insides = offer.goods.map((good, index) => ({
    id: index,
    goodItem: good,
  }));

  return (
    <>
      {
        insides.map((good) => (<li className='offer__inside-item' key={good.id}>{good.goodItem}</li>))
      }
    </>
  );
}

export default Insides;
