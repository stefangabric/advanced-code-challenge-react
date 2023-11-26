import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchItem from '../SearchItem';

const mockStatistic = {
    "identifier":1200213,
    "title":"India: major investing countries 2019",
    "link":"https://de.statista.com/statistics/1200213/india-major-investing-countries/",
    "subject":"Leading countries for foreign direct investment into India from financial year 2013 to 2019 (in million U.S. dollars)",
    "description":"In financial year 2019, the highest amount of foreign direct investments (FDI) to India came from Singapore amounting around 16.3 billion U.S. dollars. Following Singapore, Mauritius and the Netherlands are the second and third largest foreign investors in India. These three countries are known to have Double Taxation Avoidance Agreements (DTAA) that allow them to be popular transit countries for foreign investments.",
    "date":"2021-01-29",
    "premium":1,
    "image_url":"https://de.statista.com/graphic/5/1200213/india-major-investing-countries.jpg",
    "teaser_image_urls":[
        {
            "width":754,
            "src":"https://de.statista.com/graphic/teaser/754/5/1200213/india-major-investing-countries.jpg"
        },
        {
            "width":355,
            "src":"https://de.statista.com/graphic/teaser/355/5/1200213/india-major-investing-countries.jpg"
        },
        {
            "width":100,
            "src":"https://cdn.statcdn.com/Statistic/1200000/1200213-blank-100.png"
        }
    ]}

jest.mock('../../FavoriteBadge/FavoriteBadge', () => ({
    __esModule: true,
    default: () => (
        <div data-testid="favorite-badge-mock">FavoriteBadge</div>
    ),
}));
describe('SearchItem component', () => {
    it('renders SearchItem correctly', () => {
        render(<SearchItem statistic={mockStatistic} key={1} />);
        expect(screen.getByText('India: major investing countries 2019')).toBeInTheDocument();
        expect(screen.getByText('Leading countries for foreign direct investment into India from financial year 2013 to 2019 (in million U.S. dollars)')).toBeInTheDocument();
    });

    it('navigates to details page when clicked', () => {
        render(<SearchItem statistic={mockStatistic} key={1} />);

        userEvent.click(screen.getByText('Details'));
        // console.log(window.location.href)

    });

});
