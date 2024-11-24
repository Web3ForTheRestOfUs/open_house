import React from 'react';
import SelectField from './components/SelectField';

interface PageSixProps {
  formData: {
    accessibility: string;
    mainRoadAccess: string;
    nearestBusStop: string;
    security: string;
    flooding: string;
    noiseSituation: string;
    neighborDemographics: string;
    landlordWahala: string;
    sharedStatus: string;
    distanceToLocations: {
      market: number;
      hospital: number;
      policeStation: number;
      majorRoad: number;
    };
  };
  handleChangeInput: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const PageSix: React.FC<PageSixProps> = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#8592AD]">Neighborhood & Environment</h1>
        <div className="text-sm text-gray-500">Step 6 of 7</div>
      </div>

      <p className="text-gray-600">Tell us about the surrounding area and community</p>

      <div className="space-y-4">
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Access & Location</h2>
          
          <SelectField
            label="Accessibility"
            name="accessibility"
            value={formData.accessibility}
            options={[
              { value: 'car-accessible', label: 'Accessible by Car' },
              { value: 'not-car-accessible', label: 'Not Accessible by Car' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select accessibility"
          />

          <SelectField
            label="Main Road Access"
            name="mainRoadAccess"
            value={formData.mainRoadAccess}
            options={[
              { value: 'nearby', label: 'Main Road Nearby' },
              { value: '3-5mins', label: '3-5mins drive to mainroad' },
              { value: '6-10mins', label: '6-10mins drive to mainroad' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select main road access"
          />

          <div className="mb-8">
            <label className="text-[#8592AD] block mb-2">Nearest Bus Stop*</label>
            <input
              type="text"
              name="nearestBusStop"
              value={formData.nearestBusStop}
              onChange={handleChangeInput}
              required
              className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
              placeholder="Enter nearest bus stop name"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-[#8592AD] font-medium">Distance to Key Locations (in minutes)</h3>
            {Object.entries({
              market: 'Nearest Market/Shopping Center',
              hospital: 'Hospital',
              policeStation: 'Police Station',
              majorRoad: 'Major Road Junction'
            }).map(([key, label]) => (
              <div key={key} className="mb-4">
                <label className="text-[#8592AD] block mb-2">{label}</label>
                <input
                  type="number"
                  name={`distanceToLocations.${key}`}
                  value={formData.distanceToLocations[key as keyof typeof formData.distanceToLocations]}
                  onChange={handleChangeInput}
                  min="0"
                  max="120"
                  className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
                  placeholder="Enter time in minutes"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Security & Safety</h2>
          
          <SelectField
            label="Security"
            name="security"
            value={formData.security}
            options={[
              { value: 'gate', label: 'Gate Security' },
              { value: 'estate', label: 'Estate Security' },
              { value: 'no-security', label: 'No Security but Secure' },
              { value: 'unsure', label: 'Unsure' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select security situation"
          />

          <SelectField
            label="Flooding Risk"
            name="flooding"
            value={formData.flooding}
            options={[
              { value: 'none', label: 'No Flooding' },
              { value: 'road', label: 'Road Water if Rain' },
              { value: 'low', label: 'Low Flooding if Rain' },
              { value: 'high', label: 'Flooding if Rain' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select flooding situation"
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Neighborhood Characteristics</h2>
          
          <SelectField
            label="Noise Situation"
            name="noiseSituation"
            value={formData.noiseSituation}
            options={[
              { value: 'quiet', label: 'Little to No Noise' },
              { value: 'medium', label: 'Medium Noise' },
              { value: 'religious', label: 'Nearby Church / Mosque' },
              { value: 'busy', label: 'Nearby Busy Place' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select noise level"
          />

          <SelectField
            label="Neighbor Demographics"
            name="neighborDemographics"
            value={formData.neighborDemographics}
            options={[
              { value: 'working', label: 'Mostly Working Class' },
              { value: 'young', label: 'Mostly Young People' },
              { value: 'students', label: 'Mostly Students' },
              { value: 'unsure', label: 'Unsure' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select neighbor type"
          />

          <SelectField
            label="Landlord Wahala"
            name="landlordWahala"
            value={formData.landlordWahala}
            options={[
              { value: 'none', label: 'None' },
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select landlord interference level"
          />

          <SelectField
            label="Shared Property Status"
            name="sharedStatus"
            value={formData.sharedStatus}
            options={[
              { value: 'shared', label: 'Shared' },
              { value: 'not-shared', label: 'Not Shared' },
              { value: 'can-be-shared', label: 'Not Shared but can be Shared' }
            ]}
            onChange={handleChangeInput}
            required
            placeholder="Select sharing status"
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

export default PageSix;