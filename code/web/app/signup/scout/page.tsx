import React from 'react';
import Footer from '@/components/nav/footer';
import Header from '@/components/nav/header';
const page = () => {
  return (
    <div>
    <Header/>
    <div className='flex justify-center my-20 p-10'>
    <div className="w-[648px] h-[830px] relative bg-white">
    <div className="w-[567px] left-[40px] top-[45px] absolute text-black text-2xl font-semibold font-['Montserrat']">Join the OpenHouse Community and start earning while helping others</div>
    <div className="left-[40px] top-[139px] absolute text-[#8592ad] text-base font-medium font-['Montserrat']">Personal Information</div>
    <div className="left-[40px] top-[405px] absolute text-[#8592ad] text-base font-medium font-['Montserrat']">Wallet Account</div>
    <div className="left-[40px] top-[545px] absolute text-[#8592ad] text-base font-medium font-['Montserrat']">By becoming a Scout, you agree to:</div>
    <div className="left-[40px] top-[565px] absolute text-[#8592ad] text-base font-medium font-['Montserrat']">Document properties accurately and honestly<br/>Respect others’ privacy while collecting information<br/>Earn tokens based on the quality and accuracy of your data</div>
    <div className="left-[40px] top-[504px] absolute"><span className="text-[#8592ad] text-xs font-medium font-['Montserrat']">Don’t have a wallet? </span><span className="text-[#357df2] text-xs font-semibold font-['Montserrat'] underline">Click here</span></div>
    <div className="w-[567px] h-[198px] left-[40px] top-[175px] absolute">
        <div className="w-[567px] h-[50px] pl-[21px] pr-[432px] py-[15px] left-0 top-[74px] absolute rounded border border-[#7c7a7a] justify-start items-center inline-flex">
            <div className="text-[#8592ad] text-base font-medium font-['Montserrat']">Email address</div>
        </div>
        <div className="w-[567px] h-[50px] pl-[21px] pr-[27px] pt-[15px] pb-2.5 left-0 top-[148px] absolute rounded border border-[#7c7a7a] justify-start items-start gap-[416px] inline-flex">
            <div className="text-[#8592ad] text-base font-medium font-['Montserrat']">Password</div>
            <div className="w-6 h-6 relative flex-col justify-start items-start flex"></div>
        </div>
        <div className="w-[567px] h-[50px] pl-[21px] pr-[496px] py-[15px] left-0 top-0 absolute rounded border border-[#7c7a7a] justify-start items-center inline-flex">
            <div className="text-[#8592ad] text-base font-medium font-['Montserrat']">Name</div>
        </div>
    </div>
    <div className="w-[519px] h-[60px] px-[281px] py-[15px] left-[65px] top-[742px] absolute bg-[#317ba0] rounded-lg justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-base font-medium font-['Montserrat']">Become a Scout</div>
    </div>
    <div className="w-[567px] pl-[21px] pr-[471px] py-[15px] left-[40px] top-[441px] absolute rounded border border-[#7c7a7a] justify-start items-center inline-flex">
        <div className="text-[#8592ad] text-base font-medium font-['Montserrat']">Wallet ID</div>
    </div>
    <div className="left-[40px] top-[654px] absolute">
        <div className="left-[40px] top-[3px] absolute"><span className="text-black text-base font-normal font-['Montserrat']">I agree to the</span><span className="text-[#357df2] text-base font-normal font-['Montserrat']"> terms and conditions</span></div>
        <div className="w-[25px] h-[25px] left-0 top-0 absolute border border-[#8592ad]"></div>
    </div>
</div>
</div>

<Footer />
</div>
  );
};

export default page;