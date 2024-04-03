import { useSearchParams } from "react-router-dom"
import PropType, { func } from "prop-types"
import network_chains_options from "@/data/network-chains"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/utils/ui/dialog"
import useNetworkChain from "@/state-store/network-chain"
import { setChainKeywordToLocalStorage } from "@/lib/handle-network-chain"

const network_keys = Object.keys(network_chains_options)

export default function PopupNetworkChainDialogue({ children }) {

    const { setChain } = useNetworkChain(state => state)
    const [,setSearchParams] = useSearchParams()

    function handleClick(network_chain, keyword) {
        const { query_value } = network_chain
        return () => {
            setChain(network_chain)
            setSearchParams({ chain: query_value })
            setChainKeywordToLocalStorage(keyword)
        }
    }


    return <Dialog>
        <DialogTrigger>
            {children}
        </DialogTrigger>
        <DialogContent className="h-[403px] overflow-auto">
            <DialogHeader>Choose network</DialogHeader>
            <div className="grid gap-y-2">
                {
                    network_keys.map((key, index) => {

                        const { logo, option_name } = network_chains_options[key]
                        
                        return <DialogClose key={index} asChild onClick={handleClick(network_chains_options[key], key)}>
                            <div className="cursor-pointer bg-[--red-button-bg-color] px-2.5 py-2 border border-solid border-transparent transition-all duration-200 flex items-center hover:border-[--primary-color] rounded-sm">
                                <img src={logo} alt={option_name} className="w-6" />
                                <h5 className="text-base ml-2">{option_name}</h5>
                            </div>
                        </DialogClose>
                    })
                }
            </div>
        </DialogContent>
    </Dialog>
}

PopupNetworkChainDialogue.propType = {
    children: PropType.string
}