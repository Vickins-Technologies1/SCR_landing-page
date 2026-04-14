import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-muted/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <p className="eyebrow">Sorana</p>
            <h3 className="text-2xl font-semibold">Property Managers Limited</h3>
            <p className="text-sm text-muted-foreground">
              Caring for your property, protecting your investment with a premium, transparent, and tech-forward experience.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "https://www.facebook.com/share/18Fx8TFFCZ/", label: "Facebook", icon: FaFacebookF },
                { href: "https://tinyurl.com/2p4hkmsv", label: "X (Twitter)", icon: FaXTwitter },
                { href: "https://www.instagram.com/sorana_2026?igsh=ZzdpZXpneHBpa3Z1", label: "Instagram", icon: FaInstagram },
                { href: "https://www.tiktok.com/@soranapropertymanagers?_r=1&_t=ZS-95UtLwUR8Dw", label: "TikTok", icon: FaTiktok },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all hover:bg-primary-hover hover:scale-105"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Company</p>
            <div className="space-y-2 text-sm">
              <a href="/about" className="block hover:text-primary transition-colors">About Us</a>
              <a href="/how-it-works" className="block hover:text-primary transition-colors">How It Works</a>
              <a href="/pricing" className="block hover:text-primary transition-colors">Pricing</a>
              <a href="/contact-us" className="block hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Services</p>
            <div className="space-y-2 text-sm">
              <span className="block text-muted-foreground">Lease Administration</span>
              <span className="block text-muted-foreground">Tenant Screening</span>
              <span className="block text-muted-foreground">Maintenance Oversight</span>
              <span className="block text-muted-foreground">Owner Reporting</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Kerugoya, Kenya</p>
              <a href="tel:+254117649850" className="block hover:text-primary transition-colors">+254 117 649 850</a>
              <a href="tel:+254702036837" className="block hover:text-primary transition-colors">+254 702 036 837</a>
              <a href="mailto:soranapropertymanagers@gmail.com" className="block hover:text-primary transition-colors break-all">
                soranapropertymanagers@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sorana Property Managers Limited. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://vickins-technologies.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Vickins Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
