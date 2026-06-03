export function BrandWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 32"
      {...props}
    >
      <text
        x="0"
        y="25"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="28"
        fontWeight="700"
        letterSpacing="-1"
        fill="currentColor"
      >
        ishaan
      </text>
    </svg>
  )
}

export function getWordmarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 32"><text x="0" y="25" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="28" font-weight="700" letter-spacing="-1" fill="currentColor">ishaan</text></svg>`
}
