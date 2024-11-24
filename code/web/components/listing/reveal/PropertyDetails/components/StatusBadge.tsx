import { Status } from "../types";

// components/PropertyDetails/StatusBadge.tsx
interface StatusBadgeProps {
    status: Status;
    value: string;
  }
  
  export const StatusBadge = ({ status, value }: StatusBadgeProps) => (
    <span className={`status status-${status} inline-block px-3 py-1 rounded-full text-sm font-medium`}>
      {value}
    </span>
  );