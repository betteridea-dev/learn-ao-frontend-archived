"use client";
import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Toast from "@/components/banners/toast";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isAuthenticated) {
      setShowToast(true);
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    }
  }, [isAuthenticated, mounted]);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {showToast && (
        <Toast
          message="Please sign in to access this page."
          type="error"
          onClose={handleCloseToast}
        />
      )}
      {isAuthenticated && children}
    </>
  );
};

export default ProtectedRoute;