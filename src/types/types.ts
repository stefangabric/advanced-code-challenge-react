export type StatisticItem = {
    date: string;
    description: string;
    identifier: number;
    image_url: string;
    link: string;
    premium: number;
    subject: string;
    teaser_image_urls: { width: number; src: string }[];
    title: string;
};