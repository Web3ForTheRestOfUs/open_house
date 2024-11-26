import Image from 'next/image';

const CarouselImage = () => {
  return (
    <div className="bg-white h-[37.1875rem] relative">
      <Image
        src="/real-estate.jpg" 
        alt="Landing Image"
        layout="fill"
        objectFit="cover" 
        className="absolute" 
      />
    </div>
  );
};

export default CarouselImage;
