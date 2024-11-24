// components/PropertyDetails/PropertyHeader.tsx
interface PropertyHeaderProps {
    title: string;
    price: string;
}

export const PropertyHeader = ({ title, price }: PropertyHeaderProps) => (
    <div className="property-header text-center my-14 border-gray-200 flex justify-between items-center">
        <h1 className="property-title text-2xl text-[#2F3D46] font-bold">{title}</h1>
        <div className="property-price text-3xl text-[#1A2258] font-bold">{price}</div>
    </div>
);

  