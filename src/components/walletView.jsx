import React, { useState } from "react";
function walletView({
  wallet,
  setWallet,
  seedPhrase,
  setSeedPhrase,
  selectedChain,
}) {
  return (
    <>
      <div className="content">{wallet}</div>
    </>
  );
}
export default walletView;
