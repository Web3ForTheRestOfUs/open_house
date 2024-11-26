import Image from 'next/image';

const CarouselImage = () => {
  return (
    <div className="bg-white h-screen relative">
      <Image
        src="/house.jpg" //change to real-estate.jpg if necessary
        alt="Landing Image"
        layout="fill"
        objectFit="cover" 
        className="absolute" 
      />
    </div>
  );
};

export default CarouselImage;
