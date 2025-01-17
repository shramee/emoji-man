import { useUIStore } from "../store/store";
import { WalletConnect } from "./WalletConnect";

export const CreateAccount = () => {
    const loggedIn = useUIStore((state: any) => state.loggedIn);
    return (
        <div
            className={`absolute h-screen w-screen bg-black top-0 left-0 z-100 text-white flex justify-center ${
                loggedIn ? "hidden" : ""
            }`}
        >
            <div className="self-center border-2 p-4">
                <h3 className="text-3xl mb-2">RPS</h3>
                <h5 className="text-xl mb-4">Eat to survive</h5>
                <div>
                    <WalletConnect />
                </div>
            </div>
        </div>
    );
};
