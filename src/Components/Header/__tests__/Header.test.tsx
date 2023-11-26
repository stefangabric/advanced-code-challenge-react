import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

test('Header component renders links correctly', () => {
    render(<Header />);
    const searchLink = screen.getByRole('link', { name: /search/i });
    expect(searchLink).toBeInTheDocument();

    const favoritesLink = screen.getByRole('link', { name: /favorites/i });
    expect(favoritesLink).toBeInTheDocument();
});
