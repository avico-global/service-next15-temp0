import { TextQuote } from "lucide-react";

const QuoteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 w-auto inline-flex min-w-[220px] bg-amber-500 rounded-full text-lg font-semibold text-black  transition-colors`}
    >
      <div className="flex items-center gap-2">
        <TextQuote className="w-6 h-6 font-thin" /> GET A QUOTE
      </div>
    </button>
  );
};

export default QuoteButton;
