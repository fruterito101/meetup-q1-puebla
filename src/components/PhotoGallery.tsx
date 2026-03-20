import { Image as ImageIcon } from "lucide-react";

const PhotoGallery = () => {
    const verticalImages = [
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053949/1_cq5u0x.jpg", alt: "Event Photo 1" },
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053950/2_mj2phv.jpg", alt: "Event Photo 2" },
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053951/3_dldpph.jpg", alt: "Event Photo 3" },
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053961/12_dppj8b.jpg", alt: "Event Photo 4" },
    ];

    const secondRowImages = [
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053953/5_b6klzt.jpg", alt: "Event Photo 5" },
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053953/6_pdpn13.jpg", alt: "Event Photo 6" },
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053955/7_dtz0oa.jpg", alt: "Event Photo 7" },
    ];

    const thirdRowImages = [
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053955/8_rqxgis.png", alt: "Event Photo 8" },
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053957/9_sdldlj.png", alt: "Event Photo 9" },
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053958/10_itue3x.png", alt: "Event Photo 10" },
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053960/11_cpiulq.jpg", alt: "Event Photo 11" },
    ];

    const finalImages = [
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053947/12_llh5w4.png", alt: "Event Photo 12" },
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053947/13_vdrvh4.png", alt: "Event Photo 13" },
        { src: "https://res.cloudinary.com/dpzywidxy/image/upload/v1772053948/14_tkzjla.png", alt: "Event Photo 14" },
    ];

    return (
        <section id="photo-gallery" className="section-container pt-8 md:pt-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title text-center">
                    <ImageIcon className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-brand-dark-blue" />
                    <span className="text-brand-dark-blue">Gallery</span>
                </h2>

                {/* Vertical Images Grid - Row 1 */}
                <div className="mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {verticalImages.map((img, index) => (
                            <div key={index} className="card-frutal p-2 overflow-hidden group">
                                <div className="aspect-[2/3] overflow-hidden rounded-lg">
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

                {/* Horizontal Images Grid - Row 2 */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {secondRowImages.map((img, index) => (
                            <div key={index} className="card-frutal p-2 overflow-hidden group flex items-center justify-center">
                                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center">
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

                {/* Centered 2x2 Grid - Row 3 */}
                <div className="mb-12">
                    <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {thirdRowImages.map((img, index) => (
                            <div
                                key={index}
                                className="card-frutal p-4 overflow-hidden group flex items-center justify-center h-[240px] md:h-[320px]"
                            >
                                <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg bg-muted/30">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className={`max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${img.src === '/11.jpg' ? 'scale-75' : ''}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final Row - Row 4 */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {finalImages.map((img, index) => (
                            <div key={index} className="card-frutal p-2 overflow-hidden group flex items-center justify-center h-[200px] md:h-[280px]">
                                <div className="w-full h-full overflow-hidden rounded-lg bg-muted flex items-center justify-center">
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
            </div>
        </section>
    );
};

export default PhotoGallery;
