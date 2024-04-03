import { Button } from "@/utils/ui/button";
import { Checkbox } from "@/utils/ui/checkbox";
import { Input } from "@/utils/ui/input";

export default function TokenCreateForm() {
    return <>
        <form action="" className="space-y-5">
            <div>
                <div className="flex flex-wrap mb-2">
                    <label className="flex-1 font-semibold" htmlFor="">
                        Token address
                        <span className="text-sm text-[--primary-color] ml-1 mb-2">*</span>
                    </label>
                    <Button variant="outline" size="sm">Create token</Button>
                </div>
                <Input placeholder="Ex: PinkMoon" className=" focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-[--primary-color]" />
                <small className="text-xs text-[#3298dc] block my-2">0.4 BNB</small>
            </div>

            <div>
                <div className="flex flex-wrap mb-2">
                    <label className="flex-1 font-semibold" htmlFor="">
                        Name
                        <span className="text-sm text-[--primary-color] ml-1 mb-2">*</span>
                    </label>
                </div>
                <Input placeholder="Ex: Etherum" className=" focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-[--primary-color] placeholder:text-gray-400" />
            </div>

            <div>
                <div className="flex flex-wrap mb-2">
                    <label className="flex-1 font-semibold" htmlFor="">
                        Symbol
                        <span className="text-sm text-[--primary-color] ml-1 mb-2">*</span>
                    </label>
                </div>
                <Input placeholder="Ex: ETH" className=" focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-[--primary-color] placeholder:text-gray-400" />
            </div>

            <div>
                <div className="flex flex-wrap mb-2">
                    <label className="flex-1 font-semibold" htmlFor="">
                        Decimals
                        <span className="text-sm text-[--primary-color] ml-1 mb-2">*</span>
                    </label>
                </div>
                <Input placeholder="Ex: 18" className=" focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-[--primary-color]  placeholder:text-gray-400" />
            </div>

            <div>
                <div className="flex flex-wrap mb-2">
                    <label className="flex-1 font-semibold" htmlFor="">
                        Total supply
                        <span className="text-sm text-[--primary-color] ml-1 mb-2">*</span>
                    </label>
                </div>
                <Input placeholder="Ex: 10000000000" className=" focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-[--primary-color]  placeholder:text-gray-400" />
            </div>
        </form>
        
        <div className="flex items-center space-x-2 mt-7">
            <Checkbox id="system" />
            <label htmlFor="system" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Implement Pink Antibot System
            </label>
        </div>
    </>
}