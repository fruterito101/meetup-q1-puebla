import { MapPin, BarChart3, BookOpen, Target, Trophy, Camera } from "lucide-react";
const logoFrutero = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772056454/logo-frutero_uu089k.png";
const localismLogo = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772056438/LocalismFund-logo-white_wfr9jk.png";
const ethCincoLogo = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772056432/ETHCincoDeMayo-logo_mcnmhs.png";
const ethereumLogo = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772062679/ethereum-logo_bdanwa.png";
const pina = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772061203/pina_j6618d.png";
const naranja = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772061199/naranja_j3g5dm.png";
const uva = "https://res.cloudinary.com/dpzywidxy/image/upload/v1772061206/uva_r0mv6p.png";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const navButtons = [
    { id: "metricas", label: "METRICS", icon: BarChart3, colorClass: "flex items-center justify-center bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-white px-2 sm:px-4 md:px-5 py-2 md:py-3 rounded-lg font-semibold transition-all uppercase text-[10px] md:text-xs lg:text-sm" },
    { id: "experiencia", label: "EXPERIENCE", icon: BookOpen, colorClass: "flex items-center justify-center bg-brand-red hover:bg-brand-red/90 text-white px-2 sm:px-4 md:px-5 py-2 md:py-3 rounded-lg font-semibold transition-all uppercase text-[10px] md:text-xs lg:text-sm" },
    { id: "impacto", label: "IMPACT", icon: Target, colorClass: "flex items-center justify-center bg-brand-yellow hover:bg-brand-yellow/90 text-white px-2 sm:px-4 md:px-5 py-2 md:py-3 rounded-lg font-semibold transition-all uppercase text-[10px] md:text-xs lg:text-sm" },
    { id: "photo-gallery", label: "GALLERY", icon: Camera, colorClass: "flex items-center justify-center bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-white px-2 sm:px-4 md:px-5 py-2 md:py-3 rounded-lg font-semibold transition-all uppercase text-[10px] md:text-xs lg:text-sm" },
  ];

  return (
    <section className="relative h-auto md:h-screen flex flex-col overflow-hidden bg-brand-light-blue md:bg-transparent">
      {/* Floating Fruit Decorations - Repositioned */}
      <img
        src={pina}
        alt="Pineapple decoration"
        className="fruit-decoration top-32 left-8 md:top-8 md:left-12 z-30 w-8 md:w-10"
        style={{ animationDelay: "0s" }}
      />
      <img
        src={uva}
        alt="Grape decoration"
        className="fruit-decoration top-36 left-[30%] md:top-1/2 md:left-[32%] z-30 w-6 md:w-8"
        style={{ animationDelay: "1s" }}
      />
      <img
        src={naranja}
        alt="Orange decoration"
        className="fruit-decoration top-32 right-8 md:top-32 md:right-12 z-30 w-8 md:w-10"
        style={{ animationDelay: "2s" }}
      />

      {/* Header - 3 columns */}
      <div className="relative z-20 flex h-12 md:h-16">
        {/* Left column - Dark Blue */}
        <div className="w-1/3 bg-brand-dark-blue"></div>

        {/* Center column - Yellow */}
        <div className="w-1/3 bg-brand-yellow"></div>

        {/* Right column - Red (empty now) */}
        <div className="w-1/3 bg-brand-red flex items-center justify-end px-2 md:px-6">
        </div>
      </div>

      {/* Body - 2 columns on desktop, stacked on mobile */}
      <div className="relative z-20 flex flex-col md:flex-row md:flex-1">
        {/* Left column - Red with logos (1/3) */}
        <div className="w-full md:w-1/3 bg-brand-red flex flex-row md:flex-col items-center justify-center gap-4 md:gap-12 py-6 md:py-16">
          <img
            src={ethereumLogo}
            alt="Ethereum Logo"
            className="h-12 md:h-20 lg:h-[92px] object-contain"
          />
          <img
            src={localismLogo}
            alt="Localism Fund"
            className="h-8 md:h-10 lg:h-12 object-contain"
          />
          <img
            src={logoFrutero}
            alt="Frutero Logo"
            className="h-7 md:h-9 lg:h-11 object-contain"
          />
          <img
            src={ethCincoLogo}
            alt="ETH Cinco de Mayo"
            className="h-12 md:h-20 lg:h-[96px] object-contain"
          />
        </div>

        {/* Right column - Light Blue with content (2/3) */}
        <div className="w-full md:w-2/3 bg-brand-light-blue flex flex-col items-center md:items-end justify-center px-4 md:px-8 py-12 md:py-16 relative">
          {/* Main Content */}
          <div className="text-center md:text-right w-full md:pr-12 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-white mb-2 md:mb-4 leading-tight">
              Meetups Frutales Q1 2026
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-[2.25rem] lg:text-[2.75rem] font-semibold text-white mb-4 md:mb-8 leading-tight">
              ¡Bienvenidos a Ethereum!
            </h2>
            <h3 className="text-sm sm:text-base md:text-2xl lg:text-3xl font-bold text-brand-dark-blue uppercase tracking-wide mb-6 md:mb-6">
              Onboarding & Fundamentos
            </h3>

            {/* New Location & Date Position */}
            <div className="flex items-center justify-center md:justify-end gap-2 text-white mb-8 md:mb-12">
              <MapPin className="w-4 h-4 md:w-6 md:h-6" />
              <span className="font-bold text-base md:text-xl">PUEBLA</span>
              <span className="mx-2 opacity-50">|</span>
              <span className="font-bold text-base md:text-xl uppercase tracking-wider">FEBRUARY 13, 2026</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-3 md:gap-4 w-full md:pr-12">
            {navButtons.map((button) => {
              const IconComponent = button.icon;
              return (
                <button
                  key={button.id}
                  onClick={() => onNavigate(button.id)}
                  className={button.colorClass}
                >
                  <IconComponent className="w-4 h-4 inline-block mr-2" />
                  {button.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
