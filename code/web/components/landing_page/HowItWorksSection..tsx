import React from 'react';

interface StepProps {
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ title, description }) => {
  return (
    <article className="mb-12">
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
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-semibold text-sky-700 font-['Montserrat'] text-center mb-16">
        How OpenHouse Works
      </h2>
      <div className="max-w-xs mx-auto">
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export { Step, HowItWorksSection };
