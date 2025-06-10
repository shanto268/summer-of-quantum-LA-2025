import { ExternalLink } from 'lucide-react'

interface Sponsor {
  name: string
  description: string
  productName: string
  productDescription: string
  buyLink: string
  learnMoreLink?: string
  howToPlayLink?: string
}

interface SponsorsSectionProps {
  sponsors: Sponsor[]
}

export default function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-la-sunset/20 shadow-md shadow-la-sand/40">
      <h2 className="text-2xl font-bold text-la-coral mb-6">
        Our Game Sponsors
      </h2>
      <div className="space-y-8">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="border-b border-la-sand/20 last:border-0 pb-6 last:pb-0"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {sponsor.name}
            </h3>
            <p className="text-gray-700 mb-4">{sponsor.description}</p>

            <div className="bg-la-sand/10 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">
                {sponsor.productName}
              </h4>
              <p className="text-gray-700 mb-4">{sponsor.productDescription}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={sponsor.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-la-coral text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-la-coral/90 transition-colors"
                >
                  Buy Now <ExternalLink className="w-4 h-4" />
                </a>

                {sponsor.learnMoreLink && (
                  <a
                    href={sponsor.learnMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-la-sand text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-la-sand/90 transition-colors"
                  >
                    Learn More <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {sponsor.howToPlayLink && (
                  <a
                    href={sponsor.howToPlayLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-la-sky text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-la-sky/90 transition-colors"
                  >
                    How to Play <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
