
const SORTING_OPTIONS = ['Popular','Price: low to high','Price: high to low','Top rated first'] satisfies Record <SortOption, string>;

const enum SortOption {
  Popular= 0,
  PriceLowToHight = 1,
  PriceHightToLow = 2,
  TopRatedFirst = 3,
}

export { SortOption, SORTING_OPTIONS };
