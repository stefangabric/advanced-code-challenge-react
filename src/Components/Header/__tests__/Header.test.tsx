import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from '../Header';

test('Header component renders links correctly', () => {
    render(<Header />);
    const searchLink = screen.getByRole('link', { name: /search/i });
    expect(searchLink).toBeInTheDocument();

    const favoritesLink = screen.getByRole('link', { name: /favorites/i });
    expect(favoritesLink).toBeInTheDocument();
});

test('Header links navigate to the correct paths', () => {
    render(<Header />);

    const searchLink = screen.getByRole('link', { name: /search/i });
    userEvent.click(searchLink);
    expect(window.location.pathname).toBe('/');
    const favoritesLink = screen.getByRole('link', { name: /favorites/i });
    userEvent.click(favoritesLink);
    expect(window.location.pathname).toBe('/favorites');
});