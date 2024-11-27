export interface FAQ {
    question: string;
    answers: string[]; // Change `answer` to `answers`, which is an array of strings
  }
  
  export interface FAQSection {
    id: string;
    label: string;
    faqs: FAQ[];
  }
  
  export const sections: FAQSection[] = [
    {
      id: 'general',
      label: 'General',
      faqs: [
        {
          question: 'What is OpenHouse?',
          answers: [
            'OpenHouse is a decentralized platform that revolutionizes home rentals by connecting tenants directly with property owners.',
            'It leverages community participation for property verification and reviews.',
          ],
        },
        {
          question: 'How does OpenHouse work?',
          answers: [
            'Our platform uses blockchain technology to create a transparent, trustworthy rental marketplace.',
            'Community members ("Scouts") document properties, verify information, and provide reviews.',
            'Tenants can browse listings, access verified information, and connect with property owners directly.',
          ],
        },
        {
          question: 'Who can use OpenHouse?',
          answers: [
            'Anyone looking to rent a property or list their property for rent can use OpenHouse.',
            'This includes tenants, property owners, and community members who want to participate as Scouts.',
          ],
        },
        {
          question: 'What are Scouts?',
          answers: [
            'Scouts are community members who earn tokens by contributing to the platform.',
            'They help maintain the quality and accuracy of listings through property documentation, verification, and reviews.',
          ],
        },
      ],
    },
    {
      id: 'tokens',
      label: 'Token System',
      faqs: [
        {
          question: 'How do I earn tokens?',
          answers: [
            'Submit verified property listings.',
            'Provide detailed property reviews after viewings.',
            'Contribute to neighborhood guides.',
            'Verify other users’ submissions.',
            'Participate in community governance.',
          ],
        },
        {
          question: 'What can I do with tokens?',
          answers: [
            'Access premium property listings.',
            'Get priority viewing appointments.',
            'Receive discounts on platform fees.',
            'Participate in platform governance.',
            'Trade on supported exchanges.',
          ],
        },
      ],
    },
    {
      id: 'listing',
      label: 'Property Listings',
      faqs: [
        {
          question: 'How are properties verified?',
          answers: [
            'Properties undergo a multi-step verification process:',
            '1. Initial documentation by Scouts.',
            '2. Photo and document verification.',
            '3. Community review period.',
            '4. Blockchain-based verification system.',
          ],
        },
        {
          question: 'What information is included in listings?',
          answers: [
            'High-quality photos and virtual tours.',
            'Detailed property specifications.',
            'Neighborhood information.',
            'Previous tenant reviews.',
            'Pricing and availability.',
            'Property owner verification status.',
          ],
        },
      ],
    },
    {
      id: 'security',
      label: 'Safety & Security',
      faqs: [
        {
          question: 'How do you protect users?',
          answers: [
            'Identity verification for all users.',
            'Secure blockchain-based transactions.',
            'Encrypted communication channels.',
            'Community reporting system.',
            'Dispute resolution process.',
          ],
        },
        {
          question: 'How are reviews kept honest?',
          answers: [
            'Only verified viewers and tenants can submit reviews.',
            'All reviews are permanently recorded on the blockchain, preventing manipulation.',
          ],
        },
        {
          question: 'What if I encounter a problem?',
          answers: [
            'Our support team is available 24/7.',
            'We have a comprehensive dispute resolution system in place.',
            'All transactions are recorded on the blockchain for transparency and security.',
          ],
        },
      ],
    },
    {
      id: 'support',
      label: 'Technical Support',
      faqs: [
        {
          question: 'What devices can I use to access OpenHouse?',
          answers: [
            'OpenHouse is available through:',
            '- Web browsers (desktop and mobile).',
            '- iOS app.',
            '- Android app.',
            '- Web3 wallet integration.',
          ],
        },
        {
          question: 'How do I get started?',
          answers: [
            '1. Create an account.',
            '2. Complete identity verification.',
            '3. Connect your Web3 wallet.',
            '4. Start browsing properties or become a Scout.',
          ],
        },
        {
          question: 'Where can I get help?',
          answers: [
            'In-app chat support.',
            'Community forums.',
            'Help center articles.',
            'Email support.',
            'Local community managers.',
          ],
        },
      ],
    },
  ];
  