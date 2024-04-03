import NavigationBtn from "../utils/navigation-btn"
import useNetworkChain from "@/state-store/network-chain"
import PopupNetworkChainDialogue from "./popup-dialogue"

export default function ChooseNetwork() {
    
    const { 
        chain: { display_name, logo }
    } = useNetworkChain(state => state)

    return <PopupNetworkChainDialogue>
        <NavigationBtn>
            <img src={logo} alt="chain-name" width={24} />
            <span className="max-md:hidden uppercase text-sm">{display_name}</span>
        </NavigationBtn>
    </PopupNetworkChainDialogue>
}