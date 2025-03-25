import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});

export default function Heading({text, className}) {
  return (
    <div>
        <h2 className={`text-[33px] md:text-[28px] font-[800] text-primary text-center leading-nones ${montserrat.className} ${className}`}>
        {text}
      </h2>
    </div>
  )
}
