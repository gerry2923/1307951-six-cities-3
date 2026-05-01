
import { useEffect } from 'react';
import { SortOption, SORTING_OPTIONS } from './const';
import { useBoolean } from '../../hooks/use-boolean';

interface SortProps {
  current: SortOption;
  setter: (option: SortOption) => void;
}


const SortingOptions = ({current, setter} : SortProps): JSX.Element => {
  const { isOn, off, toggle } = useBoolean(false);

  useEffect(() => {
    if (isOn) {
      const onEscKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          off();
        }
      };

      document.addEventListener('keydown', onEscKeyDown);

      return () => {
        document.removeEventListener('keydown', onEscKeyDown);
      };
    }
  }, [isOn, off]);

  const selectedOption = SORTING_OPTIONS[current];


  return (
    <form className='places__sorting' action='#' method='get' onClick={toggle}>
      <span className='places__sorting-caption' style={{ marginRight: 10 }}>Sort by</span>

      <span className='places__sorting-type' tabIndex={0}>
        {selectedOption}
        <svg className='places__sorting-arrow' width={7} height={4}>
          <use xlinkHref='#icon-arrow-select' />
        </svg>
      </span>


      <ul className={`places__options places__options--custom ${isOn ? 'places__options--opened' : ''}`}>

        {SORTING_OPTIONS.map((option, index) => (
          <li
            className={`places__option ${selectedOption === option ? 'places__option--active' : ''}`}
            key={option}
            onClick={() => setter(index)}
            tabIndex={0}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>);
};

export { SortingOptions };
