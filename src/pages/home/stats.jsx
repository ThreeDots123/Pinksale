import { Card, CardContent } from "@/utils/ui/card";

const StatsCard = ({ title, desc }) => <Card 
    className="border-0"
    style={{boxShadow: "0 0 1px rgba(0,0,0,.01), 0 4px 8px rgba(0,0,0,.01), 0 8px 12px rgba(0,0,0,.01), 0 12px 16px rgba(0,0,0,.01)"}
}>
    <CardContent className="py-10">
        <div className="text-center">
            <p className="text-4xl text-[--text-color] font-semibold mb-[5px]">{title}</p>
            <p>{desc}</p>
        </div>
    </CardContent>
</Card>


const stats = [
    { title: "$1.2B", desc: "Total liquidity raised" },
    { title: "22784", desc: "Total projects" },
    { title: "2.7M", desc: "Total participants" },
    { title: "$594.9M", desc: "Total values locked" },
]

export default function HomeStats() {
    return <section className="grid grid-cols-[repeat(auto-fill,228px)] justify-center max-w-[87%px] gap-7 mx-auto py-12">
        {
            stats.map(
                (stat, index) => <StatsCard key={index} title={stat.title} desc={stat.desc} />
            )
        }
    </section>
}