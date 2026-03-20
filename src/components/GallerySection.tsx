import { Youtube, Award, Megaphone, ExternalLink, Camera } from "lucide-react";

// Custom X (formerly Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const GallerySection = () => {
  const mediaLinks = [
    {
      title: "YouTube Recording",
      icon: <Youtube className="w-8 h-8" />,
      link: "https://www.youtube.com/live/Ak0iPq8LjP8",
      bgColor: "bg-brand-red",
    },
    {
      title: "X Recording",
      icon: <XIcon className="w-8 h-8" />,
      link: "https://x.com/i/broadcasts/1kvJpMvLnboxE",
      bgColor: "bg-brand-dark-blue",
    },
    {
      title: "POAP Collection",
      icon: <Award className="w-8 h-8" />,
      link: "https://collectors.poap.xyz/mint-website/across-build-case",
      bgColor: "bg-brand-light-blue",
    },
    {
      title: "Official Announcement",
      icon: <Megaphone className="w-8 h-8" />,
      link: "https://x.com/fruteroclub/status/2016986018449084779",
      bgColor: "bg-brand-yellow",
    },
  ];

  const socialMentions = [
    { handle: "@EmaCr1pto", platform: "X/Twitter" },
    { handle: "@EstefhanyMV", platform: "X/Twitter" },
    { handle: "@waralotito", platform: "X/Twitter" },
    { handle: "@obag7", platform: "X/Twitter" },
    { handle: "@driade_1", platform: "X/Twitter" },
    { handle: "@fruteroclub", platform: "X/Twitter (Official)" },
  ];

  return (
    <section id="media" className="section-container pb-4 md:pb-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center text-gray-400">
          <Camera className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-gray-400" />
          <span>Media</span>
        </h2>

        {/* Content Archive */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Content Archive</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mediaLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-frutal ${item.bgColor} ${item.bgColor === 'bg-brand-light-blue' || item.bgColor === 'bg-brand-yellow' ? 'text-foreground' : 'text-white'} group transition-transform hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Mentions */}
        <div>
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Social Media Mentions</h3>
          <div className="card-frutal">
            <div className="flex flex-wrap gap-3">
              {socialMentions.map((mention, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium flex items-center gap-2"
                >
                  <XIcon className="w-4 h-4 text-brand-dark-blue" />
                  {mention.handle}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Participants and collaborators shared their experience on social media,
              amplifying the reach of the event and building momentum for future meetups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
