
import React from "react";

const TokenInfo = ({ tokenInfo }) => {
  return (
    <div>
      <h1>Web3 App</h1>
      {tokenInfo ? (
        <div>
          <p>Token Name: {tokenInfo.name}</p>
          <p>Token Symbol: {tokenInfo.symbol}</p>
          <p>User Balance: {tokenInfo.balance}</p>
        </div>
      ) : (
        <p>Please connect your wallet to load ERC-20 token information.</p>
      )}
    </div>
   
  );
};

export default TokenInfo;
