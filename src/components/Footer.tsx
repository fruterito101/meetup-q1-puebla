import { Mail } from "lucide-react";
const logoFrutero = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772056454/logo-frutero_uu089k.png";
const localismLogo = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772056438/LocalismFund-logo-white_wfr9jk.png";
const ethCincoLogo = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772056432/ETHCincoDeMayo-logo_mcnmhs.png";
const ethereumLogo = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772062679/ethereum-logo_bdanwa.png";

const Footer = () => {
  return (
    <footer className="bg-brand-dark-blue text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Report Info */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold mb-4">Event Report</h3>
          <div className="space-y-1 text-white/80">
            <p>Submission Date: 03/20/2026</p>
            <p>Prepared by: Frutero Team - CDMX Regional Coordinators</p>
            <p>Program: Meetups Frutales - ETHCDM</p>
            <p>Grant: Localism Fund Round 02</p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mb-12">
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Mail className="w-4 h-4" />
            <span>Jazmín Orozco - Community Lead</span>
          </div>
          <a
            href="mailto:jazz@frutero.club"
            className="text-brand-yellow hover:underline"
          >
            jazz@frutero.club
          </a>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          <img src={ethereumLogo} alt="Ethereum" className="h-10 brightness-0 invert opacity-70" />
          <img src={localismLogo} alt="Localism Fund" className="h-7 object-contain" />
          <img src={logoFrutero} alt="Frutero" className="h-6 object-contain" />
          <img src={ethCincoLogo} alt="ETH Cinco de Mayo" className="h-14 object-contain" />
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>© 2026 Frutero Club. All rights reserved.</p>
          <p className="mt-1">Let's Fruta Build!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
