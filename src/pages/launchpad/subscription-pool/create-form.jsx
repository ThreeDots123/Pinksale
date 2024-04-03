import { Button } from "@/utils/ui/button";
import { Input } from "@/utils/ui/input";
import { Label } from "@/utils/ui/label";
import { RadioGroup, RadioGroupItem } from "@/utils/ui/radio-group";


export default function SubscriptionPoolCreateForm() {
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
                <small className="text-xs text-[#3298dc] block my-2">Pool creation fee: 1 BNB</small>
            </div>

            <div>
                <h4 className="font-semibold my-3">Currency</h4>
                <RadioGroup defaultValue="BNB" className="space-y-2 fill-[--primary-color]">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="BNB" id="r1" />
                        <Label htmlFor="r1" className=" font-normal">BNB</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="BUSD" id="r2" />
                        <Label htmlFor="r2" className=" font-normal">BUSD</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="USDT" id="r3" />
                        <Label htmlFor="r3" className=" font-normal">USDT</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="USDC" id="r3" />
                        <Label htmlFor="r3" className=" font-normal">USDC</Label>
                    </div>
                </RadioGroup>
                <small className="text-xs text-[#3298dc] block my-2">
                    Users will pay with BNB for your token
                </small>
            </div>

            <div>
                <h4 className="font-semibold my-3">Free Options</h4>
                <RadioGroup defaultValue="BNB" className="space-y-2 fill-[--primary-color]">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="BNB" id="r1" />
                        <Label htmlFor="r1" className=" font-normal">
                            5% USDT raised only
                            <span className="text-sm text-[#3298dc]"> (Recommended)</span>
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="BUSD" id="r2" />
                        <Label htmlFor="r2" className=" font-normal">Other</Label>
                    </div>
                </RadioGroup>
            </div>
        </form>
    </>
}