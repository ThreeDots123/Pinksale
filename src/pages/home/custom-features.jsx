import Logo from "@/utils/logo"
import { Card, CardContent } from "@/utils/ui/card"

const features = [
    { title: "Standard", desc: "Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon" },
    { title: "Deflationary", desc: "Generate deflationary tokens with tax and/or charity functions." },
    { title: "Customization", desc: "Create a token sale for your own custom token easily." },
    { title: "Launchpad", desc: "Use the token you mint to create a launchpad with just a few clicks" },
    { title: "Branding", desc: "Adding logo, social links, description, listing on PinkSale." },
    { title: "Management", desc: "The portal to help you easily update content for your launchpad." },
    { title: "Community", desc: "Promote your launchpad to thousands of buyers on PinkSale." },
    { title: "Locking", desc: "Lock your liquidity to PinkSwap, PancakeSwap after presale." },
]

const FeatureCard = ({ title, desc }) => <Card
    className="border-0 w-full"
    style={{boxShadow: "0 0 1px rgba(0,0,0,.01), 0 4px 8px rgba(0,0,0,.01), 0 8px 12px rgba(0,0,0,.01), 0 12px 16px rgba(0,0,0,.01)"}
}>
    <CardContent className="py-10 px-3">
        <div className="w-20 mx-auto">
            <Logo />
        </div>
        <div className="text-center mt-6">
            <p className="text-3xl text-[--text-color] font-semibold mb-[5px]">{title}</p>
            <p className="text-gray-400 w-[70%] mx-auto">{desc}</p>
        </div>
    </CardContent>
</Card>


export default function HomeCustomFeatures() {
    return <div className="pt-12 text-center">
        <div className="space-y-6">
            <h1 className="font-semibold text-4xl break-words tracking-wide text-[--text-color]">
                A Suite of Tools for Token Sales
            </h1>
            <p className=" max-w-[65%] text-lg mx-auto">
                A suite of tools were built to help you create your own tokens and launchpads in a fast, simple and cheap way, with no prior code knowledge required and 100% decentralized!
            </p>
        </div>
        <div className="w-[94%] grid grid-cols-[repeat(auto-fill,235px)] mx-auto gap-7 py-12 justify-center">
            {
                features.map(
                    (feature, index) => <FeatureCard key={index} title={feature.title} desc={feature.desc} />
                )
            }
        </div>
    </div>
}