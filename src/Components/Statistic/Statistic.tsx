import React from 'react';
import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
type StatisticType={
    slug:string
}

const API_URL = 'https://cdn.statcdn.com/static/application/search_results.json';

const mockedStatistic={
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
const Statistic = ({slug}:StatisticType) => {
    const fetchData = async () => {
        const response = await fetch(`${API_URL}/${slug}`);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return response.json();
    };

    const { data} = useQuery({ queryKey: [], queryFn: () =>fetchData() });
    //used mockedStatistic because real API is not available

    const item=data || mockedStatistic;
    //if(!item) return null ->should be uncommented when we start using real API and remove mock
    return (
        <Link href={item?.link} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.image_url} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.subject}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            </div>
        </Link>
    );
};

export default (Statistic);