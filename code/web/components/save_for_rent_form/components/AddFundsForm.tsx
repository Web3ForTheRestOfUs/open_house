import React, { useState } from 'react';
import Modal from './Modal'; // Assuming you have a Modal component
import CardForm from './CardForm'; // Assuming you have a CardForm component
import WalletForm from './WalletForm'; // Assuming you have a WalletForm component

interface AddFundsFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddFundsForm: React.FC<AddFundsFormProps> = ({ isOpen, onClose }) => {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [amount, setAmount] = useState('');

  const handleVerifyCard = (cardDetails: { cardNumber: string; expiry: string; cvv: string }) => {
    console.log('Card Verified:', cardDetails);
    setIsCardModalOpen(false); // Close card modal after submission
  };

  const handleConnectWallet = (walletDetails: { walletType: string; walletId: string }) => {
    console.log('Wallet Connected:', walletDetails);
    setIsWalletModalOpen(false); // Close wallet modal after submission
  };

  const handleAddFunds = () => {
    console.log('Funds Added:', amount);
    onClose(); // Close the modal after adding funds
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>
          <h2 className="text-base font-bold mb-4">Add Funds</h2>
          <div className="mb-6">
            <label className="block text-[#8592AD] mb-2">Enter an Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-lg bg-transparent h-16"
              placeholder="Enter amount"
              min="0"
              required
            />
          </div>
          <div className="mb-6">
            <p className="text-[#8592AD] font-medium mb-4">Select Source of Funds</p>
            <div className="flex justify-between">
              <div
                className="w-1/3 h-24 flex justify-center items-center border border-2 border-[#F3F7FA] rounded-lg cursor-pointer hover:bg-gray-500"
                onClick={() => setIsCardModalOpen(true)}
              >
                <p>Add Card</p>
              </div>
              <div
                className="w-1/3 h-24 flex justify-center items-center border border-2 border-[#F3F7FA] rounded-lg cursor-pointer hover:bg-gray-500"
                onClick={() => setIsWalletModalOpen(true)}
              >
                <p>Connect Wallet</p>
              </div>
            </div>
          </div>
          <button
            className="w-full bg-[#317BA0] text-white py-2 rounded-lg hover:bg-blue-600"
            onClick={handleAddFunds}
          >
            Add Funds
          </button>
        </div>
      </Modal>

      {/* Card Modal */}
      <Modal isOpen={isCardModalOpen} onClose={() => setIsCardModalOpen(false)}>
        <CardForm onVerify={handleVerifyCard} onClose={() => setIsCardModalOpen(false)} />
      </Modal>

      {/* Wallet Modal */}
      <Modal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)}>
        <WalletForm onConnect={handleConnectWallet} onClose={() => setIsWalletModalOpen(false)} />
      </Modal>
    </>
  );
};

export default AddFundsForm;
