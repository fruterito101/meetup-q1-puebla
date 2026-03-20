import { Image as ImageIcon } from "lucide-react";

const PhotoGallery = () => {
    const images = [
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986934/photo_5037759333134961701_y_wi119m.jpg", alt: "Puebla Event Photo 1" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986931/photo_5037759333134961703_y_jr3fap.jpg", alt: "Puebla Event Photo 2" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986929/photo_5037759333134961700_y_igmn7l.jpg", alt: "Puebla Event Photo 3" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986929/photo_5037759333134961697_y_uld3q3.jpg", alt: "Puebla Event Photo 4" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986918/photo_5019545046847523771_y_bjspam.jpg", alt: "Puebla Event Photo 5" },
    ];

    return (
        <section id="photo-gallery" className="section-container pt-8 md:pt-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title text-center">
                    <ImageIcon className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-brand-dark-blue" />
                    <span className="text-brand-dark-blue">Gallery</span>
                </h2>

                {/* Grid uniforme */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img, index) => (
                        <div key={index} className="card-frutal p-2 overflow-hidden group">
                            <div className="aspect-[4/3] overflow-hidden rounded-lg">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhotoGallery;
