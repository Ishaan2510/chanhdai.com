export function BrandMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 32"
      aria-hidden
      {...props}
    >
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="26"
        fontWeight="700"
        letterSpacing="-1"
        fill="currentColor"
      >
        IG
      </text>
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 32"><text x="20" y="25" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="26" font-weight="700" letter-spacing="-1" fill="currentColor">IG</text></svg>`
}
