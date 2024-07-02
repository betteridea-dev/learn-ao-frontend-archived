"use client";
import React, { useState } from "react";
import axios from "axios";

interface InviteProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const Invite: React.FC<InviteProps> = ({ isOpen, onClose, onSuccess }) => {
  const [inviteCode, setInviteCode] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const validateInviteCode = async (code: string) => {
    try {
      const token = localStorage.getItem("jwt-token");

      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.post(
        "http://localhost:8000/invitation/user",
        {
          invitationCode: code,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.isValid; // Assuming the response contains an `isValid` field
    } catch (error) {
      console.error("Error validating invite code:", error);
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isValid = await validateInviteCode(inviteCode);

    if (isValid) {
      setMessage("Invite code accepted! You now have access.");
      onSuccess();
    } else {
      setMessage("Invalid invite code. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#101010] p-8 rounded shadow-md w-full max-w-sm text-white font-plus-jakarta-sans">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Invite Code</label>
            <input
              type="text"
              value={inviteCode}
              placeholder="Enter Invite Code"
              onChange={(e) => setInviteCode(e.target.value)}
              className="shadow appearance-none border border-[#27272a] bg-[#09090b] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#E9FF91] text-[#060606] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Invite;