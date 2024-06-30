"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null;
  login: (userName: string, email: string) => Promise<void>;
  logout: () => void;
}

function uint8ArrayToBase64(array: any) {
  return btoa(String.fromCharCode.apply(null, [...array]));
}

function base64ToUint8Array(base64: any) {
  return new Uint8Array([...atob(base64)].map((c) => c.charCodeAt(0)));
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const login = async (userName: string, email: string) => {
    // setIsAuthenticated(true);
    // setUser(userName);
    const activeAddress = await window.arweaveWallet.getActiveAddress();
    const addrEncoded = new TextEncoder().encode(activeAddress);
    const signature = await window.arweaveWallet.signMessage(addrEncoded);

    console.log(process.env.NEXT_PUBLIC_BACKEND_BASE);
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_BASE + "/auth/login",
      {
        data: uint8ArrayToBase64(addrEncoded),
        signature: uint8ArrayToBase64(signature),
        publicKey: await window.arweaveWallet.getActivePublicKey(),
        walletAddress: activeAddress,
        username: email,
        password: "x",
      }
    );
    // console.log(res.data);
    if (res.data.access_token) {
      setIsAuthenticated(true);
      setUser(userName);
      setEmail(email);
      setAccessToken(res.data.access_token);
    }else{
      setIsAuthenticated(false);
    }

  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setEmail(null);
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
