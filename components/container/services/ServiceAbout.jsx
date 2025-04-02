import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import Heading from '../../common/Heading'
import Image from 'next/image'
import CallButton from '../../CallButton'
import QuoteButton from '../../QuoteButton'
import { Award } from 'lucide-react'

export default function ServiceAbout({ data, image, contact_info }) {
    return (
        <FullContainer className="py-6 md:py-8">
          <Container className="">
            <div className="flex flex-col md:flex-row h-fit gap-8 items-center">
              <div className="w-fit max-w-[550px] flex flex-col justify-center items-center md:items-start md:justify-start gap-4 ">
              <h2 className="text-[18px] font-bold text-primary">Chimney Inspection Services in Tampa, FL:</h2>
                <p className="text-lg text-primary font-[500] ">
                Ensuring Safety and Efficiency In Tampa, FL, chimney inspections are vital for ensuring the safety, efficiency, and longevity of your home’s heating system. The humid, subtropical climate in the region, along with occasional storms, can create conditions that lead to the deterioration of chimney structures. Regular chimney inspections help homeowners avoid costly repairs and ensure their homes remain safe from potential fire hazards.
                </p>
                <div className="hidden md:flex flex-wrap w-full justify-start items-center gap-4 lg:gap-7 pt-4">
                  <CallButton phone={contact_info?.phone} />
                  <QuoteButton phone={contact_info?.phone} />
                </div>
              </div>
    
              <div className="flex-1 w-full md:w-1/2 lg:w-3/5 h-full relative hidden md:block">
                <div className="overflow-hidden rounded-md h-[360px] w-full relative">
                  <Image
                    title="Why Choose Image"
                    src={image}
                    alt="Professional chimney services"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </FullContainer>
      );
}
