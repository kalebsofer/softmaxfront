import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pillButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-mono font-medium uppercase transition-[opacity,background-color] disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      tone: {
        /** Primary action on paper. */
        ink: "bg-ink text-paper hover:opacity-[0.88]",
        /** The one accent action per view, such as Book a call. */
        signal: "bg-[#b3402f] text-paper hover:opacity-[0.88]",
        /** Secondary action on paper. */
        outline: "text-ink ring-1 ring-inset ring-ink/[0.12] hover:bg-ink/[0.04]",
        /** Primary action on an ink section. */
        paper: "bg-paper text-ink hover:opacity-90",
        /** Secondary action on an ink section. */
        "outline-paper": "text-paper ring-1 ring-inset ring-paper/20 hover:bg-paper/[0.08]",
      },
      size: {
        /** Compact controls, such as the mobile menu toggle. */
        sm: "px-4 py-[11px] text-[11px] tracking-[0.05em]",
        /** Header actions. */
        md: "px-[18px] py-3 text-xs tracking-[0.05em]",
        /** Actions inside a section. */
        lg: "px-[26px] py-[17px] text-xs tracking-[0.06em]",
        /** Full-width stacked actions on mobile. */
        block: "w-full p-[17px] text-center text-xs tracking-[0.06em]",
      },
    },
    defaultVariants: {
      tone: "ink",
      size: "md",
    },
  }
)

export interface PillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pillButtonVariants> {
  /** Render the child element (for example a link) with the pill styles. */
  asChild?: boolean
}

/**
 * The Softmax pill: mono, uppercase, fully rounded. Use it for every call to
 * action on the site - render a link with `asChild`, a button without.
 */
const PillButton = React.forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ className, tone, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(pillButtonVariants({ tone, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
PillButton.displayName = "PillButton"

export { PillButton, pillButtonVariants }
