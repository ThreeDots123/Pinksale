import useSideBarToggle from "@/state-store/sidebar-toggle"
import SidebarMenuWithoutDropdown from "./menu/without-dropdown"
import menus from "@/data/sidebar-menus/index"
import React from "react"
import SidebarMenuWithDropdown from "./menu/with-dropdown"
import { ScrollArea } from "@/utils/ui/scroll-area"

export default function SideBar() {
    const { open } = useSideBarToggle(state => state)

    return <aside data-open={open} className="h-[calc(100vh-72px)] w-[200px] transition-all data-[open=false]:md:w-16 data-[open=false]:w-0 group:">
        <ScrollArea className="h-[calc(100%-76px)]">
            <ul className="space-y-1.5 pt-[3px]">
                {
                    menus.map((menu, index) => {
                        const hasSubmenu = menu.submenu
                        return <React.Fragment key={index}>
                            { hasSubmenu ? 
                                <SidebarMenuWithDropdown name={menu.name} Icon={menu.Icon} submenus={menu.items} height={menu.height_class} /> : 
                                <SidebarMenuWithoutDropdown name={menu.name} Icon={menu.Icon} url={menu.url} />
                            }
                        </React.Fragment>
                    })
                }
            </ul>
        </ScrollArea>
        <div className="pt-4 px-4 pb-2 space-y-1">
            <p>Section 1</p>
            <p>Section 2</p>
        </div>
    </aside>
}