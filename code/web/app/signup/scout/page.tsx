import React from 'react';
import Footer from '@/components/nav/footer';
import Header from '@/components/nav/header';
const page = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center my-20 p-10">
        <div className="   bg-white">
          <div className="   absolute text-black text-2xl font-semibold font-['Montserrat']">
            Join the OpenHouse Community and start earning while helping others
          </div>
          <div className="  absolute text-[#8592ad] text-base font-medium font-['Montserrat']">
            Personal Information
          </div>
          <div className="  absolute text-[#8592ad] text-base font-medium font-['Montserrat']">
            Wallet Account
          </div>
          <div className="  absolute text-[#8592ad] text-base font-medium font-['Montserrat']">
            By becoming a Scout, you agree to:
          </div>
          <div className="  absolute text-[#8592ad] text-base font-medium font-['Montserrat']">
            Document properties accurately and honestly
            <br />
            Respect others’ privacy while collecting information
            <br />
            Earn tokens based on the quality and accuracy of your data
          </div>
          <div className="  absolute">
            <span className="text-[#8592ad] text-xs font-medium font-['Montserrat']">
              Don’t have a wallet?{' '}
            </span>
            <span className="text-[#357df2] text-xs font-semibold font-['Montserrat'] underline">
              Click here
            </span>
          </div>
          <div className="    absolute">
            <div className="     left-0  absolute rounded border border-[#7c7a7a] justify-start items-center inline-flex">
              <div className="text-[#8592ad] text-base font-medium font-['Montserrat']">
                Email address
              </div>
            </div>
            <div className="     pb-2.5 left-0  absolute rounded border border-[#7c7a7a] justify-start items-start  inline-flex">
              <div className="text-[#8592ad] text-base font-medium font-['Montserrat']">
                Password
              </div>
              <div className="w-6 h-6  flex-col justify-start items-start flex"></div>
            </div>
            <div className="     left-0 top-0 absolute rounded border border-[#7c7a7a] justify-start items-center inline-flex">
              <div className="text-[#8592ad] text-base font-medium font-['Montserrat']">
                Name
              </div>
            </div>
          </div>
          <div className="      absolute bg-[#317ba0] rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-base font-medium font-['Montserrat']">
              Become a Scout
            </div>
          </div>
          <div className="      absolute rounded border border-[#7c7a7a] justify-start items-center inline-flex">
            <div className="text-[#8592ad] text-base font-medium font-['Montserrat']">
              Wallet ID
            </div>
          </div>
          <div className="  absolute">
            <div className="  absolute">
              <span className="text-black text-base font-normal font-['Montserrat']">
                I agree to the
              </span>
              <span className="text-[#357df2] text-base font-normal font-['Montserrat']">
                {' '}
                terms and conditions
              </span>
            </div>
            <div className="  left-0 top-0 absolute border border-[#8592ad]"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
