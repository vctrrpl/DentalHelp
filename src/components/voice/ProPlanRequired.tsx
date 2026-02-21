import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CrownIcon } from 'lucide-react';
import Link from 'next/link';

function ProPlanRequired() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* Access Denied Section */}
        <div className="relative mb-12 overflow-hidden">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20">
            <div className="relative z-10 flex items-center justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border backdrop-blur-sm">
                  <svg
                    id="Layer_3"
                    viewBox="0 0 22 22"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-primary fill-current"
                  >
                    <path
                      d="m17.98 8.08-.03-1.13v-.01a6.95 6.95 0 0 0 -13.9-.01l-.03 1.15a2.7034 2.7034 0 0 0 -2.02 2.61v8.62a2.6973 2.6973 0 0 0 2.69 2.69h12.62a2.6973 2.6973 0 0 0 2.69-2.69v-8.62a2.7034 2.7034 0 0 0 -2.02-2.61zm-11.93-1.13a4.95 4.95 0 1 1 9.9 0v.02l.03 1.03h-9.96z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-sm font-medium text-secondary-foreground">
                    Pro Feature
                  </span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">
                    Voice Assistant Access Required
                  </h1>
                  <p className="text-muted-foreground">
                    Upgrade to AI Pro or AI Basic to unlock unlimited voice
                    consultations with our AI dental assistant.
                  </p>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                  <svg
                    id="Layer_1"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-primary fill-current"
                  >
                    <path
                      d="m186.208 69.792v225.131a69.792 69.792 0 0 0 139.584 0v-225.131a69.792 69.792 0 1 0 -139.584 0zm192.853 225a17.067 17.067 0 1 1 34.133 0c0 80.906-61.45 147.722-140.125 156.256v43.882a17.068 17.068 0 0 1 -34.136 0v-43.882c-78.673-8.531-140.127-75.348-140.127-156.248a17.067 17.067 0 1 1 34.133 0 123.061 123.061 0 1 0 246.122 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Card */}
        <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 max-w-2xl mx-auto">
          <CardContent className="relative p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                id="Layer_3_large"
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-primary fill-current"
              >
                <path
                  d="m17.98 8.08-.03-1.13v-.01a6.95 6.95 0 0 0 -13.9-.01l-.03 1.15a2.7034 2.7034 0 0 0 -2.02 2.61v8.62a2.6973 2.6973 0 0 0 2.69 2.69h12.62a2.6973 2.6973 0 0 0 2.69-2.69v-8.62a2.7034 2.7034 0 0 0 -2.02-2.61zm-11.93-1.13a4.95 4.95 0 1 1 9.9 0v.02l.03 1.03h-9.96z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-4">Upgrade Required</h3>
            <p className="text-muted-foreground mb-6">
              The voice assistant feature is available to AI Pro and AI Basic
              subscribers. Get instant dental advice through natural voice
              conversations.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">24/7 voice consultations</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Professional dental guidance</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Instant pain relief advice</span>
              </div>
            </div>

            <Link href="/pro">
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CrownIcon className="mr-2 h-5 w-5" />
                Upgrade to Pro
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ProPlanRequired;
