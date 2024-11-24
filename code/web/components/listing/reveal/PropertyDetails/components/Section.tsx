// components/PropertyDetails/Section.tsx
interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => (
    <div className="section mb-10 p-5 bg-[#F6F6F6] border border-[#D0D5DD] rounded-lg">
        <h2 className="section-title text-[#317BA0] font-bold text-xl mb-5 pb-2 border-b-2 border-[#317BA0]">
        {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20">
        {children}
        </div>
    </div>
);