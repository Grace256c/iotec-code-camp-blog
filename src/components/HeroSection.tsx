import { Globe, MapPin } from 'lucide-react'
import gracePortrait from '@/assets/grace-portrait.jpg'
import {Button} from '@/components/ui/button'
import {Card} from '@/components/ui/card'
import {EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon} from "@phosphor-icons/react"

const AUTHOR_EMAIL = 'gracenakiyemba256@gmail.com'

function openExternalUrl(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function HeroSection() {
  const handleOpenEmail = () => {
    window.location.href = `mailto:${AUTHOR_EMAIL}`
  }

  const handleOpenGitHub = () => {
    openExternalUrl('https://github.com/Grace256c')
  }

  const handleOpenWhatsApp = () => {
    openExternalUrl('https://wa.me/256756339110')
  }

  const handleOpenLinkedIn = () => {
    openExternalUrl('https://www.linkedin.com/in/grace-nakiyemba/')
  }

  const handleOpenPortfolio = () => {
    openExternalUrl('https://gracenakiyemba.netlify.app/')
  }

  return (
    <section className="py-4 sm:py-8">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Portrait Card & Author Attribution (First on mobile, left on desktop) */}
        <figure className="lg:col-span-5">
          <Card className="relative aspect-4/5 w-full overflow-hidden rounded-xl border-border bg-card p-0 py-0 shadow-xs">
            <span
              aria-hidden="true"
              className="absolute top-3.5 left-3.5 z-10 h-1.5 w-4 rounded-full bg-background/90 shadow-2xs"
            />

            <img
              src={gracePortrait}
              alt="Portrait of Grace Nakiyemba"
              fetchPriority="high"
              width={680}
              height={716}
              className="size-full object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-linear-to-t from-background/85 via-background/35 to-transparent p-3.5 pt-14"
            >
              <div className="h-2.5 w-full rounded-xs bg-background/95 shadow-2xs" />
            </div>
          </Card>

          <figcaption className="mt-3.5 space-y-0.5">
            <p className="text-xs font-semibold text-foreground">Grace Nakiyemba</p>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Software Engineer &amp; AI Builder
            </p>
          </figcaption>
        </figure>

        {/* Right Column: Authorial Focus & Direct Inquiries (Below image on mobile, right on desktop) */}
        <div className="flex flex-col lg:col-span-7 lg:pt-1">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold tracking-[0.16em] text-primary uppercase">
              ABOUT ME
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-border" />
          </div>

          <h1 className="mt-3 font-serif text-3xl leading-[1.14] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
            Turning curiosity into innovation, and{' '}
            <em className="font-normal italic text-primary">ideas into impact.</em>
          </h1>

          <p className="mt-5 text-[14.5px] leading-[1.7] text-foreground/80">
            I am Grace Nakiyemba, a Software Engineer and AI Builder based in
            Kampala, Uganda. My journey in technology is shaped by curiosity, a
            commitment to continuous learning, and a belief that meaningful
            innovation begins with understanding real human challenges.
          </p>

          <p className="mt-4 text-xs leading-[1.7] text-muted-foreground sm:text-[13px]">
            Currently pursuing Software and AI Engineering at Turing College, I
            bring ideas to life through hands-on development, hackathons,
            collaborative projects, and open-source contributions. My interests
            span artificial intelligence, cloud computing, cybersecurity, and
            blockchain.
          </p>

          <p className="mt-4 text-xs leading-[1.7] text-muted-foreground sm:text-[13px]">
            I approach technology as more than a collection of tools. To me, it is
            an opportunity to rethink possibilities, challenge conventional
            approaches, and build solutions that make a lasting difference. This
            space is where I share what I learn, what I build, and the perspectives
            I develop along the way.
          </p>

          <div className="mt-7 pt-1">
            <h2 className="text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Connect With Me
            </h2>

            <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin aria-hidden="true" className="size-3.5" />
              Kampala, Uganda
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={handleOpenEmail}
                className="h-8 gap-2 rounded-md border border-border/80 bg-card px-3 text-xs font-normal text-foreground hover:bg-secondary"
              >
                <EnvelopeSimpleIcon size={32} className="text-muted-foreground"/>
                <span>{AUTHOR_EMAIL}</span>
              </Button>

              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={handleOpenGitHub}
                className="h-8 gap-2 rounded-md border border-border/80 bg-card px-3 text-xs font-normal text-foreground hover:bg-secondary"
              >
                <GithubLogoIcon aria-hidden="true" size={32} className="text-muted-foreground"/>
                <span>GitHub</span>
              </Button>

              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={handleOpenWhatsApp}
                className="h-8 gap-2 rounded-md border border-border/80 bg-card px-3 text-xs font-normal text-foreground hover:bg-secondary"
              >
                <WhatsappLogoIcon size={32} className="text-muted-foreground"/>
                <span>WhatsApp</span>
              </Button>

              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={handleOpenLinkedIn}
                className="h-8 gap-2 rounded-md border border-border/80 bg-card px-3 text-xs font-normal text-foreground hover:bg-secondary"
              >
                <LinkedinLogoIcon size={32} className="text-muted-foreground"/>
                <span>LinkedIn</span>
              </Button>

              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={handleOpenPortfolio}
                className="h-8 gap-2 rounded-md border border-border/80 bg-card px-3 text-xs font-normal text-foreground hover:bg-secondary"
              >
                <Globe aria-hidden="true" size={32} className="text-muted-foreground" />
                <span>Portfolio</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
