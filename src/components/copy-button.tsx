"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { trackEvent } from "@/lib/events"
import { Button } from "@/components/base/ui/button"

export interface CopyButtonProps {
  value: string
  size?: "icon-sm" | "icon" | "icon-lg"
  className?: string
}

export function CopyButton({
  value,
  size = "icon-sm",
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      trackEvent?.("copy", { value })
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size={size}
      onClick={handleCopy}
      className={className}
      aria-label={copied ? "Copied" : "Copy"}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </Button>
  )
}
