import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MicIcon, CalendarIcon } from 'lucide-react';

function CTA() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-muted/10 via-background to-muted/5">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border backdrop-blur-sm">
                <svg
                  id="Layer_1"
                  height="512"
                  viewBox="0 0 512 512"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-primary"
                  fill="currentColor"
                >
                  <path
                    clipRule="evenodd"
                    d="m155.664 79.323c-4.279-1.651-6.405-6.462-4.754-10.738 1.653-4.277 6.462-6.404 10.739-4.751 18.777 7.274 38.625 10.91 58.517 10.91s39.737-3.636 58.514-10.91c4.278-1.653 9.088.475 10.739 4.751 1.652 4.276-.474 9.087-4.752 10.738-20.79 8.054-42.669 12.083-64.501 12.083-21.831 0-43.711-4.03-64.502-12.083m235.551 161.384h34.983v41.086h41.087v34.982h-41.087v-41.089h-34.983v-41.089h-41.089v-34.982h41.089zm17.49-38.511c53.622 0 97.09 43.468 97.09 97.09 0 53.621-43.468 97.09-97.09 97.09-53.618 0-97.089-43.469-97.089-97.09 0-53.622 43.471-97.09 97.089-97.09zm-188.539 100.089c-39.505 0-71.531 32.024-71.531 71.531v120.441c.022 4.252-2.316 8.166-6.072 10.158-3.754 1.991-8.308 1.732-11.814-.67-74.592-51.783-103.932-125.952-88.015-222.51 2.451-14.86-.515-18.343-7.334-30.325-32.421-56.928-36.307-119.917-19.203-180.403 27.165-71.992 79.259-83.486 156.286-34.487 30.458 11.803 64.905 11.803 95.364 0 77.028-48.998 129.125-37.505 156.288 34.488 10.937 38.682 13.291 78.388 5.087 116.876-6.653-1.211-13.511-1.85-20.518-1.85-62.821 0-113.751 50.929-113.751 113.752 0 55.35 39.537 101.458 91.907 111.648-14.783 36.367-40.536 67.307-77.278 92.812-3.506 2.402-8.057 2.661-11.813.67-3.757-1.992-6.096-5.906-6.072-10.158 0-80.293 0-120.441 0-120.441 0-39.508-32.025-71.532-71.531-71.532z"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-secondary-foreground">
                  Ready When You Are
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent ">
                  Your dental health
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-serif font-light italic">
                  journey starts here
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Join 1,200+ patients who trust our AI for instant guidance and
                personalized care.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="px-6 py-3 font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <MicIcon className="mr-2 h-4 w-4" />
                Start free chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-3 font-semibold border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 rounded-xl"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Book appointment
              </Button>
            </div>
          </div>

          {/* Right Content - CTA Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Badge */}
              <div className="absolute -top-4 left-4 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg z-10">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  Available 24/7
                </div>
              </div>

              {/* Main Image */}
              <div className="relative">
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl scale-110"></div>

                <Image
                  src="/cta.png"
                  alt="DentalHelp AI Assistant"
                  width={300}
                  height={300}
                  className="relative w-80 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA;
