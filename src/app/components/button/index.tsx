import { cn } from "@/app/lib/utis"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, className, ...props}: ButtonProps ) => {
    return(
       <button 
       className={cn(
        'py-3 px-4 rounded-lg hover:bg-gray-600 bg-gray-700 shadow-button text-gray-50 flex items-center justify-center gap-2 transition-all',
         className
         )} 
         {...props}
         >

         {children}
       </button>
    )
}