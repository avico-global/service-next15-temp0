import React from "react";
import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";
import { Montserrat } from "next/font/google";
import CallButton from "../../CallButton";
import QuoteButton from "../../QuoteButton";
import ReactMarkdown from "react-markdown";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
    html: true,
    breaks: true,  // ✅ Single \n ko bhi new line banana allow karega
  });
const montserrat = Montserrat({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});


  
export default function ServiceText({ contact_info, data }) {
    const markdownIt = new MarkdownIt();
  const content = markdownIt.render(data[0].markdown_data1 || "");

  return (
    <>
       {
        data.length > 0 ? (
            <FullContainer className="py-6 md:py-8">
       
            <Container>
              <div className="flex flex-col gap-4">
                <h2
                  className={`text-[32px] text-center prose font-bold text-primary ${montserrat.className}`}
                >
                  {data[0].markdown_heading1}
                </h2>
                <div className={`text-lg text-primary font-[500]  `}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                {/* <MarkdownContent data={data[0].markdown_data1} />  */}
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4 md:p-8 rounded-3xl mt-16 shadow-[0_0_10px_0_rgba(0,0,0,0.4)]">
                <h3 className="text-[32px] font-bold text-primary text-center">
                {data[0].markdown_heading2}
                </h3>
                <div className="text-lg text-primary font-[500] ">
                  <MarkdownContent data={data[0].markdown_data2} />
                </div>
                <div className="hidden  md:flex flex-wrap w-full justify-start items-center md:justify-center gap-4 lg:gap-7 pt-4">
                        <CallButton phone={contact_info?.phone} />
                        <QuoteButton phone={contact_info?.phone} />
                </div>
              </div>
            </Container>
          </FullContainer>
        ) : (
            <FullContainer className="py-6 md:py-8">
       
            <Container>
              <div className="flex flex-col gap-4">
                <h2
                  className={`text-[32px] text-center font-bold text-primary ${montserrat.className}`}
                >
                  Types of Chimney Inspections
                </h2>
                <p className={`text-lg text-primary font-[500]  `}>
                  There are three levels of chimney inspections, each designed for
                  different situations: Level 1 Inspection: This is the standard
                  inspection for chimneys that are regularly maintained and used. It
                  involves a visual examination of the chimney’s accessible
                  components, including the flue, the chimney crown, and the chimney
                  cap. Technicians will also look for signs of damage or obstruction.
                  Level 2 Inspection: A Level 2 inspection is more comprehensive and
                  is recommended when you are buying or selling a home or after an
                  event such as a chimney fire or earthquake. It includes all of the
                  procedures from a Level 1 inspection but also uses video scanning
                  equipment to assess areas of the chimney that are not easily
                  accessible, such as the flue. Level 3 Inspection: This is the most
                  detailed inspection and is conducted when there is serious concern
                  about the structure of the chimney. It may involve removing parts of
                  the chimney to access areas that are not visible in the other two
                  inspections. This level is usually reserved for situations where
                  damage is suspected but cannot be confirmed through a visual check
                </p>
              </div>
              <div className="flex flex-col gap-4 p-4 md:p-8 rounded-3xl mt-16 shadow-[0_0_10px_0_rgba(0,0,0,0.4)]">
                <h3 className="text-[32px] font-bold text-primary text-center">
                  Chimney Maintenance Tips for Homeowners in Tampa
                </h3>
                <p className="text-lg text-primary font-[500] ">
                  Schedule Annual Inspections: It’s recommended to have a professional
                  chimney inspection at least once a year. A certified chimney sweep
                  can check for structural damage, creosote buildup, and signs of
                  animal nesting. Since Tampa is a high humidity area, moisture can
                  play a key role in chimney wear, so regular inspections ensure you
                  catch water-related issues early Clean Your Chimney Regularly:
                  Depending on how often you use your chimney, cleaning may be
                  necessary every year or more frequently. Wood-burning stoves, in
                  particular, create more creosote and require more frequent
                  cleanings. A professional chimney sweep can handle this process
                  efficiently and safely, preventing dangerous buildup. Check for
                  Cracks and Leaks : As the Tampa area experiences fluctuating weather
                  conditions, from humid summers to occasional cold fronts, it’s
                  important to check for cracks in your chimney's structure. Cracks
                  allow moisture to seep in, which can lead to significant damage over
                  time. Sealing up cracks early can save you from more extensive
                  repairs later. Install a Chimney Cap: A chimney cap acts as a
                  protective shield for your chimney. It keeps out debris, water, and
                  animals from entering the flue, thus reducing the chances of clogs
                  and damage. Chimney caps are essential in coastal areas like Tampa,
                  where salty air and frequent rain can accelerate wear and tear.
                  Consider Waterproofing Waterproofing your chimney is a good idea in
                  Tampa’s rainy climate. Waterproofing prevents moisture from seeping
                  into the masonry and causing corrosion or mold. A professional
                  chimney service can apply a sealant that prevents water damage and
                  protects the longevity of the chimney.
                </p>
                <div className="hidden  md:flex flex-wrap w-full justify-start items-center md:justify-center gap-4 lg:gap-7 pt-4">
                        <CallButton phone={contact_info?.phone} />
                        <QuoteButton phone={contact_info?.phone} />
                </div>
              </div>
            </Container>
          </FullContainer>
        )
      } 
   
    </>
  );
}
function MarkdownContent ({data}){
    return (
       <ReactMarkdown>{data}</ReactMarkdown>
    )
}