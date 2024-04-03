import HomeCustomFeatures from "./custom-features";
import HomeHero from "./hero";
import HomeProjects from "./projects";
import HomeStats from "./stats";

export default function Home() {
    return <>
        <HomeHero />
        <HomeStats />
        <HomeCustomFeatures />
        <HomeProjects />
    </>
}