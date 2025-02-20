import { ArrowRight } from "lucide-react"
import Link from "next/link"

 
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-4xl mx-auto px-6 py-24 animate-fade-in">
        <div className="space-y-16">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl title-text">Ted Quinton Architecture</h1>
            <p className="text-gray-400">Project proposal</p>
          </header>

          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-light">Project Scope</h2>
              <p className="text-gray-400 leading-relaxed">
                We will design and develop a professional and responsive website tailored to your specifications. The key
                features include:
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg">Key Pages</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-[#FFD700]" />
                    <span className="flex-1">
                      <strong className="text-white">Home</strong> – Introduction with selected project images and an
                      original interactive feature.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-[#FFD700]" />
                    <span className="flex-1">
                      <strong className="text-white">About</strong> – Studio introduction with team member photos,
                      service overview (Architecture, Infrastructure, Interior, Digital, Research), practice insights
                      with a highlighted quote, and a dedicated section on the studio&apos;s approach.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-[#FFD700]" />
                    <span className="flex-1">
                      <strong className="text-white">Work</strong> – Showcase of expertise areas with photos and
                      descriptions for Architecture Style, Infrastructure, Interior, Digital, and Research.
                    </span> 
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-[#FFD700]" />
                    <span className="flex-1">
                      <strong className="text-white">Experience</strong> – Display of 6–8 key aspects of experience,
                      featuring images and descriptions, inspired by the &apos;Archive&apos; section.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-[#FFD700]" />
                    <span className="flex-1">
                      <strong className="text-white">News</strong> (Optional) – Announcements on talks, conventions,
                      events, and annual project calendar launches.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-[#FFD700]" />
                    <span className="flex-1">
                      <strong className="text-white">Contact</strong> – Contact number and email, studio address with
                      Google Maps integration, navigation menu with social media links, and a personalized brand
                      interaction feature.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                <div className="space-y-8">
                  <h3 className="text-lg">Project Timeline</h3>
                  <ul className="space-y-6 text-gray-400">
                    <li className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <span>Planning & Wireframing</span>
                        <span className="text-white">3 days</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-[#FFD700] h-2.5 rounded-full animate-grow-width-1"></div>
                      </div>
                    </li>
                    <li className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <span>Design & Development</span>
                        <span className="text-white">24-31 days</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-[#FFD700] h-2.5 rounded-full animate-grow-width-2"></div>
                      </div>
                    </li>
                    <li className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <span>Testing & Revisions</span>
                        <span className="text-white">7 days</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-[#FFD700] h-2.5 rounded-full animate-grow-width-3"></div>
                      </div>
                    </li>
                    <li className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <span>Final Deployment</span>
                        <span className="text-white">1 day</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-[#FFD700] h-2.5 rounded-full animate-grow-width-4"></div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg">Total Project Duration</h3>
                  <p className="text-gray-400">35-42 days (5-6 weeks)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-light">Pricing</h2>
            <div className="space-y-6">
              <p className="text-xl">
                Total Project Cost: <span className="text-[#FFD700]">$3800 USD</span>
              </p>

              <div className="space-y-4">
                <p className="text-gray-400">This includes:</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-[#FFD700]" />
                    Custom design and development
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-[#FFD700]" />
                    Two rounds of revisions
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 text-[#FFD700]" />
                    Deployment and setup
                    <span className="text-[#FFD700]"> FREE</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                Any additional requests or revisions beyond the agreed scope may incur extra charges, which will be
                communicated in advance.
              </p>
            </div>
          </section>

          <footer className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="px-6 py-2 border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300 ease-in-out"
                >
                  Download PDF
                </Link>
                <Link
                  href="mailto:atilio6999@gmail.com"
                  className="px-6 py-2 bg-[#FFD700] text-black hover:bg-[#FFD700]/90 transition-all duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}

