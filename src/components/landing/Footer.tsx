import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="px-6 py-12 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <svg
                id="Bahan"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11"
              >
                <path
                  d="m30.49 8.35-4.58-2.19a12.22 12.22 0 0 1 10.61-.05zm24.51 10.67a17.194 17.194 0 0 1 -3.47 10.84 1.142 1.142 0 0 0 -.23.63c-.24 11.82-4.44 23.55-10.23 28.54a.169.169 0 0 1 -.2.03.212.212 0 0 1 -.12-.22c0-10.64-3.84-18.98-8.75-18.98s-8.75 8.34-8.75 19.02a.187.187 0 0 1 -.31.15c-5.79-4.99-10-16.73-10.24-28.53a1.058 1.058 0 0 0 -.23-.64c-6.242-7-3.728-24.46 5.78-24.77a5.788 5.788 0 0 1 .92.07l10.84 5.17c.011-.01 5.54 2.651 5.55 2.65a1 1 0 1 0 .87-1.8l-3.43-1.64 11.79-4.37a6.322 6.322 0 0 1 .96-.08c5.1 0 9.25 6.25 9.25 13.93zm-4.2-1.56a12.962 12.962 0 0 0 -5.5-7.54 1 1 0 0 0 -1.07 1.68 10.885 10.885 0 0 1 4.01 13.56 1.007 1.007 0 0 0 .91 1.41.992.992 0 0 0 .91-.59 12.79 12.79 0 0 0 .74-8.52z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-semibold text-lg">DentalHelp</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered dental assistance that actually helps.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 DentalHelp. Built for real people with real dental
            questions.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
