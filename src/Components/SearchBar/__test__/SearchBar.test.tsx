import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar component', () => {
    it('calls setQuery when Enter key is pressed', () => {
        const setQueryMock = jest.fn();
        render(<SearchBar setQuery={setQueryMock} />);

        const searchInput = screen.getByPlaceholderText(/Find statistics, forecasts and reports/i);

        fireEvent.change(searchInput, { target: { value: 'test query' } });
        fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

        expect(setQueryMock).toHaveBeenCalledWith('test query');
    });

    it('calls setQuery when Search button is clicked', () => {
        const setQueryMock = jest.fn();
        render(<SearchBar setQuery={setQueryMock} />);
        const searchInput = screen.getByPlaceholderText(/Find statistics, forecasts and reports/i);
        const searchButton = screen.getByText(/Search/i);

        fireEvent.change(searchInput, { target: { value: 'test query' } });
        fireEvent.click(searchButton);

        expect(setQueryMock).toHaveBeenCalledWith('test query');
    });

});
