import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-muted-foreground text-sm mb-6 md:mb-0">
          © {new Date().getFullYear()} Sorana Property Managers Limited. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://shorturl.at/1QsHn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all hover:bg-primary-hover hover:scale-110 hover:shadow-lg"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://tinyurl.com/2p4hkmsv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all hover:bg-primary-hover hover:scale-110 hover:shadow-lg"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all hover:bg-primary-hover hover:scale-110 hover:shadow-lg"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://shorturl.at/DYjcZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all hover:bg-primary-hover hover:scale-110 hover:shadow-lg"
          >
            <FaTiktok size={18} />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          Developed by{" "}
          <a
            href="https://vickins-technologies-lv2h.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Vickins Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}