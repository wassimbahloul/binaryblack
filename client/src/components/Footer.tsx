import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-12">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand compact */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              
              <div>
                <span className="font-bold text-lg block">BinaryBlack</span>
                <span className="text-gray-400 text-xs">Solutions IA & digitales</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">Des solutions d'IA conçues pour la performance et la sécurité — design moderne et intégration robuste.</p>
            <div className="flex gap-3 mt-2">
              <a href="https://linkedin.com/company/binaryblack" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin size={18} /></a>
              <a href="https://twitter.com/binaryblack" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Twitter size={18} /></a>
              <a href="https://github.com/binaryblack" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Github size={18} /></a>
            </div>
          </div>

          {/* Links compact */}
          <div className="flex justify-between md:justify-center gap-8">
            <div>
              <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-3">Sitemap</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-gray-300 hover:text-white">Accueil</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white">À propos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-gray-300 hover:text-white">Computer Vision & IA</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white">Développement Web & Mobile</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white">Services Cloud</a></li>
              </ul>
            </div>
          </div>

          {/* Contact compact (aligned to the right on md+) */}
          <div className="text-sm md:text-right md:flex md:flex-col md:items-end md:justify-self-end">
            <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-3"></h4>
            <div className="flex flex-col gap-3 text-gray-300 items-start md:items">
              <a href="mailto:contact@binaryblack.com" className="flex items-center gap-3">
                <Mail size={16} className="text-gray-300" />
                <span className="text-gray-400 text-xs font-semibold">Email</span>
                <span>contact@binaryblack.tn</span>
              </a>
              <a href="tel:+21699180650" className="flex items-center gap-3">
                <Phone size={16} className="text-gray-300" />
                <span className="text-gray-400 text-xs font-semibold">Téléphone</span>
                <span>+216 99 180 650</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gray-300" />
                <span className="text-gray-400 text-xs font-semibold">Adresse</span>
                <span>Sfax, Tunisie</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small footer line */}
        <div className="mt-6 border-t border-gray-800 pt-4">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>© 2026 BinaryBlack. Tous droits réservés.</span>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-white">Politique de confidentialité</a>
              <a href="/terms" className="hover:text-white">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
