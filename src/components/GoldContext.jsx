import { createContext, useState, useContext } from "react";


const GoldContext = createContext();

export function GoldProvider({children}) {
    const [gold, setGold] = useState(0);

    const addGold = (amount) => setGold((prev) => prev + amount);
    const spendGold = (amount) => setGold((prev) => Math.max(0, prev - amount))


    return (
        <GoldContext.Provider value={{gold, addGold, spendGold}}>
            {children}
        </GoldContext.Provider>
    );
}

export const useGold = () => useContext(GoldContext);