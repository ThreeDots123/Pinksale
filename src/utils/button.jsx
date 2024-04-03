import { cn } from "@/lib/utils"
import PropTypes from "prop-types"

export default function DefaultButton({ children, className="" }) {
    return <div className={cn(
        "rounded-2xl cursor-pointer font-semibold tracking-[0.03em] h-[42px] px-4 bg-[--red-button-bg-color] text-[--red-button-text-color] flex items-center justify-center", className
    )}>
        {children}
    </div>
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired
}