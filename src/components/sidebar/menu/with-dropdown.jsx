import { cn } from "@/lib/utils";
import useNetworkChain from "@/state-store/network-chain";
import useSideBarToggle from "@/state-store/sidebar-toggle";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SidebarMenuWithDropdown({ name, Icon, submenus, height }) {
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const { open } = useSideBarToggle(state => state)
    const {chain} = useNetworkChain(state => state)

    return <>
        <li className={cn("flex items-center gap-2.5 h-10 pl-6 select-none")}>
            <Icon size={18} className="min-w-[18px] cursor-pointer" />
            <span 
                className={cn(
                    "text-base delay-150 w-full transition-all flex cursor-pointer items-center justify-between mr-3.5 capitalize", 
                    !open && "w-0 overflow-hidden"
                )} 
                onClick={() => setSubmenuOpen(state => !state)}
            >
                {name}
                <ChevronDownIcon width={15} className="font-bold mb-1" />
            </span>
        </li>
        <ul className={cn(
            "space-y-4 pl-11 py-3 bg-[--background-color] transition-all overflow-hidden",
            height,
            (!submenuOpen || !open) && "h-0 py-0"
        )}>
            {submenus.map(
                ({ title, url }, index) => <li key={index} className="line-clamp-1">
                    <Link to={url + "?chain=" + chain.query_value} className="capitalize">
                        {title}
                    </Link>
                </li>)
            }
        </ul>
    </>
}