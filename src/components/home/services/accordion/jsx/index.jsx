// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT REACT ICONS
import { FaMinus, FaAngleRight } from "react-icons/fa"

// IMPORT JSX ATOMS
import ParagraphBaseSemiboldWhite from "@/atoms/atoms-shiva/paragraphs/base/semibold/white/jsx"
import ParagraphLgWhite from "@/atoms/atoms-shiva/paragraphs/lg/white/jsx"

const ServicesAccordion = ({ accordionData }) => {

    const [openIndex, setOpenIndex] = useState(null)

    // TOGGLE ACCORDION
    const toggleAccordion = ( index ) => {

        setOpenIndex( openIndex === index ? null : index )

    }

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
            
                accordionData.map( ( item, index ) => (

                    <div className="">
                        <div className="flex items-center justify-between bg-black hover:bg-red-dark duration-300 w-full px-6 py-3 cursor-pointer" onClick={() => toggleAccordion( index )}>
                            <div className="flex gap-4 items-center">
                                { openIndex === index ? <FaMinus color="white" /> : "" }
                                <ParagraphBaseSemiboldWhite>{ item.title }</ParagraphBaseSemiboldWhite>
                            </div>
                            <span className={`text-white text-xl transition-transform duration-300 ${openIndex === index ? "transform rotate-90" : ""}`}><FaAngleRight /></span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-full" : "max-h-0"}`}>
                            <div className="bg-red-dark border border-black p-6">
                                <ParagraphLgWhite>{ item.description }</ParagraphLgWhite>
                            </div>
                        </div>
                    </div>

                ))
            
            }
        </div>

    )

}
export default ServicesAccordion
