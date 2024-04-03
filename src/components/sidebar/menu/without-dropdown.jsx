import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import useSideBarToggle from "@/state-store/sidebar-toggle";
import { Link } from "react-router-dom";
import useNetworkChain from "@/state-store/network-chain";

export default function SidebarMenuWithoutDropdown({ name, Icon, url }) {
    const { open } = useSideBarToggle(state => state)
    const { chain } = useNetworkChain(state => state)

    return <li className={cn("flex items-center gap-2.5 h-10 pl-6")}>
        <Icon size={18} className="min-w-[18px] cursor-pointer" />
        {
            url.includes("https") ? 
            <a href={url} className={cn("text-base w-full transition-all text-nowrap", !open && "w-0 overflow-hidden")}>{name}</a> :
            <Link 
                to={url + "?chain=" + chain.query_value} 
                className={cn("text-base w-full transition-all capitalize", !open && "w-0 overflow-hidden")}
            >
                {name}
            </Link>
        }
    </li>
}

SidebarMenuWithoutDropdown.propType = {
    name: PropTypes.string,
    Icon: PropTypes.node
}