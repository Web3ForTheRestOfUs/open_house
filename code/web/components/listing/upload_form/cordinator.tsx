// 'use client';
// import React, { useEffect, useState } from 'react';
// import PageOne from './a';
// import PageTwo from './b';
// import PageThree from './c';
// import PageFour from './d';
// import PageFive from './e';
// import PageSix from './f';
// import PageSeven from './g';

// interface FormData {
//   // Page 1: Basic Information
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   whatsappNumber?: string;
//   gender: string;

//   // Page 2: Location & Property Type
//   address: string;
//   houseType: string;
//   buildingType: string;
//   floorLevel?: number;
//   compoundType: string;

//   // Page 3: Rent & Financial Details
//   yearlyRent: string;
//   serviceCharge?: string;
//   agreementFee?: string;
//   agencyFee?: string;
//   cautionDeposit?: string;
//   rentPaymentFrequency: string;
//   expiryMonth: string;
//   intentToLeave: string;

//   // Page 4: Utilities & Infrastructure
//   lightSituation: string;
//   meterSituation: string;
//   waterSituation: string;
//   generatorType: string;
//   generatorFuelPolicy: string;
//   internetFiber: string;
//   internetTelcos: string;
//   airConditioningStatus: string;

//   // Page 5: Property Features & Condition
//   homeSize: string;
//   houseAge: string;
//   needsRepair: string;
//   kitchenSize: string;
//   bathroomSize: string;
//   balconyType: string;
//   storageSpaces: string[];
//   windowCount?: Record<string, number>;
//   crossVentilation: boolean;
//   parking: string;

//   // Page 6: Environment & Community
//   accessibility: string;
//   mainRoadAccess: string;
//   nearestBusStop: string;
//   security: string;
//   flooding: string;
//   noiseSituation: string;
//   neighborDemographics: string;
//   landlordWahala: string;
//   sharedStatus: string;
//   distanceToLocations: {
//     market: number;
//     hospital: number;
//     policeStation: number;
//     majorRoad: number;
//   };

//   // Page 7: Media & Additional Information
//   images: {
//     exterior: File[];
//     livingRoom: File[];
//     kitchen: File[];
//     bathroom: File[];
//     bedroom: File[];
//     balcony?: File[];
//     compound?: File[];
//     streetView?: File[];
//   };
//   videoTour?: File;
//   comments: string;
//   agreeToTerms: boolean;
// }

// interface MultiPageFormProps {
//   showStepNumber?: boolean;
// }

// type FormInputElement =
//   | HTMLInputElement
//   | HTMLSelectElement
//   | HTMLTextAreaElement;
// type FormChangeEvent = React.ChangeEvent<FormInputElement>;

// const initialFormData: FormData = {
//   // Page 1
//   firstName: '',
//   lastName: '',
//   email: '',
//   phone: '',
//   whatsappNumber: '',
//   gender: '',

//   // Page 2
//   address: '',
//   houseType: '',
//   buildingType: '',
//   floorLevel: undefined,
//   compoundType: '',

//   // Page 3
//   yearlyRent: '',
//   serviceCharge: '',
//   agreementFee: '',
//   agencyFee: '',
//   cautionDeposit: '',
//   rentPaymentFrequency: '',
//   expiryMonth: '',
//   intentToLeave: '',

//   // Page 4
//   lightSituation: '',
//   meterSituation: '',
//   waterSituation: '',
//   generatorType: '',
//   generatorFuelPolicy: '',
//   internetFiber: '',
//   internetTelcos: '',
//   airConditioningStatus: '',

//   // Page 5
//   homeSize: '',
//   houseAge: '',
//   needsRepair: '',
//   kitchenSize: '',
//   bathroomSize: '',
//   balconyType: '',
//   storageSpaces: [],
//   windowCount: {},
//   crossVentilation: false,
//   parking: '',

//   // Page 6
//   accessibility: '',
//   mainRoadAccess: '',
//   nearestBusStop: '',
//   security: '',
//   flooding: '',
//   noiseSituation: '',
//   neighborDemographics: '',
//   landlordWahala: '',
//   sharedStatus: '',
//   distanceToLocations: {
//     market: 0,
//     hospital: 0,
//     policeStation: 0,
//     majorRoad: 0,
//   },

//   // Page 7
//   images: {
//     exterior: [],
//     livingRoom: [],
//     kitchen: [],
//     bathroom: [],
//     bedroom: [],
//     balcony: [],
//     compound: [],
//     streetView: [],
//   },
//   videoTour: undefined,
//   comments: '',
//   agreeToTerms: false,
// };

// const pages = [
//   'Basic Information',
//   'Location & Property',
//   'Financial Details',
//   'Utilities',
//   'Property Features',
//   'Environment',
//   'Media & Submit',
// ];

// const MultiPageForm: React.FC<MultiPageFormProps> = ({
//   showStepNumber = true,
// }) => {
//   const [pageIndex, setPageIndex] = useState<number>(0);
//   const [formData, setFormData] = useState<FormData>(initialFormData);

//   const handleNextPage = () =>
//     setPageIndex((prev) => Math.min(prev + 1, pages.length - 1));

//   const handlePrevPage = () => setPageIndex((prev) => Math.max(prev - 1, 0));

//   //   const handleChangeInput = (event: FormChangeEvent) => {
//   //     const target = event.target;
//   //     const name = target.name;
//   //     const isCheckbox = target instanceof HTMLInputElement && target.type === 'checkbox';
//   //     const isNumber = target instanceof HTMLInputElement && target.type === 'number';

//   //     // Handle storage spaces array
//   //     if (name === 'storageSpaces' && isCheckbox) {
//   //       const value = (target as HTMLInputElement).value;
//   //       setFormData((prev) => ({
//   //         ...prev,
//   //         storageSpaces: target.checked
//   //           ? [...prev.storageSpaces, value]
//   //           : prev.storageSpaces.filter((item) => item !== value),
//   //       }));
//   //       return;
//   //     }

//   //     // Handle nested object (distanceToLocations)
//   //     if (name.includes('.')) {
//   //       const [parent, child] = name.split('.');
//   //       setFormData((prev) => ({
//   //         ...prev,
//   //         [parent]: {
//   //           ...prev[parent as keyof FormData],
//   //           [child]: isNumber ? Number(target.value) : target.value,
//   //         },
//   //       }));
//   //       return;
//   //     }

//   //     // Handle regular inputs
//   //     setFormData((prev) => ({
//   //       ...prev,
//   //       [name]: isCheckbox
//   //         ? (target as HTMLInputElement).checked
//   //         : isNumber
//   //         ? Number(target.value)
//   //         : target.value,
//   //     }));
//   //   };

//   const handleChangeInput = (event: FormChangeEvent) => {
//     const target = event.target;
//     const name = target.name;
//     const isCheckbox =
//       target instanceof HTMLInputElement && target.type === 'checkbox';
//     const isNumber =
//       target instanceof HTMLInputElement && target.type === 'number';

//     // Handle storage spaces array
//     if (name === 'storageSpaces' && isCheckbox) {
//       const value = (target as HTMLInputElement).value;
//       setFormData((prev) => ({
//         ...prev,
//         storageSpaces: target.checked
//           ? [...prev.storageSpaces, value]
//           : prev.storageSpaces.filter((item) => item !== value),
//       }));
//       return;
//     }

//     // Handle nested object (distanceToLocations)
//     if (name.includes('.')) {
//       const [parent, child] = name.split('.');
//       if (parent === 'distanceToLocations') {
//         setFormData((prev) => ({
//           ...prev,
//           distanceToLocations: {
//             ...prev.distanceToLocations,
//             [child]: isNumber ? Number(target.value) : target.value,
//           },
//         }));
//         return;
//       }
//     }

//     // Handle regular inputs
//     setFormData((prev) => ({
//       ...prev,
//       [name]: isCheckbox
//         ? (target as HTMLInputElement).checked
//         : isNumber
//         ? Number(target.value)
//         : target.value,
//     }));
//   };

//   const handleImageUpload = (
//     category: keyof FormData['images'],
//     files: FileList
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       images: {
//         ...prev.images,
//         [category]: [...(prev.images[category] || []), ...Array.from(files)],
//       },
//     }));
//   };

//   const handleVideoUpload = (file: File) => {
//     setFormData((prev) => ({
//       ...prev,
//       videoTour: file,
//     }));
//   };

//   //   const handleImageRemove = (
//   //     category: keyof FormData['images'],
//   //     index: number
//   //   ) => {
//   //     setFormData((prev) => ({
//   //       ...prev,
//   //       images: {
//   //         ...prev.images,
//   //         [category]: prev.images[category].filter((_, i) => i !== index),
//   //       },
//   //     }));
//   //   };

//   //   const handleImageRemove = (
//   //     category: keyof FormData['images'],
//   //     index: number
//   //   ) => {
//   //     setFormData((prev) => ({
//   //       ...prev,
//   //       images: {
//   //         ...prev.images,
//   //         [category]: prev.images[category]
//   //           ? prev.images[category]!.filter((_, i) => i !== index)
//   //           : [],
//   //       },
//   //     }));
//   //   };

//   const handleImageRemove = (
//     category: keyof FormData['images'],
//     index: number
//   ) => {
//     setFormData((prev) => {
//       const currentImages = prev.images[category] || [];
//       return {
//         ...prev,
//         images: {
//           ...prev.images,
//           [category]: currentImages.filter((_, i) => i !== index),
//         },
//       };
//     });
//   };

//   const handleVideoRemove = () => {
//     setFormData((prev) => ({
//       ...prev,
//       videoTour: undefined,
//     }));
//   };

//   const handleSubmit = async () => {
//     if (!formData.agreeToTerms) {
//       alert('You must agree to the Terms of Service');
//       return;
//     }

//     try {
//       // TODO: Implement your submission logic here
//       console.log('Form submitted:', formData);
//       handleNextPage();
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('An error occurred while submitting the form');
//     }
//   };

//   const renderPage = () => {
//     const props = {
//       formData,
//       handleChangeInput,
//       handlePrevStep: handlePrevPage,
//       handleNextStep: handleNextPage,
//     };

//     switch (pageIndex) {
//       case 0:
//         return <PageOne {...props} />;
//       case 1:
//         return <PageTwo {...props} />;
//       case 2:
//         return <PageThree {...props} />;
//       case 3:
//         return <PageFour {...props} />;
//       case 4:
//         return <PageFive {...props} />;
//       case 5:
//         return <PageSix {...props} />;
//       case 6:
//         return (
//           <PageSeven
//             handleSubmit2={function (
//               category:
//                 | 'exterior'
//                 | 'livingRoom'
//                 | 'kitchen'
//                 | 'bathroom'
//                 | 'bedroom'
//                 | 'balcony'
//                 | 'compound'
//                 | 'streetView',
//               files: FileList
//             ): void {
//               throw new Error('Function not implemented.');
//             }}
//             {...props}
//             handleImageUpload={handleImageUpload}
//             handleVideoUpload={handleVideoUpload}
//             handleImageRemove={handleImageRemove}
//             handleVideoRemove={handleVideoRemove}
//             handleSubmit={handleSubmit}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   const renderProgress = () => {
//     if (!showStepNumber) return null;

//     return (
//       <section className="mt-2 mb-6">
//         <div className="flex justify-between mb-2">
//           {pages.map((page, index) => (
//             <div
//               key={page}
//               className={`w-10 h-10 flex justify-center items-center border-2 
//                 ${
//                   index === pageIndex
//                     ? 'border-[#317BA0] bg-[#317BA0] text-white'
//                     : index < pageIndex
//                     ? 'border-[#317BA0] bg-white text-[#317BA0]'
//                     : 'border-gray-300 bg-white text-gray-300'
//                 } rounded-full cursor-pointer transition-colors`}
//               onClick={() => setPageIndex(index)}
//               aria-label={`Page ${index + 1}: ${page}`}
//             >
//               {index + 1}
//             </div>
//           ))}
//         </div>
//         <div className="h-2 bg-gray-200 rounded-full">
//           <div
//             className="h-full bg-[#317BA0] rounded-full transition-all"
//             style={{ width: `${((pageIndex + 1) / pages.length) * 100}%` }}
//           />
//         </div>
//       </section>
//     );
//   };

//   useEffect(() => {
//     console.log('Form data updated:', formData);
//   }, [formData]);

//   return (
//     <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
//       {renderProgress()}
//       {renderPage()}
//     </div>
//   );
// };

// export default MultiPageForm;



'use client';

import { useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useCounterProgram, useCounterProgramAccount } from './upload_form_data_access';
import { useWallet } from '@solana/wallet-adapter-react';

interface Location {
  lat: number; // Latitude
  long: number; // Longitude
}

enum ListingStatus {
  Active = 'Active',
  Sold = 'Inactive',
  Deleted = 'Deleted',
}

export default function ListingsUI() {
  return (
    <div className="space-y-8">
      <CreateListing />
      <Listings />
    </div>
  );
}

// Create Listing Component
function CreateListing() {
  const { createListing } = useCounterProgram();
  const { publicKey } = useWallet();

  const [location, setLocation] = useState<Location>({lat: 37.7749, long: -122.4194 });
  const [status, setStatus] = useState<ListingStatus | ''>('');
  const isFormValid = location.lat !== 0 && location.long !== 0 && status !== '';

  const handleSubmit = () => {
    if (publicKey && isFormValid) {
      const now = Date.now();
      
      createListing.mutateAsync({
        location:location,
        creator: publicKey,
        created: now,
        updated: now,
        status: status as ListingStatus,
      });
    }
  };

  if (!publicKey) {
    return <p>Connect your wallet to create a listing.</p>;
  }

  return (
    <div className="space-y-4 flex flex-col">
      <input
        type="number"
        placeholder="Latitude"
        value={location.lat}
        onChange={(e) => setLocation({ ...location, lat: parseFloat(e.target.value) })}
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="number"
        placeholder="Longitude"
        value={location.long}
        onChange={(e) => setLocation({ ...location, long: parseFloat(e.target.value) })}
        className="input input-bordered w-full max-w-xs"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as ListingStatus)}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="" disabled>
          Select Status
        </option>
        {Object.values(ListingStatus).map((statusOption) => (
          <option key={statusOption} value={statusOption}>
            {statusOption}
          </option>
        ))}
      </select>
      <button
        onClick={handleSubmit}
        disabled={!isFormValid || createListing.isPending}
        className="btn btn-primary w-full max-w-xs"
      >
        Create Listing
      </button>
    </div>
  );
}


// Listings Component
function Listings() {
  const { accounts, getProgramAccount } = useCounterProgram();

  if (getProgramAccount.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (!getProgramAccount.data?.value) {
    return (
      <div className="alert alert-info">
        <span>Program account not found. Make sure you are on the correct cluster.</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {accounts.isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : accounts.data?.length ? (
        <div className="grid md:grid-cols-2 gap-4">
          {accounts.data.map((account:any) => (
            <ListingCard key={account.publicKey.toString()} account={account.publicKey} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl">No listings</h2>
          Create a listing above to get started.
        </div>
      )}
    </div>
  );
}

// Listing Card Component
function ListingCard({ account }: { account: PublicKey }) {
  const { accountQuery, updateListing } = useCounterProgramAccount({ account });
  const { publicKey } = useWallet();

  const [newLocation, setNewLocation] = useState({ lat: 0, lng: 0 });
  const [newStatus, setNewStatus] = useState('');
  const isFormValid = newLocation.lat !== 0 && newLocation.lng !== 0 && newStatus.trim() !== '';

  const handleUpdate = () => {
    if (publicKey && isFormValid) {
      updateListing.mutateAsync({
        new_location: newLocation,
        new_status: newStatus,
      });
    }
  };

  if (!accountQuery.data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card card-bordered border-base-300 border-4 text-neutral-content">
      <div className="card-body text-center">
        <h2 className="card-title">{`Location: (${accountQuery.data.location.lat}, ${accountQuery.data.location.lng})`}</h2>
        <p>{`Status: ${accountQuery.data.status}`}</p>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="New Latitude"
            value={newLocation.lat}
            onChange={(e) => setNewLocation({ ...newLocation, lat: parseFloat(e.target.value) })}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="New Longitude"
            value={newLocation.lng}
            onChange={(e) => setNewLocation({ ...newLocation, lng: parseFloat(e.target.value) })}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="New Status"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <button
            onClick={handleUpdate}
            disabled={!isFormValid || updateListing.isPending}
            className="btn btn-primary"
          >
            Update Listing
          </button>
        </div>
      </div>
    </div>
  );
}
