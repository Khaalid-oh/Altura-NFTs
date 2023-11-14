import React from "react";



function How() {

  return (
    <div className="h-full w-full md:w-3/4 flex flex-col gap-6 place-self-center">
      <div className="p-2 md:px-16 flex flex-col gap-2 md:gap-6 items-center">
        <h1 className="text-3xl">NFT Explorer App</h1>
        <p className="text-gray-600 md:w-4/5 flex text-center">
          Explore and discover Non-Fungible Tokens (NFTs) like never before! Our
          platform offers a unique feature that allows you to easily view and
          track NFTs of any given address on the blockchain.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 ">
        <h2 className="text-xl text-[#3D00B7] underline">How it works</h2>
        <div className="flex flex-col gap-4">
          <div className="bg-violet-200 rounded-xl p-2 md:w-1/2">
            <p className="text-[#3D00B7]">01.</p>
            <p className="text-gray-600">
              Paste your Ethereum contract address to display all the list NFT
              collection associated the wallet.
            </p>
          </div>
          <div className="bg-violet-200 rounded-xl p-2 md:w-1/2 self-end ">
            <p className="text-[#3D00B7]">02.</p>
            <p className="text-gray-600">
              The app utilize the Alchemy API to retrieve the list of NFTs
              associated with the provided address.
            </p>
          </div>
          <div className="bg-violet-200 rounded-xl p-2 md:w-1/2">
            <p className="text-[#3D00B7]">03.</p>
            <p className="text-gray-600">
              The app display the retrieved NFTs and digital art from the
              address to list on the app for you to explore.
            </p>
          </div>
          <div className="bg-violet-200 rounded-xl p-2 md:w-1/2 self-end">
            <p className="text-[#3D00B7]">04.</p>
            <p className="text-gray-600 select-text">
              Copy and paste the following Azuki wallet address to test:
              0xED5AF388653567Af2F388E6224dC7C4b3241C544
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
