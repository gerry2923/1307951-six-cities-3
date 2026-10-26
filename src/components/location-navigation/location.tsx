export type TCityLocation = {
  activeCity: string;
  cityName: string;
  onLocationClick: (cityName: string) => void;
};

function Location({
  activeCity,
  cityName,
  onLocationClick
}: TCityLocation): JSX.Element {

  const handleClick = (evt: React.PointerEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    const city = evt.currentTarget.dataset.city;
    if (city) {
      onLocationClick(city);
    }
  };

  return (
    <li className='locations__item'>
      <a
        className={`locations__item-link tabs__item ${
          activeCity === cityName ? 'tabs__item--active' : ''
        }`}
        href='#'
        data-city={cityName}
        onPointerDown={handleClick}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default Location;
