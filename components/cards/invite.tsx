"use client";

import React, { useState } from "react";

const Invite = () => {
  const [inviteCode, setInviteCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isValid = await validateInviteCode(inviteCode);

    if (isValid) {
      setMessage("Invite code accepted! You now have access.");
    } else {
      setMessage("Invalid invite code. Please try again.");
    }
  };

  const validateInviteCode = async (code: string) => {
    return code === "VALID_INVITE_CODE"; 
  };

  return (
    <div className="flex flex-col items-center justify-center text-white font-plus-jakarta-sans">
      <div className="bg-[#101010] p-8 rounded shadow-md w-full max-w-sm">
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