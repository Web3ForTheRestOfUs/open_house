import React from 'react';
import SelectField from './components/SelectField';

interface PageFourProps {
  formData: {
    lightSituation: string;
    meterSituation: string;
    waterSituation: string;
    generatorType: string;
    generatorFuelPolicy: string;
    internetFiber: string;
    internetTelcos: string;
    airConditioningStatus: string;
  };
  handleChangeInput: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const PageFour: React.FC<PageFourProps> = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#8592AD]">Essential Services</h1>
        <div className="text-sm text-gray-500">Step 4 of 7</div>
      </div>

      <p className="text-gray-600">Tell us about the utilities and infrastructure</p>

      <div className="space-y-4">
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Power Supply</h2>
          
          <SelectField
            label="Light Situation"
            name="lightSituation"
            value={formData.lightSituation}
            options={[
              { value: '24-7', label: '24/7' },
              { value: 'band-a', label: 'Band A' },
              { value: 'band-b', label: 'Band B' },
              { value: 'band-c', label: 'Band C' },
              { value: 'band-d', label: 'Band D' },
              { value: 'unsure', label: 'Unsure' },
              { value: 'bad-light', label: 'Bad Light' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select power supply situation"
          />

          <SelectField
            label="Meter Situation"
            name="meterSituation"
            value={formData.meterSituation}
            options={[
              { value: 'personal', label: 'Personal Meter' },
              { value: 'shared', label: 'Shared Meter' },
              { value: 'postpaid', label: 'No Meter (Postpaid)' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select meter type"
          />

          <SelectField
            label="Generator Situation"
            name="generatorType"
            value={formData.generatorType}
            options={[
              { value: 'none', label: 'No Generator' },
              { value: 'personal', label: 'Personal Generator Allowed' },
              { value: 'shared', label: 'Shared Generator' },
              { value: 'estate', label: 'Estate/Building Generator' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select generator situation"
          />

          {formData.generatorType !== 'none' && (
            <SelectField
              label="Generator Fuel Policy"
              name="generatorFuelPolicy"
              value={formData.generatorFuelPolicy}
              options={[
                { value: 'individual', label: 'Individual Purchase' },
                { value: 'shared', label: 'Shared Cost' },
                { value: 'included', label: 'Included in Rent' }
              ]}
              onChange={handleChangeInput}
              required
              placeholder="Select fuel policy"
            />
          )}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Water Supply</h2>
          
          <SelectField
            label="Water Situation"
            name="waterSituation"
            value={formData.waterSituation}
            options={[
              { value: 'steady', label: 'Steady Running Water' },
              { value: 'not-running', label: 'Water But Not Running' },
              { value: 'no-water', label: 'No Water' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select water situation"
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Internet & Connectivity</h2>
          
          <SelectField
            label="Fiber Optic Access"
            name="internetFiber"
            value={formData.internetFiber}
            options={[
              { value: 'available', label: 'Fiber Optic Access' },
              { value: 'not-available', label: 'No Fiber Optic Access' },
              { value: 'unsure', label: 'Unsure' }
            ]}
            onChange={handleChangeInput}
            placeholder="Select fiber internet availability"
          />

          <SelectField
            label="Telcos Network Quality"
            name="internetTelcos"
            value={formData.internetTelcos}
            options={[
              { value: 'good', label: 'Major Telcos Good' },
              { value: 'decent', label: 'Major Telcos Decent' },
              { value: 'bad', label: 'Major Telcos Bad' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select network quality"
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Air Conditioning</h2>
          
          <SelectField
            label="AC Status"
            name="airConditioningStatus"
            value={formData.airConditioningStatus}
            options={[
              { value: 'pre-installed', label: 'Pre-installed' },
              { value: 'allowed', label: 'Installation Allowed' },
              { value: 'not-allowed', label: 'Not Allowed' },
              { value: 'specific-rooms', label: 'Specific Rooms Only' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select AC situation"
          />
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          className="w-[45%] rounded-lg bg-[#F3F7FA] hover:bg-[#317BA0] py-5 text-[#317BA0] hover:text-white font-medium transition-colors"
          onClick={handlePrevStep}
        >
          Previous
        </button>
        <button
          className="w-[45%] rounded-lg bg-[#F3F7FA] hover:bg-[#317BA0] py-5 text-[#317BA0] hover:text-white font-medium transition-colors"
          onClick={handleNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PageFour;