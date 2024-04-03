import { Button } from "@/utils/ui/button";
import CreateDutchAuctionSteps from "./creation-steps";
import DutchAuctionCreateForm from "./create-form";

export default function CreateDutchAuction() {
    return <div className="py-6 container mt-6 mb-4">
        <CreateDutchAuctionSteps />
        <div className="h-4" />
        <div className="bg-[--main-background-color] border rounded-sm">
            <div className="p-6 pb-10">
                <DutchAuctionCreateForm />
                <div className="text-center mt-10">
                    <Button variant="secondary" disabled className="border border-gray-400 px-3 mt-4 bg-gray-200">Next</Button>
                </div>
            </div>
        </div>
    </div>
}