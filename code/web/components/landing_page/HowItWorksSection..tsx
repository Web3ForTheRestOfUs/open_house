import React from 'react';
import Image from 'next/image';


interface StepProps {
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ title, description }) => {
  return (
    <article className="mb-12 border-b-4 border-dashed border-[#DADEE7] pb-6">
      <h3 className="text-2xl font-semibold text-black font-['Montserrat'] mb-4">
        {title}
      </h3>
      <p className="text-xl text-black font-['Montserrat']">{description}</p>

    </article>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps: StepProps[] = [
    {
      title: 'Sign Up',
      description:
        'Create your account in minutes and start exploring the OpenHouse platform',
    },
    {
      title: 'Browse Properties',
      description:
        'Search for your ideal home using advance filters, map views, and virtual tours.',
    },
    {
      title: 'Save Towards Rent',
      description:
        'Love a property but short on funds? Use our auto-save feature to start saving for your dream home, with options to add funds',
    },
    {
      title: 'Move In',
      description:
        'Finalize your rental agreement directly with the landlord and enjoy your new home',
    },
    {
      title: 'Earn Tokens',
      description:
        'Contribute to the community by documenting properties, and writing reviews to earn token rewards',
    },
  ];

  return (
    <section className="container mx-auto px-16 py-20">
      <h2 className="text-3xl font-semibold text-sky-700 font-['Montserrat'] text-center mb-16">
        How OpenHouse Works
      </h2>
      <div className='flex items-center'>
        <div className='flex w-1/3 mr-48 items-center'>
          <div className="bg-[#F6F6F6] h-[1000px] border-l-4 border-dashed border-[#DADEE7] mr-11"></div>

          <div className="">
            {steps.map((step, index) => (
              <div>
                <Step key={index} {...step} />
              </div>
            ))}
          </div>
        </div>

        <div className='w-2/3'>
          <div className='flex w-full'>
            <div className="bg-white w-[144.5px] relative h-[364px]">
              <Image
                src="/arrowLeft.svg"
                alt="Welcome Image"
                layout="fill"
                objectFit="cover" 
                className="absolute rounded-lg" 
              />
            </div>

            <div className='bg-white w-4/5 h-[364px] relative'>
                <Image
                    src="/livingRoom.jpg" 
                    alt="Living Room"
                    layout="fill"
                    objectFit="cover" 
                    className="absolute" 
                />
            </div>

            


          </div>

          <div className='flex w-full'>
            <div className='flex w-full'>
              <div className='bg-white w-4/5 h-[364px] relative'>
                <Image
                  src="/diningRoom.jpg" 
                  alt="Dining Room"
                  layout="fill"
                  objectFit="cover" 
                  className="absolute" 
                />
              </div>
              <div className="bg-white w-[144.5px] relative h-[364px]">
                <Image
                  src="/arrowRight.svg"
                  alt="Welcome Image"
                  layout="fill"
                  objectFit="cover" 
                  className="absolute rounded-lg" 
                />
              </div>

              
            </div>
          </div>
        </div>

            
      </div>
      
    </section>
  );
};

export { Step, HowItWorksSection };
