import React, { useRef, useState } from 'react';
import { Camera, Upload, X } from 'lucide-react';

interface PageSevenProps {
  formData: {
    images: {
      exterior: File[];
      livingRoom: File[];
      kitchen: File[];
      bathroom: File[];
      bedroom: File[];
      balcony?: File[];
      compound?: File[];
      streetView?: File[];
    };
    videoTour?: File;
    comments: string;
    agreeToTerms: boolean;
  };
  handleChangeInput: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  // handleImageUpload: (
  //   category: keyof typeof formData.images,
  //   files: FileList
  // ) => void;
  handleImageUpload: (
    category: keyof PageSevenProps['formData']['images'],
    files: FileList
  ) => void;
  handleVideoUpload: (file: File) => void;
  handleImageRemove: (
    category: keyof PageSevenProps['formData']['images'],
    index: number
  ) => void;
  // handleImageRemove: (
  //   category: keyof typeof formData.images,
  //   index: number
  // ) => void;
  handleVideoRemove: () => void;
  handlePrevStep: () => void;
  handleSubmit: () => void;
}

const PageSeven: React.FC<PageSevenProps> = ({
  formData,
  handleChangeInput,
  handleImageUpload,
  handleVideoUpload,
  handleImageRemove,
  handleVideoRemove,
  handlePrevStep,
  handleSubmit,
}) => {
  const [dragActive, setDragActive] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const requiredCategories = [
    'exterior',
    'livingRoom',
    'kitchen',
    'bathroom',
    'bedroom',
  ];
  const optionalCategories = ['balcony', 'compound', 'streetView'];

  const handleDrag = (e: React.DragEvent, category: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(category);
    } else if (e.type === 'dragleave') {
      setDragActive(null);
    }
  };

  const handleDrop = (
    e: React.DragEvent,
    category: keyof typeof formData.images
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(null);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageUpload(category, e.dataTransfer.files);
    }
  };

  const renderImageUploader = (
    category: keyof typeof formData.images,
    label: string,
    required = false
  ) => (
    <div className="mb-6">
      <label className="text-[#8592AD] block mb-2">
        {label} {required && '*'}
      </label>
      <div
        className={`border-2 border-dashed rounded-lg p-4 ${
          dragActive === category
            ? 'border-[#317BA0] bg-[#F3F7FA]'
            : 'border-[#E8F0FC]'
        }`}
        onDragEnter={(e) => handleDrag(e, category)}
        onDragLeave={(e) => handleDrag(e, category)}
        onDragOver={(e) => handleDrag(e, category)}
        onDrop={(e) => handleDrop(e, category)}
      >
        <div className="grid grid-cols-2 gap-4">
          {/* Image Preview Section */}
          <div className="space-y-2">
            {formData.images[category]?.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`${category} preview ${index + 1}`}
                  className="w-full h-24 object-cover rounded"
                />
                <button
                  onClick={() => handleImageRemove(category, index)}
                  className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Upload Section */}
          <div className="flex flex-col items-center justify-center p-4">
            <input
              type="file"
              id={`file-${category}`}
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                e.target.files && handleImageUpload(category, e.target.files)
              }
            />
            <label
              htmlFor={`file-${category}`}
              className="flex flex-col items-center cursor-pointer"
            >
              <Camera size={24} className="text-[#317BA0] mb-2" />
              <span className="text-sm text-center text-[#8592AD]">
                Drop images here or click to upload
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#8592AD]">
          Media & Additional Information
        </h1>
        <div className="text-sm text-gray-500">Step 7 of 7</div>
      </div>

      <p className="text-gray-600">
        Almost done! Add some visuals and final details
      </p>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="font-semibold text-[#8592AD] mb-4">Required Photos</h2>
          {requiredCategories.map((category) =>
            renderImageUploader(
              category as keyof typeof formData.images,
              category
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase()),
              true
            )
          )}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="font-semibold text-[#8592AD] mb-4">Optional Photos</h2>
          {optionalCategories.map((category) =>
            renderImageUploader(
              category as keyof typeof formData.images,
              category
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase())
            )
          )}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="font-semibold text-[#8592AD] mb-4">
            Video Tour (Optional)
          </h2>
          <div className="border-2 border-dashed rounded-lg p-4">
            <input
              type="file"
              accept="video/*"
              id="video-upload"
              className="hidden"
              onChange={(e) =>
                e.target.files?.[0] && handleVideoUpload(e.target.files[0])
              }
            />
            <label
              htmlFor="video-upload"
              className="flex flex-col items-center cursor-pointer"
            >
              <Upload size={24} className="text-[#317BA0] mb-2" />
              <span className="text-sm text-center text-[#8592AD]">
                Upload a video tour of your place
              </span>
            </label>
            {formData.videoTour && (
              <div className="mt-4 flex items-center justify-between bg-white p-2 rounded">
                <span className="text-sm text-[#8592AD]">
                  {formData.videoTour.name}
                </span>
                <button
                  onClick={handleVideoRemove}
                  className="p-1 text-red-500 hover:text-red-700"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="font-semibold text-[#8592AD] mb-4">
            Additional Comments
          </h2>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChangeInput}
            required
            className="w-full h-32 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent resize-none"
            placeholder="Share any additional information about your place..."
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChangeInput}
            required
            className="rounded border-[#E8F0FC] text-[#317BA0] focus:ring-[#317BA0]"
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the Terms & Conditions and Privacy Policy*
          </label>
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
          className="w-[45%] rounded-lg bg-[#317BA0] hover:bg-[#255d7a] py-5 text-white font-medium transition-colors"
          onClick={handleSubmit}
        >
          Submit Listing
        </button>
      </div>
    </div>
  );
};

export default PageSeven;
