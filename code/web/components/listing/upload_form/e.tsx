import React from 'react';
import SelectField from './components/SelectField';

interface PageFiveProps {
  formData: {
    homeSize: string;
    houseAge: string;
    needsRepair: string;
    kitchenSize: string;
    bathroomSize: string;
    balconyType: string;
    storageSpaces: string[];
    windowCount?: Record<string, number>;
    crossVentilation: boolean;
    parking: string;
  };
  handleChangeInput: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const PageFive: React.FC<PageFiveProps> = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#8592AD]">Property Details</h1>
        <div className="text-sm text-gray-500">Step 5 of 7</div>
      </div>

      <p className="text-gray-600">Tell us about the property features and condition</p>

      <div className="space-y-4">
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Size & Age</h2>
          
          <SelectField
            label="Home Size"
            name="homeSize"
            value={formData.homeSize}
            options={[
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'spacious', label: 'Spacious' },
              { value: 'very-spacious', label: 'Unusually Spacious' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select home size"
          />

          <SelectField
            label="House Age"
            name="houseAge"
            value={formData.houseAge}
            options={[
              { value: 'new', label: 'Newly Built' },
              { value: '1-3', label: '1-3 Years' },
              { value: '4-7', label: '4-7 Years' },
              { value: '7-15', label: '7-15 Years' },
              { value: 'very-old', label: 'Very Old' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select house age"
          />

          <SelectField
            label="Need Repair?"
            name="needsRepair"
            value={formData.needsRepair}
            options={[
              { value: 'none', label: 'Needs No Repair' },
              { value: 'little', label: 'Little Repair' },
              { value: 'medium', label: 'Medium Repair' },
              { value: 'major', label: 'Major Repair' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select repair needs"
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Room Details</h2>
          
          <SelectField
            label="Kitchen Size"
            name="kitchenSize"
            value={formData.kitchenSize}
            options={[
              { value: 'small', label: 'Small Kitchen' },
              { value: 'medium', label: 'Medium Kitchen' },
              { value: 'large', label: 'Large Kitchen' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select kitchen size"
          />

          <SelectField
            label="Bathroom Size"
            name="bathroomSize"
            value={formData.bathroomSize}
            options={[
              { value: 'small', label: 'Small Bathroom' },
              { value: 'medium', label: 'Medium Bathroom' },
              { value: 'large', label: 'Big Bathroom' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select bathroom size"
          />

          <SelectField
            label="Balcony"
            name="balconyType"
            value={formData.balconyType}
            options={[
              { value: 'none', label: 'No Balcony' },
              { value: 'small', label: 'Small Balcony' },
              { value: 'normal', label: 'Normal Balcony' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select balcony type"
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Storage & Ventilation</h2>
          
          <div className="space-y-3">
            <label className="text-[#8592AD] block">Storage Spaces</label>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Built-in Wardrobes',
                'Store Room',
                'External Storage',
                'Kitchen Cabinets'
              ].map((storage) => (
                <label key={storage} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="storageSpaces"
                    value={storage.toLowerCase().replace(/\s+/g, '-')}
                    checked={formData.storageSpaces.includes(
                      storage.toLowerCase().replace(/\s+/g, '-')
                    )}
                    onChange={handleChangeInput}
                    className="rounded border-gray-300 text-[#317BA0] focus:ring-[#317BA0]"
                  />
                  <span className="text-gray-700">{storage}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[#8592AD] block">Cross Ventilation</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="crossVentilation"
                  checked={formData.crossVentilation}
                  onChange={handleChangeInput}
                  className="rounded border-gray-300 text-[#317BA0] focus:ring-[#317BA0]"
                />
                <span className="text-gray-700">Available</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Parking</h2>
          
          <SelectField
            label="Parking Situation"
            name="parking"
            value={formData.parking}
            options={[
              { value: 'gated', label: 'Gated Car Parking' },
              { value: 'street', label: 'Street Car Parking' },
              { value: 'none', label: 'No Car Parking' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select parking situation"
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

export default PageFive;