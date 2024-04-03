import Logo from "@/utils/logo";
import { HamburgerMenuClose, HamburgerMenuOpen } from "./hamburger";
import NavigationBtn from "./utils/navigation-btn";
import DefaultButton from "@/utils/button";
import ChooseNetwork from "./choose-network";
import useSideBarToggle from "@/state-store/sidebar-toggle";



export default function Navigation() {
    const { open } = useSideBarToggle(state => state)
    return <nav className="flex items-center select-none h-[72px] gap-2">

        {/* Hamburger Icon */}
        <div className="text-2xl pt-2 cursor-pointer">
            {
                open ? <HamburgerMenuClose /> : <HamburgerMenuOpen />
            }
        </div>
        
        {/* Logo */}
        <a href="" className="text-[#333] flex items-center gap-2.5">
            <div className="max-w-9">
                <Logo />
            </div>
            <h5 className="pt-1 max-md:hidden font-semibold text-base">PinkSale</h5>
        </a>

        <div className="flex-1"/>

        {/* Button 1 */}
        <a href="https://www.dexview.com/">
            <NavigationBtn>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="max-md:hidden" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z" />
                </svg>
                <span>dexview.com</span>
            </NavigationBtn>
        </a>

        {/* Button 2 */}
        <ChooseNetwork />

        {/* Button 3 */}
        <DefaultButton>Connect</DefaultButton>
    </nav>
}