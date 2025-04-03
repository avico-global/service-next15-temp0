import React from "react";
import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";
import { Montserrat } from "next/font/google";
import CallButton from "../../CallButton";
import QuoteButton from "../../QuoteButton";
import MarkdownIt from "markdown-it";


const montserrat = Montserrat({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});

export default function ServiceText({ contact_info, data, service , data2}) {
    const markdown = new MarkdownIt();
    const markdown2 = new MarkdownIt();
    const content = markdown.render(
      data
        ?.replaceAll(
          "##service##",
          service?.replaceAll("-", " ")
        )

    );
    const content2 = markdown2.render(
      data2
        ?.replaceAll(
          "##service##",
          service?.replaceAll("-", " ")
        )
    );
    

  return (
    <FullContainer className="py-6 md:py-8">
      <Container>
        {data && (
          <div className="flex flex-col gap-4 w-full">
            <div
              className="w-full prose max-w-none text-primary"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        )}
        {data2 && (
          <div className="flex flex-col gap-4 p-4 md:p-8 rounded-3xl mt-16 shadow-[0_0_10px_0_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-4 w-full">
              <div
              className="w-full prose prose-h3:text-primary prose-p:!text-[20px] max-w-none text-primary"
              dangerouslySetInnerHTML={{ __html: content2 }}
            />
        </div>
          <div className="hidden  md:flex flex-wrap w-full justify-start items-center md:justify-center gap-4 lg:gap-7 pt-4">
                  <CallButton phone={contact_info?.phone} />
                  <QuoteButton phone={contact_info?.phone} />
            </div>
         </div>
        )}
      </Container>
    </FullContainer>
  );
}
