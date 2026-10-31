import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { withHistory } from '../../utils/mock-component';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const expectedTextAltText = '6 cities logo';
    const preparedComponent = withHistory(<Logo />);
    render(preparedComponent);
    // expect(screen.getByAltText(expectedTextAltText)).toBeInTheDocument();
    expect(screen.getByAltText(expectedTextAltText)).toBeInTheDocument();
  });
});
