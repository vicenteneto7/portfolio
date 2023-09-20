import { cn } from "@/app/lib/utis"
import Link from "next/link"
import { usePathname } from 'next/navigation'

type NavItemsProps = {
    label: string
    href: string
}

export const NavItem = ({label, href}: NavItemsProps) => {
    const pathname = usePathname()

    const isActive = pathname === href

    return(
        <Link href={href} className={cn("text-gray-500 text-sm flex items-center gap-2 font-medium",
            isActive && 'text-gray-900',
        )}>
            {label}
        </Link>
    )
}