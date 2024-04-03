import { createBrowserRouter } from "react-router-dom"
import Root from "../index"
import Home from "@/pages/home"
import { homeRoute } from "./others"
import { createDutchAuctionRoute, createFairLaunchRoute, createLaunchpadRoute, createSubscriptionPoolRoute, createTokenRoute } from "./launchpad"
import CreateLaunchPad from "@/pages/launchpad/create-launchpad"
import CreateFairLaunch from "@/pages/launchpad/create-fair-lauch"
import CreateDutchAuction from "@/pages/launchpad/create-dutch-auction"
import SubscriptionPool from "@/pages/launchpad/subscription-pool"
import CreateToken from "@/pages/launchpad/create-token"

const rooteNestedRoutes = [
    { path: homeRoute, element: <Home /> },
    { path: createLaunchpadRoute, element: <CreateLaunchPad /> },
    { path: createFairLaunchRoute, element: <CreateFairLaunch /> },
    { path: createDutchAuctionRoute, element: <CreateDutchAuction /> },
    { path: createSubscriptionPoolRoute, element: <SubscriptionPool /> },
    { path: createTokenRoute, element: <CreateToken /> },
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [...rooteNestedRoutes]
    }
])

export default router