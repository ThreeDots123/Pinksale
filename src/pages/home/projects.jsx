
import Logo from "@/utils/logo"
import { Card, CardContent } from "@/utils/ui/card"

const projetcs = [
    { title: "PinkMoon", desc: "The best launchpad for professional teams" },
    { title: "PinkSale", desc: "Launch a token sale with a few clicks." },
    { title: "PinkSwap", desc: "Swap tokens and farming $PinkS." },
    { title: "PinkLock", desc: "Locking liquidity on PinkSwap." },
    { title: "PinkElon", desc: "The first meme token on PinkMoon." },
    { title: "PinkWallet", desc: "Crypto wallet, buy, store, exchange & earn." },
]

const ProjectCard = ({ title, desc }) => <Card
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


export default function HomeProjects() {
    return <div className="pt-12 text-center">
        <div className="space-y-6">
            <h1 className="font-semibold text-4xl break-words tracking-wide text-[--text-color]">
                A Growing Protocol Ecosystem.
            </h1>
            <p className=" max-w-[65%] text-lg mx-auto">
                We build a suite of tools for the world of decentralized finance. PinkMoon, PinkSale, PinkElon PinkLock, PinkSwap, we Pink everything!
            </p>
        </div>
        <div className="w-[94%] grid grid-cols-[repeat(auto-fill,235px)] mx-auto gap-7 py-12 justify-center">
            {
                projetcs.map(
                    (project, index) => <ProjectCard key={index} title={project.title} desc={project.desc} />
                )
            }
        </div>
    </div>
}