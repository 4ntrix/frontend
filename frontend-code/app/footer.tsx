"use client";
import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[60rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-md  md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the Revolution
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center p-2 relative z-10">
          This project is poised to revolutionize event management by
          introducing a secure, transparent, and decentralized ticketing
          ecosystem powered by blockchain technology and NFTs. Through the
          issuance of unique digital assets representing event tickets, it
          ensures tamper-proof authenticity and eliminates the risk of fraud. By
          decentralizing ticket transactions, it fosters peer-to-peer
          engagement, reducing fees and democratizing access to events. The
          transparent ledger of blockchain records every ticket transaction,
          ensuring accountability and trust among organizers and attendees.
          Additionally, NFTs enable personalized experiences, fan engagement,
          and global accessibility while promoting environmental sustainability
          through paperless ticketing. This innovative approach promises to
          redefine the event industry, offering a seamless, inclusive, and
          engaging experience for all stakeholders involved.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
