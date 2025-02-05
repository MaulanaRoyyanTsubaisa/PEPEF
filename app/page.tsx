"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Tokenomics from "./components/Tokenomics"
import Roadmap from "./components/Roadmap"
import HowToBuy from "./components/HowToBuy"
import Footer from "./components/Footer"

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [tokenPrice, setTokenPrice] = useState<string>("Loading...")

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.raydium.io/v2/sdk/token/price"
        );
        const data = await response.json();

        console.log("API Response:", data); // Cek data yang tersedia

        // Pastikan PEPEF ada dalam daftar token
        if (data["PEPEF"]) {
          setTokenPrice(Number(data["PEPEF"].price).toFixed(6));
        } else {
          console.warn("Token PEPEF tidak ditemukan!");
          setTokenPrice("N/A");
        }
      } catch (error) {
        console.error("Gagal mengambil harga token:", error);
        setTokenPrice("N/A");
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 10000);
    return () => clearInterval(interval);
  }, []);


  const connectWallet = async () => {
    if (typeof window !== "undefined" && (window as any).solana && (window as any).solana.isPhantom) {
      try {
        const response = await (window as any).solana.connect()
        setWalletAddress(response.publicKey.toString())
      } catch (err) {
        console.error("Wallet connection failed:", err)
      }
    } else {
      alert("Phantom Wallet not found! Install it from https://phantom.app/")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero tokenPrice={tokenPrice} walletAddress={walletAddress} onConnectWallet={connectWallet} />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  )
}

