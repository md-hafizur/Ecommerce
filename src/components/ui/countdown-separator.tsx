import { cn } from "@/lib/utils"

type CountdownSeparatorProps = {
  children?: React.ReactNode
  className?: string
}

export function CountdownSeparator({ 
  children = ":", 
  className 
}: CountdownSeparatorProps) {
  return (
    <div className={cn(
      "flex items-center justify-center font-bold opacity-50",
      className
    )}>
      {children}
    </div>
  )
}
