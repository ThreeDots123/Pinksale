import PropTypes from "prop-types"

export default function NavigationBtn({ children }) {
    return <div className="flex items-center gap-2 border border-[--network-button-bg-color] bg-[--network-button-bg-color] px-2 py-1 rounded-[30px] cursor-pointer h-[42px] text-[--text-color] font-semibold text-sm">
        {children}
    </div>
}

NavigationBtn.propTypes = {
    children: PropTypes.node.isRequired
}