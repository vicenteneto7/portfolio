'use client'

import { TbArrowNarrowUp } from "react-icons/tb"
import { Button } from "../button"

export const BackToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return(
        <div className="fixed right-4 bottom-4 z-20">
            <Button onClick={scrollToTop} className=" shadow-lg shadow-gray-600">
                <TbArrowNarrowUp size={20} />
            </Button>
        </div>
    )
}