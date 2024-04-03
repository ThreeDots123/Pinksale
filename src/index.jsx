import { Outlet, useSearchParams } from "react-router-dom";
import Header from "./components/header";
import handleNetworkChain from "./lib/handle-network-chain";
import useNetworkChain from "./state-store/network-chain";
import { useEffect } from "react";
import SideBar from "./components/sidebar";
import Trending from "./components/home/trending";


export default function Root() {
    const [searchParams] = useSearchParams()
    const network_chain = handleNetworkChain(searchParams.get("chain"))

    const { setChain } = useNetworkChain(state => state)

    useEffect(() => {
        setChain(network_chain)
    }, [network_chain])

    return <>
       <Header />
       <div className="flex pt-[72px] relative">
            <SideBar />
            <div className="flex-1 bg-gray-50 h-[calc(100vh-72px)]">
                <Trending />
                <main className="py-6 w-full overflow-auto h-[calc(100%-44px)]">
                    <div className="max-w-[1200px] mx-auto container">
                        <div className="mb-20">
                            <Outlet />
                        </div>
                        <footer className="text-base text-[--text-color]">
                            <div className="mb-16 mx-auto text-center md:w-3/4">
                                <p>
                                    Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via
                                    <a href="https://academy.binance.com/en/glossary/do-your-own-research" rel="noreferrer noopener nofollow" target="_blank" className="cursor-pointer text-[--primary-color] hover:text-[--text-color] ml-1">Binance Academy</a>.
                                </p>
                            </div>
                        </footer>
                    </div>
                </main>
            </div>
       </div>
    </>
}