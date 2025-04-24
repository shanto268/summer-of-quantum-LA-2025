interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export default function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 font-display">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-white/70 font-body">{subtitle}</p>}
    </div>
  )
}
