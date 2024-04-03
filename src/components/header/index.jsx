import Navigation from "./navigation";

export default function Header() {
    return <header className="fixed h-auto w-full px-4 -top-[1px] z-20 bg-[--main-background-color] text-[--main-text-color]">
        <Navigation />
    </header>
}