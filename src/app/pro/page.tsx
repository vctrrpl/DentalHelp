import Navbar from '@/components/Navbar';
import { PricingTable } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

async function ProPage() {
  const user = await currentUser();

  if (!user) redirect('/');

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* PRO UPGRADE HERO SECTION */}
        <div className="mb-12 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border backdrop-blur-sm">
              <svg
                id="crown-alt"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-primary fill-current"
              >
                <path
                  d="m4.863 15.876-1.819-7.033a1.174 1.174 0 0 1 1.783-1.286l2.316 1.543a.978.978 0 0 0 1.428-.4l2.364-5.029a1.174 1.174 0 0 1 2.124 0l2.37 5.032a.978.978 0 0 0 1.427.4l2.317-1.545a1.174 1.174 0 0 1 1.783 1.286l-1.819 7.033a1.5 1.5 0 0 1 -1.452 1.123h-11.37a1.5 1.5 0 0 1 -1.452-1.124zm14.387 4.124a.75.75 0 0 0 -.75-.75h-13a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 .75-.75z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm font-medium text-secondary-foreground">
                Upgrade to Pro
              </span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Unlock Premium AI Dental Care
              </h1>
              <p className="text-muted-foreground">
                Get unlimited AI consultations, advanced features, and priority
                support to take your dental health to the next level.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
              <svg
                id="crown-alt-large"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-primary"
                fill="currentColor"
              >
                <path
                  d="m4.863 15.876-1.819-7.033a1.174 1.174 0 0 1 1.783-1.286l2.316 1.543a.978.978 0 0 0 1.428-.4l2.364-5.029a1.174 1.174 0 0 1 2.124 0l2.37 5.032a.978.978 0 0 0 1.427.4l2.317-1.545a1.174 1.174 0 0 1 1.783 1.286l-1.819 7.033a1.5 1.5 0 0 1 -1.452 1.123h-11.37a1.5 1.5 0 0 1 -1.452-1.124zm14.387 4.124a.75.75 0 0 0 -.75-.75h-13a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 .75-.75z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* PRICING SECTION */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Choose Your Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your dental care needs. All plans
              include secure access and bank-level encryption
            </p>
          </div>

          <PricingTable />
        </div>
      </div>
    </>
  );
}

export default ProPage;
