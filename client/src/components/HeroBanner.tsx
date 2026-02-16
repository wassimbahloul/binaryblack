export default function HeroBanner() {
  return (
    // Reduced hero min-height so following sections (e.g. "Excellence Garantie") are visible
    // without excessive scrolling on common desktop viewports.
    <section className="relative min-h-[420px] md:min-h-[50vh] bg-black overflow-hidden pt-12">
      {/* Background Image Layer */}
      <div className="absolute inset-x-0 bottom-0 top-16">
        <img
          src="/banner_final_no_text.png"
          alt="Propriétaire BinaryBlack"
          className="w-full h-full object-contain object-right "
        />
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
      </div>

      {/* Content Layer */}
      <div className="relative min-h-[calc(420px-3rem)] md:min-h-[calc(50vh-3rem)] flex items-center">
        <div className="container py-10 md:py-14">
          <div className="max-w-3xl">
            {/* Main Headline - No subtitle */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 md:mb-6">
              L'innovation n'est pas une destination, c'est un voyage continu vers l'excellence.
            </h1>
            
            {/* Description */}
            <p className="text-white/85 text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
              Transformez votre vision en réalité avec nos solutions d'IA de pointe et notre expertise technologique.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black font-semibold rounded-sm shadow-lg hover:bg-gray-100 transition-all duration-200 text-center"
              >
                Contactez-nous
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/40 text-white font-medium rounded-sm hover:bg-white/10 hover:border-white/60 transition-all duration-200 text-center"
              >
                Découvrir nos services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
