import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
    return(
        <footer className='flex items-center bg-gray-200 justify-center h-14 w-full'>
            <span className='flex items-center text-xs sm:text-sm text-black gap-1.5'>
            Made with 
            <IoMdHeart size={13} className='text-gray-700' />
            by
            <strong>Vicente Neto</strong>
            </span>
        </footer>
    )
}