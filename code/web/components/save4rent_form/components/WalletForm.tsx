import React, { useState } from 'react';

interface WalletFormProps {
  onConnect: (walletDetails: { walletType: string; walletId: string }) => void;
  onClose: () => void;
}

const WalletForm: React.FC<WalletFormProps> = ({ onConnect, onClose }) => {
  const [walletType, setWalletType] = useState('');
  const [walletId, setWalletId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConnect({ walletType, walletId });
    onClose(); // Close the modal after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-[16px] text-[black] font-bold mb-4">Securely Connect a Wallet</h2>

      {/* Wallet Type Selection */}
      <div className="mb-[24px]">
        <label className="mb-[8px] text-[#8592AD] block">Select Wallet</label>
        <select
          name="walletType"
          value={walletType}
          onChange={(e) => setWalletType(e.target.value)}
          className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-[8px] bg-transparent h-[60px]"
          required
        >
          <option value="" disabled>Select a wallet</option>
          {["Metamask", "Trust Wallet", "Coinbase Wallet", "Ledger"].map((wallet, index) => (
            <option key={index} value={wallet}>
              {wallet}
            </option>
          ))}
        </select>
      </div>

      {/* Wallet ID Input */}
      <div className="mb-[41px]">
        <label className="mb-[8px] text-[#8592AD] block">Wallet ID</label>
        <input
          type="text"
          name="walletId"
          value={walletId}
          onChange={(e) => setWalletId(e.target.value)}
          className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-[8px] bg-transparent h-[60px]"
          placeholder="Enter your Wallet ID"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#317BA0] text-white py-2 rounded-lg hover:bg-blue-600 mb-[25px]"
      >
        Connect Wallet
      </button>

      <div className='flex justify-center'>
        <div className='border border-black rounded-[8px] px-[23px] py-[29px] w-4/5'>
          <p className='text-black font-medium text-[14px] mb-[13px]'>How safe is my information</p>
          <p className='text-black text-[12px] mb-[15px]'>Your card details are not saved on any OpenHouse servers.</p>
          <p className='text-black text-[12px] mb-[15px]'>They are securely passed to your bank for processing and verification. Your bank just sends OpenHouse a confirmation to charge</p>
        </div>
      </div>
    </form>
  );
};

export default WalletForm;
