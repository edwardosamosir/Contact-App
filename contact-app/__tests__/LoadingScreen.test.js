import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadingScreen from '../src/components/LoadingScreen';

describe('LoadingScreen Component', () => {
  it('renders the loading screen component', () => {
    const { container } = render(<LoadingScreen />);
    expect(container).toBeInTheDocument();
  });

  it('renders the loading icon', () => {
    const { getByRole } = render(<LoadingScreen />);
    const iconElement = getByRole('status');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders the loading text', () => {
    const { getByText } = render(<LoadingScreen />);
    const textElement = getByText('Loading...');
    expect(textElement).toBeInTheDocument();
  });

  it('has the correct CSS classes', () => {
    const { container } = render(<LoadingScreen />);
    const loadingScreenElement = container.firstChild;
    expect(loadingScreenElement).toHaveClass('flex justify-center h-screen');
  });

  it('has the correct SVG attributes', () => {
    const { getByRole } = render(<LoadingScreen />);
    const svgElement = getByRole('status').querySelector('svg');
    expect(svgElement).toHaveAttribute('aria-hidden', 'true');
    expect(svgElement).toHaveAttribute('class', 'w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 100 101');
    expect(svgElement).toHaveAttribute('fill', 'none');
    expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
  });

  it('has the correct SVG paths', () => {
    const { getByRole } = render(<LoadingScreen />);
    const svgElement = getByRole('status').querySelector('svg');
    const pathElements = svgElement.querySelectorAll('path');

    expect(pathElements).toHaveLength(2);

    const [path1, path2] = pathElements;

    expect(path1).toHaveAttribute('d', 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z');
    expect(path1).toHaveAttribute('fill', 'currentColor');

    expect(path2).toHaveAttribute('d', 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z');
    expect(path2).toHaveAttribute('fill', 'currentFill');
  });
});
