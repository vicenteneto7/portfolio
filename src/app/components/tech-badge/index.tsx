type TechBadgeProps = {
    name: string
}

export const TechBadge = ({name}: TechBadgeProps) => {
    return(
        <span className="text-gray-200 bg-gray-900/80 py-1 px-3 rounded-lg">
            {name}
        </span>
    )
}