'use client'
import { createContext, useState, useContext, useEffect } from 'react'; 
import * as eth from "ethers";
import { Contract, ethers } from "ethers";

export const BlockchainConfig = createContext();

export const BlockchainProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("Connect Wallet");
    const [errorMessage, setErrorMessage] = useState(null);

    let provider, signer, contract;

    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                window.alert("Please install MetaMask.");
                return;
            }

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            setCurrentAccount(accounts[0]);

            window.ethereum.on("accountsChanged", (newAccounts) => {
                if (newAccounts.length === 0) {
                    setCurrentAccount(null);
                } else {
                    setCurrentAccount(newAccounts[0]);
                }
            });

        } catch (error) {
            console.error(`Error connecting wallet: ${error.message}`);
            setErrorMessage(error.message);
        }
    };


    return (
        <BlockchainConfig.Provider value={{ connectWallet, currentAccount, errorMessage }}>
            {children}
        </BlockchainConfig.Provider>
    );
};
