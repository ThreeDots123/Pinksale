import { Button } from "@/utils/ui/button";
import FairLaunchCreateForm from "./create-form";
import CreateFairLaunchSteps from "./creation-steps";

export default function CreateFairLaunch() {
    return <div className="py-6 container mt-6 mb-4">
        <CreateFairLaunchSteps />
        <div className="h-4" />
        <div className="bg-[--main-background-color] border rounded-sm">
            <div className="p-6 pb-10">
                <FairLaunchCreateForm />
                <div className="text-center mt-10">
                    <div className="w-full bg-[--alert-warning-bg-color] text-sm border border-[--alert-warning-border] text-[--text-color] py-3 rounded-sm">
                        <article className="">
                            For auto listing, after you finalize the pool your token will be auto listed on DEX.
                        </article>
                    </div>
                    <Button variant="secondary" disabled className="border border-gray-400 px-3 mt-4 bg-gray-200">Next</Button>
                </div>
            </div>
        </div>
    </div>
}