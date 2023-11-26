import Statistic from "@/Components/Statistic/Statistic";
import {useFavorite} from "@/Context/FavoriteContext";
import SearchItem from "@/Components/SearchItem/SearchItem";
import {GetServerSidePropsContext} from "next";
type PagesType={
    slug:string
}
const Pages = ({slug}:PagesType) => {
    if(slug==="favorites") {
        const { favoriteList } = useFavorite();
        return (<ul className="flex flex-wrap">
            {favoriteList.map((favorite,index)=><SearchItem statistic={favorite} index={index}/>)}
        </ul>)
    }

    return <Statistic slug={slug}/>
};
export function getServerSideProps(context: GetServerSidePropsContext) {
    const slug = context?.params?.slug?.[0];
    return {
        props: {
            slug
        }
    };
}

export default Pages;
