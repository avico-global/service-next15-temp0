import { Phone } from "lucide-react";
import Link from "next/link";

const CallButton = ({ phone }) => {
  return (
    <Link
      href={`tel:${phone}`}
      className="bg-primary hover:bg-secondary text-white py-3 px-6 font-bold rounded-full items-center text-xl w-fit my-6 hidden md:flex gap-3"
    >
      <Phone className="w-6 h-6" />
      {phone}
    </Link>
  );
};

export default CallButton;
