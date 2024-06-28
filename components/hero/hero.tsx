"use client";
import React, { useState } from "react";
import Gift from "../banners/gift";
import Black from "../buttons/black-button";
import Nav from "./nav";
import { connect, disconnect } from "@othent/kms";
import Arweave from "arweave";
import Toast from "../banners/toast";
import Link from "next/link";

const arweave = Arweave.init({
  host: "arweave.net",
  protocol: "https",
  port: 443,
});

const Hero: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [signedUp, setSignedUp] = useState(false); // Track sign-up status
  const [userName, setUserName] = useState<string>(""); // State to hold user name

  const handleConnect = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await connect();
      console.log("Connected:\n", res);
      setToast({ message: "Successfully connected!", type: "success" });
      setSignedUp(true);
      setUserName(res.given_name); // Extract and set the user's name from the response
    } catch (err) {
      console.error("Connection error:", err);
      setToast({
        message: "Failed to connect. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await disconnect();
      console.log("Disconnected:\n", res);
      setToast({ message: "Successfully disconnected!", type: "success" });
    } catch (err) {
      console.error("Disconnection error:", err);
      setToast({
        message: "Failed to disconnect. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseToast = () => setToast(null);

  return (
    <div className="relative w-full h-full">
      <div className="text-right absolute hidden lg:flex right-8 top-8">
        <span className="text-neutral-400 text-base font-normal font-plus-jakarta-sans leading-tight">
          Dumdum wants help
          <br />
          building groundbreaking
          <br />
          applications with LearnAO,
          <br />
          your one-stop shop for
          <br />
          mastering AO development.
        </span>
      </div>
      <div className="flex flex-col gap-y-6 p-10 justify-center items-center">
        <div className="mt-32 2xl:mt-0">
          <Gift />
        </div>
        <div className="font-lora text-[26px] lg:text-[46px] 2xl:text-[56px] text-white flex flex-col leading-[40px] lg:leading-[60px] text-center">
          <div>Dumdum wants you.</div>
          <div>
            to help him <span className="italic">LearnAO</span>
          </div>
        </div>
        <div className="flex-col flex justify-center items-center gap-3 text-center">
          <div className="text-center text-neutral-400 text-sm 2xl:text-md font-normal font-plus-jakarta-sans leading-tight">
            Don’t worry if you don’t have a wallet. Simply sign in with Google.
          </div>
          <div className="mt-20 lg:mt-0">
            {signedUp ? (
              <>
                <div className="text-white mb-2 font-lora">
                  Welcome <span className="italic">{userName}!</span>
                </div>
                <Link href="/courses">
                  <div className="text-white px-2 py-1 rounded-2xl border border-zinc-100 justify-center items-center gap-2.5 inline-flex">
                    Go to Courses
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Black text="Sign up" onClick={handleConnect} />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="absolute left-8 bottom-10">
        <Nav />
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
};

export default Hero;
