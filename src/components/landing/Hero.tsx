import { SignUpButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { CalendarIcon, MicIcon } from 'lucide-react';
import Image from 'next/image';

function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* GRADIENT ORBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-10">
              <div className="space-y-6">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border  backdrop-blur-sm">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 25 24"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-primary"
                  >
                    <g
                      clipRule="evenodd"
                      fill="currentColor"
                      fillRule="evenodd"
                    >
                      <path d="m21.625 11.5156c-4.36-1.124-7.767-4.53104-8.891-8.89104l-.484-1.877001-.484 1.877001c-1.124 4.36-4.53095 7.76704-8.89095 8.89104l-1.877003.484 1.877003.485c4.36 1.124 7.76695 4.531 8.89095 8.89l.484 1.878.484-1.878c1.124-4.359 4.531-7.766 8.891-8.89l1.877-.485z" />
                      <path d="m19.0011 7.74697c0-1.162 1.274-2.499 2.499-2.499-1.179 0-2.499-1.351-2.499-2.498 0 1.147-1.308 2.498-2.498 2.498 1.145 0 2.498 1.33 2.498 2.499z" />
                    </g>
                  </svg>
                  <span className="text-sm font-medium text-secondary-foreground">
                    AI-Powered Dental Assistant
                  </span>
                </div>

                {/* MAIN HEADING */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your dental
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-serif font-light italic">
                    questions
                  </span>
                  <br />
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    answered instantly
                  </span>
                </h1>

                {/* SUBTITLE */}
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                  Chat with our AI dental assistant for instant advice, book
                  smart appointments, and get personalized care recommendations.
                  Available 24/7.
                </p>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SignUpButton mode="modal">
                  <Button size={'lg'}>
                    <MicIcon className="mr-2 size-5" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size={'lg'} variant={'outline'}>
                    <CalendarIcon className="mr-2 size-5" />
                    Book appointment
                  </Button>
                </SignUpButton>
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="relative lg:pl-8">
              {/* GRADIENT ORBS */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

              <Image
                src={'/hero.png'}
                alt="DentalHelp AI"
                width={600}
                height={600}
                className="w-full h-auto rounded-4xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
