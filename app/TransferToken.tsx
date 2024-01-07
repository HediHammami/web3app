// TransferToken.tsx
"use client";
// app/TransferToken.tsx
import { useState } from "react";

const TransferToken = ({ tokenInfo, userAddress }) => {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleTransfer = async () => {
    try {
      const tokenContract = "";

      // Perform the token transfer
      const tx = await tokenContract.transfer(recipientAddress, quantity);
      await tx.wait();

      // Transaction successful, update UI or show a success message
      console.log("Token transfer successful!");
    } catch (error) {
      console.error("Error transferring tokens:", error.message);
    }
  };

  return (
    <div>
      <h2>Transfer ERC-20 Tokens</h2>
      <p>Your Token Balance: {tokenInfo?.balance}</p>
      <label>
        Recipient Address:
        <input
          type="text"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <br />
      <button
        className="text-white bg-black text-sm font-bold p-3 rounded-full"
        onClick={handleTransfer}
      >
        Transfer Tokens
      </button>
    </div>
  );
};

export default TransferToken;
