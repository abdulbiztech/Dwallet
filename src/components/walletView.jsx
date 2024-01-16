import React, { useState, useEffect } from "react";
import {
  Divider,
  Tooltip,
  List,
  Avatar,
  Spin,
  Tabs,
  Input,
  Button,
} from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../noImg.png";
// import { CHAINS_CONFIG } from "../chains";
import { ethers } from "ethers";
function walletView({
  wallet,
  setWallet,
  seedPhrase,
  setSeedPhrase,
  selectedChain,
}) {
  const navigate = useNavigate();
  const tokens = [
    {
      symbol: "ETH",
      name: "Ethereum",
      balance: 100000000000,
      decimal: 18,
    },
    {
      symbol: "LINK",
      name: "ChainLink",
      balance: 100000000000,
      decimal: 18,
    },
    {
      symbol: "UNI",
      name: "Uniswap",
      balance: 100000000000,
      decimal: 18,
    },
    {
      symbol: "MATIC",
      name: "Polygon",
      balance: 100000000000,
      decimal: 18,
    },
  ];
  const nfts = [
    "https://backend.decentrawood.com/asset/getImages?imageName=asset-1678085618449.jpg&pathName=ASSET_IMAGE_PATH_NFT",
    "https://backend.decentrawood.com/asset/getImages?imageName=asset-1678085437986.jpg&pathName=ASSET_IMAGE_PATH_NFT",
    "https://backend.decentrawood.com/asset/getImages?imageName=asset-1678085315667.jpg&pathName=ASSET_IMAGE_PATH_NFT",
  ];
  const items = [
    {
      key: "3",
      label: `Tokens`,
      children: (
        <>
          {tokens ? (
            <>
              <List
                bordered
                itemLayout="horizontal"
                dataSource={tokens}
                renderItem={(item, index) => (
                  <List.Item style={{ textAlign: "left" }}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.logo || logo} />}
                      title={item.symbol}
                      description={item.name}
                    />
                    <div>
                      {(
                        Number(item.balance) /
                        10 ** Number(item.decimal)
                      ).toFixed(2)}{" "}
                      Tokens
                    </div>
                  </List.Item>
                )}
              />
            </>
          ) : (
            <>
              <span>You seem to not have any tokens yet</span>
              <p className="frontPageBottom">
                Find more on Decentrawood:{" "}
                <a
                  href="https://Decentrawood.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Decentrawood
                </a>
              </p>
            </>
          )}
        </>
      ),
    },
    {
      key: "2",
      label: `NFTs`,
      children: (
        <>
          {nfts ? (
            <>
              {nfts.map((e, i) => {
                return (
                  <>
                    {e && (
                      <img
                        key={i}
                        className="nftImage"
                        alt="nftImage"
                        src={e}
                      />
                    )}
                  </>
                );
              })}
            </>
          ) : (
            <>
              <span>You seem to not have any NFTs yet</span>
              <p className="frontPageBottom">
                Find more on Decentrawood:{" "}
                <a
                  href="https://Decentrawood.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Decentrawood
                </a>
              </p>
            </>
          )}
        </>
      ),
    },
    {
      key: "1",
      label: `Transfer`,
      children: <>Transfer</>,
    },
  ];

  function logOut() {
    setSeedPhrase(null);
    setWallet(null);
    navigate("/");
  }
  return (
    <>
      <div className="content">
        <div className="logoutButton" onClick={logOut}>
          <LogoutOutlined />
        </div>
        <div className="walletName">Wallet</div>
        <Tooltip title={wallet}>
          <div>
            {wallet.slice(0, 4)}...{wallet.slice(38)}
          </div>
        </Tooltip>
        <Divider />
        <Tabs defaultActiveKey="1" items={items} className="walletView" />
      </div>
    </>
  );
}
export default walletView;
