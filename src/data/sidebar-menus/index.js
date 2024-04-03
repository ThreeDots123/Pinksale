import { createAirdropRoute, listAirdropsRoute } from "@/routes/airdrop"
import { antiBotRoute, bridgeRoute, buyCryproRoute, homeRoute, leaderBoardRoute, multiSenderRoute, privateSaleRoute } from "@/routes/others"
import { 
    createDutchAuctionRoute, 
    createFairLaunchRoute, 
    createLaunchpadRoute, 
    createSubscriptionPoolRoute, 
    createTokenRoute, 
    listLaunchpadsRoute 
} from "@/routes/launchpad"
import { 
    createLockRoute, 
    pinklockLiquidityRoute, 
    pinklockTokenRoute 
} from "@/routes/pinklock"
import { 
    AiOutlineHome, 
    AiOutlineRocket,
    AiOutlineUnlock,
    AiOutlineDollar,
    AiOutlineCrown,
    AiOutlineAudit,
    AiOutlineShoppingCart
} from "react-icons/ai"
import { 
    BsShield,
    BsShieldCheck,
    BsSend,
    BsTwitterX
} from "react-icons/bs"
import { GoGraph } from "react-icons/go"
import { IoDocumentTextOutline } from "react-icons/io5"
import { TiSocialFacebookCircular } from "react-icons/ti"
import { AirdropsIcon, BridgeIcon, PoolAlertIcon, StakingIcon } from "./icons"
import { createStakingRoute, listStakingsRoute } from "@/routes/staking"


const menus = [
    { name: "home", Icon: AiOutlineHome, url: homeRoute, submenu: false },
    { 
        name: "launchpads", 
        Icon: AiOutlineRocket,
        submenu: true,
        height_class: "h-[253px]", // The css height for that submenu
        items: [
            { title: "create launchpad", url: createLaunchpadRoute },
            { title: "create fairlaunch", url: createFairLaunchRoute },
            { title: "create dutch-auction", url: createDutchAuctionRoute },
            { title: "create subscription-pool", url: createSubscriptionPoolRoute },
            { title: "create token", url: createTokenRoute },
            { title: "launchpad list", url: listLaunchpadsRoute },
        ]
    },
    { 
        name: "pinklock", 
        Icon: AiOutlineUnlock,
        submenu: true,
        height_class: "h-[133px]", // The css height for that submenu
        items: [
            { title: "create lock", url: createLockRoute },
            { title: "token", url: pinklockTokenRoute },
            { title: "liquidity", url: pinklockLiquidityRoute },
        ]
    },
    { 
        name: "airdrop", 
        Icon: AirdropsIcon,
        submenu: true,
        height_class: "h-[85px]", // The css height for that submenu
        items: [
            { title: "create airdrop", url: createAirdropRoute },
            { title: "airdrop list", url: listAirdropsRoute },
        ]
    },
    { 
        name: "staking", 
        Icon: StakingIcon,
        submenu: true,
        height_class: "h-[85px]", // The css height for that submenu
        items: [
            { title: "create staking", url: createStakingRoute },
            { title: "staking list", url: listStakingsRoute },
        ]
    },
    { name: "private sale", Icon: BsShield, url: privateSaleRoute, submenu: false },
    { name: "buy crypto fiat", Icon: AiOutlineDollar, url: buyCryproRoute, submenu: false },
    { name: "bridge", Icon: BridgeIcon, url: bridgeRoute, submenu: false },
    { name: "leaderboard", Icon: AiOutlineCrown, url: leaderBoardRoute, submenu: false },
    { name: "Anti-Bot", Icon: BsShieldCheck, url: antiBotRoute, submenu: false },
    { name: "mult-sender", Icon: BsSend, url: multiSenderRoute, submenu: false },
    { name: "dexview", Icon: GoGraph, url: "https://www.dexview.com", submenu: false },
    { name: "Pools Alert", Icon: PoolAlertIcon, url: "https://t.me/PinkSaleTracking", submenu: false },
    { name: "KYC & Audit", Icon: AiOutlineAudit, url: "https://docs.pinksale.finance/important/kyc-and-audit-at-pinksale", submenu: false },
    { name: "Docs", Icon: IoDocumentTextOutline, url: "https://docs.pinksale.finance", submenu: false },
    { name: "Shop", Icon: AiOutlineShoppingCart, url: "https://shop.pinksale.finance", submenu: false },
    { name: "Twitter", Icon: BsTwitterX, url: "https://twitter.com/", submenu: false },
    { name: "Facebook", Icon: TiSocialFacebookCircular, url: "https://www.facebook.com/profile.php?id=123", submenu: false },
]

export default menus