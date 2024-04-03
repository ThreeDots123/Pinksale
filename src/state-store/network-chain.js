import { create } from "zustand";

export const chain_keyword = "chain"

const useNetworkChain = create(set => ({
    chain: {},
    setChain(chain) { set({ chain }) }
}))


export default useNetworkChain