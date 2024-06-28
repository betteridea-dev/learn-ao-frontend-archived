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
      // Check if window is defined before using it
      if (typeof window !== "undefined") {
        window.location.href = "/"; // Redirect to home if not authenticated
      }
    }
  }, [isAuthenticated, mounted]);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  if (!mounted) {
    return null; // Return null while component is mounting
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