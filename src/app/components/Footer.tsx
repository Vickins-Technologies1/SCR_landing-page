import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { site } from "@/lib/site";

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
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              {["Transparent reporting", "Vetted vendors", "Tenant screening", "Owner portal access"].map((t) => (
                <span key={t} className="rounded-full border border-border/60 bg-background/60 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {[
                { href: site.social.facebook, label: "Facebook", icon: FaFacebookF },
                { href: site.social.x, label: "X (Twitter)", icon: FaXTwitter },
                { href: site.social.instagram, label: "Instagram", icon: FaInstagram },
                { href: site.social.tiktok, label: "TikTok", icon: FaTiktok },
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
              <a
                href={site.portal.marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                Market Place
              </a>
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
              <p>{site.contact.address}</p>
              {site.contact.phones.map((p) => (
                <a key={p} href={`tel:${p}`} className="block hover:text-primary transition-colors">
                  {p.replace("+254", "+254 ").replace(/(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3")}
                </a>
              ))}
              <a
                href={`mailto:${site.contact.email}`}
                className="block hover:text-primary transition-colors break-all"
              >
                {site.contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sorana Property Managers Limited. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.vickinstechnologies.com/"
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
