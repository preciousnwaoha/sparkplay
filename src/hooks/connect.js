import { useEffect, useState } from "react";
import { ethers, providers } from "ethers";
import Web3Modal from "web3modal";
import converter from "hex2dec";
import { providerOptions } from "../libs/config";


export const useConnectWallet = (network) => {

    const [provider, setProvider] = useState(null)
    const [library, setLibrary] = useState(null)
    const [chainId, setChainId] = useState(null)
    const [accounts, setAccount] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    

    const networkChanged = (chainId) => {
        setChainId(Number(converter.hexToDec(chainId)));
    };

    const connect = async () => {

        setLoading(true)

        try {

            const web3Modal = new Web3Modal({
                cacheProvider: false, // optional
                providerOptions // required
            });
              

            const provider = await web3Modal.connect();
            const library = new ethers.providers.Web3Provider(provider);
            const accounts = await library.listAccounts();
            const network = await library.getNetwork();
            setProvider(provider);
            setLibrary(library);
            if (accounts) setAccount(accounts[0]);
            setChainId(network.chainId);
        } catch (error) {
            setError(error);
        }

        setLoading(false)

    }

    const getAccount = async () => {

        try {

            const web3Modal = new Web3Modal({
                cacheProvider: false, // optional
                providerOptions // required
            });
              
            const provider = await web3Modal.connect();
            const library = new ethers.providers.Web3Provider(provider);
            const accounts = await library.listAccounts();
            const network = await library.getNetwork();
            setProvider(provider);
            setLibrary(library);
            if (accounts) setAccount(accounts[0]);
            setChainId(network.chainId);

        } catch (error) {
            setError(error);
        }

    }

    const changeNetwork = async () => {
        try {
          if (!window.ethereum) throw new Error("No crypto wallet found");
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [network]
          });
          setChainId(Number(window.ethereum.networkVersion))
        } catch (err) {
          setError(err.message);
          console.error(err.message)
        }
    };

    // Wallet connection logic
	const isWalletConnected = async () => {

		try {

			const { ethereum } = window;

			const accounts = await ethereum.request({ method: 'eth_accounts' });

			if (accounts.length > 0) {
				const account = accounts[0];
        		setAccount(account);
				console.log('wallet is connected! ' + account);
                setChainId(Number(window.ethereum.networkVersion))
			} else {
				console.log('make sure MetaMask is connected');
			}

		} catch (error) {
			console.error('error: ', error);

		}

        return false
	};


    useEffect(() => {
        isWalletConnected()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

      
    useEffect(() => {

        if (provider) {

            provider.on('accountsChanged', function (accounts) {
                setAccount(accounts[0]);
            });

            // Subscribe to chainId change
            provider.on("chainChanged", (chainId) => {
                console.log(chainId);
                setChainId(chainId)
            });
              
            // Subscribe to provider connection
            provider.on("connect", (info) => {
                console.log(info);
            });
              
            // Subscribe to provider disconnection
            provider.on("disconnect", (error) => {
            console.log(error);
            });
        }

        if (window?.ethereum !== undefined) {

            window.ethereum.on("chainChanged", networkChanged);

            return () => {
                window.ethereum.removeListener("chainChanged", networkChanged);
            };

        }

    }, [provider])
    
    return { connect, getAccount, changeNetwork, setError, accounts, chainId, library, loading, error, provider }

};