import eth_logo from "@/assets/images/network-chains/etherum.svg"
import bnb_logo from "@/assets/images/network-chains/BNB.png"
import matic_logo from "@/assets/images/network-chains/matic.png"
import avax_logo from "@/assets/images/network-chains/avax.svg"
import fanthom_logo from "@/assets/images/network-chains/fanthom.svg"
import cronos_logo from "@/assets/images/network-chains/cronos.svg"
import arbitrum_logo from "@/assets/images/network-chains/arbitrum.svg"
import pulse_chain_logo from "@/assets/images/network-chains/pulse-chain.png"
import bitrock_logo from "@/assets/images/network-chains/bitrock.png"
import core_logo from "@/assets/images/network-chains/core.png"
import cybria_logo from "@/assets/images/network-chains/cybria.jpg"

export const ETHEREUM = "Ethereum"
export const BNB_SMART_CHAIN = "BNB Smart Chain"
export const MATIC = "Matic(Polygon)"
export const AVALANCHE = "Avalanche"
export const FANTHOM_OPERA = "Fanthom Opera"
export const CRONOS = "Cronos"
export const ARBITRUM = "Arbitrum"
export const PULSECHAIN = "Pulse Chain"
export const BITROCK = "Bitrock"
export const CORE = "Core"
export const CYBRIA = "Cybria"


export const display = "mainnet"


const network_chains_options = {
    [ETHEREUM]: {
        display_name: "eth " + display,
        option_name: ETHEREUM,
        logo: eth_logo,
        query_value: "ETH",
    },
    [BNB_SMART_CHAIN]: {
        display_name: "bsc " + display,
        option_name: BNB_SMART_CHAIN,
        logo: bnb_logo,
        query_value: "BSC",
    },
    [MATIC]: {
        display_name: "matic " + display,
        option_name: MATIC,
        logo: matic_logo,
        query_value: "Matic",
    },
    [AVALANCHE]: {
        display_name: "avax",
        option_name: AVALANCHE,
        logo: avax_logo,
        query_value: "AVAX",
    },
    [FANTHOM_OPERA]: {
        display_name: "fantom",
        option_name: FANTHOM_OPERA,
        logo: fanthom_logo,
        query_value: "FTM",
    },
    [CRONOS]: {
        display_name: "cronos",
        option_name: CRONOS,
        logo: cronos_logo,
        query_value: "Cronos",
    },
    [ARBITRUM]: {
        display_name: "arbitrum",
        option_name: ARBITRUM,
        logo: arbitrum_logo,
        query_value: "Arbitrum",
    },
    [PULSECHAIN]: {
        display_name: "PulseChain",
        option_name: PULSECHAIN,
        logo: pulse_chain_logo,
        query_value: "PulseChain",
    },
    [BITROCK]: {
        display_name: "bitrock",
        option_name: BITROCK,
        logo: bitrock_logo,
        query_value: "bitrock",
    },
    [CORE]: {
        display_name: "core",
        option_name: CORE,
        logo: core_logo,
        query_value: "Core",
    },
    [CYBRIA]: {
        display_name: "cybria",
        option_name: CYBRIA,
        logo: cybria_logo,
        query_value: "Cybria",
    },
}

export default network_chains_options