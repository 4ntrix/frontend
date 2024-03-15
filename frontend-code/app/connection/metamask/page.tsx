'use client'
import { useState } from 'react';
import { ethers } from 'ethers';

const MetaMaskButton = () => {
    const [connected, setConnected] = useState(false);

    const connectToMetaMask = async () => {
        try {
            // Check if MetaMask is installed
            if (window.ethereum) {
                // Request access to MetaMask
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                // Initialize Ethers.js provider
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                // Access the connected Ethereum address
                const accounts = await provider.listAccounts();
                console.log("Connected to MetaMask with address:", accounts[0]);
                // Set connected state to true
                setConnected(true);
            } else {
                console.error('MetaMask extension not detected');
            }
        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
        }
    };

    return (
        <button onClick={connectToMetaMask}>
            {connected ? 'Connected to MetaMask' : 'Connect to MetaMask'}
        </button>
    );
};

export default MetaMaskButton;
