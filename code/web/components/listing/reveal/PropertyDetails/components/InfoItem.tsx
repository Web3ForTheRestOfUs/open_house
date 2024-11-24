// components/PropertyDetails/InfoItem.tsx
interface InfoItemProps {
    label: string;
    value: string | React.ReactNode;
}

export const InfoItem = ({ label, value }: InfoItemProps) => (
    <div className="item mb-4">
        <span className="label font-semibold text-gray-600 block mb-1">{label}</span>
        <div className="value bg-[#EFEFF0] p-6 rounded-md text-gray-800">
        {value}
        </div>
    </div>
);