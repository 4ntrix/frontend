'use client';
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { Contract, ethers } from "ethers";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 border border-white-2 rounded-full" />
    </div>
  );
}


function Navbar({ className }: { className?: string }) {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

      window.ethereum.on("accountsChanged", (newAccounts: string | any[]) => {
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

  useEffect(() => {
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        setCurrentAccount(null);
      } else {
        setCurrentAccount(accounts[0]);
      }
    };

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        window.ethereum.off("accountsChanged", handleAccountsChanged);
      };
    }
  }, []);

  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="User">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/user/buy-tickets">Buy Tickets</HoveredLink>
            <HoveredLink href="/user/your-tickets">View Purchased Tickets</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Admin">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/admin/list-nft">List NFT</HoveredLink>
            <HoveredLink href="/admin/dashboard">Dashboard</HoveredLink>
          </div>
        </MenuItem>
        {currentAccount ? (
          <span className="text-red-500">{currentAccount}</span>
        ) : (
          <button className="bg-transparent text-red-500" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        {errorMessage && <p>{errorMessage}</p>}
      </Menu>
    </div>
  );
}
