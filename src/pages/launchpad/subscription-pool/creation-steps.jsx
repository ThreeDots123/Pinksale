export default function SubscriptionPoolSteps() {
    return <div className="flex w-full justify-between max-lg:hidden">
        <div className="flex gap-3">
            <div className="h-8 w-8 bg-[--primary-color] rounded-full text-center leading-8">
                <span className="text-white">1</span>
            </div>
            <div>
                <h5 className="text-[--text-color] font-medium mb-0.5 leading-8">Verify Token</h5>
                <p className="text-sm max-w-36 text-[--fade-text-color]">Enter the token address and verify</p>
            </div>
        </div>

        <div className="flex gap-3">
            <div className="h-8 w-8 bg-[--main-background-color] border border-[rgba(0,0,0,.25)] rounded-full text-center leading-8">
                <span className="text-[-main-text-color]">2</span>
            </div>
            <div>
                <div>
                    <h5 className="text-[--fade-text-color] font-medium mb-0.5 leading-8">Subscription</h5>
                </div>
                <p className="text-sm max-w-36 text-[--fade-text-color]">
                    Enter the subscription information that you want to raise , that should be enter all details about your presale
                </p>
            </div>
        </div>

        <div className="flex gap-3">
            <div className="h-8 w-8 bg-[--main-background-color] border border-[rgba(0,0,0,.25)] rounded-full text-center leading-8">
                <span className="text-[-main-text-color]">3</span>
            </div>
            <div>
                <div>
                    <h5 className="text-[--fade-text-color] font-medium mb-0.5 leading-8">Add Additional Info</h5>
                </div>
                <p className="text-sm max-w-36 text-[--fade-text-color]">Let people know who you are</p>
            </div>
        </div>

        <div className="flex gap-3">
            <div className="h-8 w-8 bg-[--main-background-color] border border-[rgba(0,0,0,.25)] rounded-full text-center leading-8">
                <span className="text-[-main-text-color]">4</span>
            </div>
            <div>
                <div>
                    <h5 className="text-[--fade-text-color] font-medium mb-0.5 leading-8">Finish</h5>
                </div>
                <p className="text-sm max-w-36 text-[--fade-text-color]">Review your information</p>
            </div>
        </div>
    </div>
}