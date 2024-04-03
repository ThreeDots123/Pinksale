import { create } from "zustand";

const useSideBarToggle = create(set => ({
    open: true,
    toggle() { 
        set(
            ({ open }) => ({ open: !open })
        ) 
    }
}))


export default useSideBarToggle