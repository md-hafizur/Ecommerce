import { cn } from "@/lib/utils"
import { Card } from "../ui/card"

type CountdownExpiredProps = {
  message: string
  showCard?: boolean
  className?: string
  messageClassName?: string
}

export function CountdownExpired({
  message,
  showCard = true,
  className,
  messageClassName
}: CountdownExpiredProps) {
  const content = (
    <div className={cn(
      "flex items-center justify-center p-4",
      className
    )}>
      <span className={cn(
        "text-xl font-bold text-center",
        messageClassName
      )}>
        {message}
      </span>
    </div>
  )

  if (showCard) {
    return (
      <Card className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border-white/10">
        {content}
      </Card>
    )
  }

  return content
}