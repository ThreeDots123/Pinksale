import { TrendingUpIcon } from "lucide-react";
import trending_data from "./data";

export default function Trending() {
    return <div className="bg[--main-background-color] flex items-center bg-white max-lg:hidden">
        <div className="flex gap-1 p-2.5">
            <TrendingUpIcon size={15} color="#f95192" />
            <h1 className="font-medium">Trending</h1>
        </div>
        <ul className="flex items-center ml-5 w-full overflow-auto max-w-[1000px]">
            {
                trending_data.map((data, index) => <li key={index} className="py-2.5 px-2 font-medium text-xs">
                    <span>#{index + 1}</span>{" "}
                    <a href="#" className="text-[#f95192] transition-all">{data}</a> 
                </li>)
            }
        </ul>
    </div>
}