"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import HowToBuy from "./components/HowToBuy";
import Footer from "./components/Footer";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [tokenPrice, setTokenPrice] = useState<string>("Loading...");

  const formatPrice = (price: number, decimals: number = 8) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: decimals,
    }).format(price);
  };

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.dexscreener.com/latest/dex/pairs/solana/BjDqkhvT2zVzVAEzFvt9VcHAVLYrkE6FLMdHU6PXrZZh"
        );
        const data = await response.json();
        console.log("Dexscreener Response:", data);

        if (data.pairs && data.pairs.length > 0) {
          const priceInSol = Number(data.pairs[0].priceUsd); // Harga SOL dalam USD
          const priceInUsdt = priceInSol; // Misalnya, harga dalam $USDT sudah diambil langsung dari API
          setTokenPrice(formatPrice(priceInUsdt, 8)); // Format harga menjadi $USDT
        } else {
          setTokenPrice("N/A");
        }
      } catch (error) {
        console.error("Failed to fetch price:", error);
        setTokenPrice("N/A");
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 5000); // Update setiap 5 detik
    return () => clearInterval(interval);
  }, []);

  const connectWallet = async () => {
    if (
      typeof window !== "undefined" &&
      (window as any).solana &&
      (window as any).solana.isPhantom
    ) {
      try {
        const response = await (window as any).solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error("Wallet connection failed:", err);
      }
    } else {
      alert("Phantom Wallet not found! Install it from https://phantom.app/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero
        tokenPrice={tokenPrice}
        walletAddress={walletAddress}
        onConnectWallet={connectWallet}
      />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}
