import { Link } from "react-router-dom"
import { createLaunchpadRoute } from "@/routes/launchpad"
import useNetworkChain from "@/state-store/network-chain"
import DefaultButton from "@/utils/button"

export default function HomeHero() {
    const { chain: { query_value }} = useNetworkChain(state => state)
    return <section>
        <div className="mt-8 pt-8 text-center space-y-6">
            <h1 className="font-semibold text-5xl break-words tracking-wide text-[--text-color]">The Launchpad Protocol For Everyone!</h1>
            <div>
                <p className="text-xl">PinkSale helps everyone to create their own tokens and token sales in few seconds.</p>
                <p className="text-xl">Tokens created on PinkSale will be verified and published on explorer websites.</p>
            </div>
        </div>
        <div className="flex justify-center mt-6 gap-5 max-sm:block max-sm:space-y-2">
            <Link className="block" to={createLaunchpadRoute + "?chain=" + query_value}>
                <DefaultButton className="px-7 py-6">Create now</DefaultButton>
            </Link>
            <a href="#" className="block">
                <DefaultButton className="px-7 py-6">Learn more</DefaultButton>
            </a>
        </div>
    </section>
}