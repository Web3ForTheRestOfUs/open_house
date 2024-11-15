const StepE = ({
    formData,
    handleChangeInput,
    handlePrevStep,
    handleSubmitFormData,
  }) => {
    return (
      <div>
        <h1 className='mt-2 text-xl font-bold text-blue-900'>
          Step E: Confirm Form Data
        </h1>
        <DataConfirmRow label='Address:' value={formData.address} />
        <DataConfirmRow label='City:' value={formData.city} />
        <DataConfirmRow label='Property Type:' value={formData.propertyType} />
        <DataConfirmRow label='Bedroom:' value={formData.bedroom} />
        <DataConfirmRow
          label='Bathroom:'
          value={formData.bathroom}
        />
        <DataConfirmRow
          label='Size:'
          value={formData.size}
        />
        <DataConfirmRow label='Amenities:' value={formData.amenities} />
        <DataConfirmRow
          label='Neighbourhood Quality:'
          value={formData.neighbourhoodQuality}
        />
        <DataConfirmRow label='Safety Rating:' value={formData.safetyRating} />
        <DataConfirmRow label='Proximity:' value={formData.proximity} />
        <DataConfirmRow label='Availability Status:' value={formData.availabilityStatus} />
        <DataConfirmRow label='Rent:' value={formData.rent} />
        <DataConfirmRow label='Deposit:' value={formData.deposit} />
        <DataConfirmRow label='Utilities:' value={formData.utilities} />
        <DataConfirmRow label='Service Charge:' value={formData.serviceCharge} />
  
        <div className='my-4 flex items-center'>
          <input
            type='checkbox'
            name='agreeToTerms'
            id='agreeToTerms'
            value={formData.agreeToTerms}
            onChange={(e) => handleChangeInput(e)}
            className='w-4 h-4 mr-2 accent-pink-300 focus:accent-pink-500'
          />
          <label htmlFor='agreeToTerms'>I Agree to Terms of Services</label>
        </div>
  
        <div className='my-2 flex w-[519px] justify-between items-center'>
          <button
            className='bg-[#F3F7FA] hover:bg-gray-500 py-[15px] rounded-[8px] w-2/5 text-[#317BA0] hover:text-white'
            onClick={handlePrevStep}
          >
            Prev
          </button>
          <button
            className='bg-[#F3F7FA] hover:bg-gray-500 py-[15px] rounded-[8px] w-2/5 text-[#317BA0] hover:text-white'
            onClick={handleSubmitFormData}
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default StepE;
  
  // A Seperate component to show data
  const DataConfirmRow = ({ label, value }) => {
    return (
      <div className='my-3 border border-dashed border-gray-200 p-1 rounded-lg'>
        <span className='mr-4 text-slate-500'>{label}</span>
        <span className='mr-4 text-slate-900'>{value}</span>
      </div>
    );
  };