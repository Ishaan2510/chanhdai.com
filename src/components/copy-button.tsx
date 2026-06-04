"use client"

import type { ComponentProps } from "react"
import { Check, Copy, X } from "lucide-react"

import type { CopyState } from "@/hooks/use-copy-to-clipboard"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Button } from "@/components/base/ui/button"

export type CopyButtonProps = ComponentProps<typeof Button> & {
  /** The text to copy, or a function that returns the text. */
  text: string | (() => string)
  /** Called with the copied text on successful copy. */
  onCopySuccess?: (text: string) => void
  /** Called with the error if the copy operation fails. */
  onCopyError?: (error: Error) => void
  /** Custom icon for idle state. */
  idleIcon?: React.ReactNode
  /** Custom icon for done state. */
  doneIcon?: React.ReactNode
  /** Custom icon for error state. */
  errorIcon?: React.ReactNode
}

function CopyStateIcon({
  state,
  idleIcon,
  doneIcon,
  errorIcon,
}: {
  state: CopyState
  idleIcon?: React.ReactNode
  doneIcon?: React.ReactNode
  errorIcon?: React.ReactNode
}) {
  if (state === "done") {
    return doneIcon ?? <Check />
  }

  if (state === "error") {
    return errorIcon ?? <X />
  }

  return idleIcon ?? <Copy />
}

export function CopyButton({
  size = "icon-sm",
  children,
  text,
  idleIcon,
  doneIcon,
  errorIcon,
  onClick,
  onCopySuccess,
  onCopyError,
  ...props
}: CopyButtonProps) {
  const { state, copy } = useCopyToClipboard({
    onCopySuccess,
    onCopyError,
  })

  return (
    <Button
      type="button"
      size={size}
      onClick={(e) => {
        copy(text)
        onClick?.(e)
      }}
      aria-label="Copy"
      {...props}
    >
      <CopyStateIcon
        state={state}
        idleIcon={idleIcon}
        doneIcon={doneIcon}
        errorIcon={errorIcon}
      />
      {children}
    </Button>
  )
}
