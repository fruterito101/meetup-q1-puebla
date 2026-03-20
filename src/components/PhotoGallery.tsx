import { Image as ImageIcon } from "lucide-react";

const PhotoGallery = () => {
    const images = [
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986934/photo_5037759333134961701_y_wi119m.jpg", alt: "Puebla Event Photo 1" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986931/photo_5037759333134961703_y_jr3fap.jpg", alt: "Puebla Event Photo 2" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986929/photo_5037759333134961700_y_igmn7l.jpg", alt: "Puebla Event Photo 3" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986929/photo_5037759333134961697_y_uld3q3.jpg", alt: "Puebla Event Photo 4" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986918/photo_5019545046847523771_y_bjspam.jpg", alt: "Puebla Event Photo 5" },
    ];

    const lumaImages = [
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773988248/Luma-1_yihnik.png", alt: "Luma Event 1" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773988249/Luma-2_naftsk.jpg", alt: "Luma Event 2" },
    ];

    const screenshotImages = [
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986904/Captura_de_pantalla_2026-03-19_223744_kdfrgq.png", alt: "Screenshot 1" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986904/Captura_de_pantalla_2026-03-19_223431_gjunxe.png", alt: "Screenshot 2" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986903/Captura_de_pantalla_2026-03-19_223033_jbfca1.png", alt: "Screenshot 3" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986902/Captura_de_pantalla_2026-03-19_223310_cqqgyv.png", alt: "Screenshot 4" },
        { src: "https://res.cloudinary.com/dwqqk1pzk/image/upload/v1773986903/Captura_de_pantalla_2026-03-19_223635_xjmvhd.png", alt: "Screenshot 5" },
    ];

    return (
        <section id="photo-gallery" className="section-container pt-8 md:pt-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title text-center">
                    <ImageIcon className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-brand-dark-blue" />
                    <span className="text-brand-dark-blue">Gallery</span>
                </h2>

                {/* Photos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
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

                {/* Luma Images - 2 columns */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {lumaImages.map((img, index) => (
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

                {/* Screenshots Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {screenshotImages.map((img, index) => (
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
