import { currentUser } from '@clerk/nextjs/server';

export default async function WelcomeSection() {
  const user = await currentUser();

  return (
    <div className="relative z-10 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20 mb-12 overflow-hidden">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border backdrop-blur-sm">
          <div className="size-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-secondary-foreground">
            Online & Ready
          </span>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Good{' '}
            {new Date().getHours() < 12
              ? 'morning'
              : new Date().getHours() < 18
                ? 'afternoon'
                : 'evening'}
            , {user?.firstName}!
          </h1>
          <p className="text-muted-foreground">
            Your personal AI dental assistant is ready to help you maintain
            perfect oral health.
          </p>
        </div>
      </div>

      <div className="lg:flex hidden items-center justify-center size-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full ">
        <svg
          id="Bahan"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-primary fill-current"
        >
          <path
            d="m30.49 8.35-4.58-2.19a12.22 12.22 0 0 1 10.61-.05zm24.51 10.67a17.194 17.194 0 0 1 -3.47 10.84 1.142 1.142 0 0 0 -.23.63c-.24 11.82-4.44 23.55-10.23 28.54a.169.169 0 0 1 -.2.03.212.212 0 0 1 -.12-.22c0-10.64-3.84-18.98-8.75-18.98s-8.75 8.34-8.75 19.02a.187.187 0 0 1 -.31.15c-5.79-4.99-10-16.73-10.24-28.53a1.058 1.058 0 0 0 -.23-.64c-6.242-7-3.728-24.46 5.78-24.77a5.788 5.788 0 0 1 .92.07l10.84 5.17c.011-.01 5.54 2.651 5.55 2.65a1 1 0 1 0 .87-1.8l-3.43-1.64 11.79-4.37a6.322 6.322 0 0 1 .96-.08c5.1 0 9.25 6.25 9.25 13.93zm-4.2-1.56a12.962 12.962 0 0 0 -5.5-7.54 1 1 0 0 0 -1.07 1.68 10.885 10.885 0 0 1 4.01 13.56 1.007 1.007 0 0 0 .91 1.41.992.992 0 0 0 .91-.59 12.79 12.79 0 0 0 .74-8.52z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
