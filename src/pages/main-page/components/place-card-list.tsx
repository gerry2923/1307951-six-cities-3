import { OffersListType, OfferType } from '../../../components/const';
import PlaceCard from './place-card';


const PlaceCardsList = (offersList: OffersListType): JSX.Element => (<div className="cities__places-list places__list tabs__content">  {offersList.offersList2.map((cardInfo: OfferType) => <PlaceCard key={cardInfo.id} {...cardInfo} />) }</div>);


export default PlaceCardsList;
