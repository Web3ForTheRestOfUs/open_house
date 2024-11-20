const ConfirmTokenRewardCard = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="bg-white rounded-2xl shadow-md p-10 w-[576px]">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          SUBMISSION SUCCESSFUL
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Your submission has been received and is being reviewed.
        </p>
        <div className="flex justify-center mt-10">
          <div className="relative">
            <div className="w-48 h-48 bg-[#e5fbeb] rounded-full"></div>
            <div className="absolute w-36 h-36 bg-[#157d2c] rounded-full top-6 left-6 flex justify-center items-center">
              <img src="/green_checkmark.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg font-bold text-gray-900">TOKENS EARNED: +10</p>
          <p className="text-sm text-gray-600 mt-1">
            Tokens will be added to your wallet upon approval.
          </p>
        </div>
        <div className="mt-10">
          <button className="w-full bg-[#317ba0] text-white py-3 rounded-lg hover:bg-[#255e78]">
            Track Submission
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTokenRewardCard;
