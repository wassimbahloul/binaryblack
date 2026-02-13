import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-black mb-4">404</h1>
          <h2 className="text-4xl font-bold text-black mb-4">Page non trouvée</h2>
          <p className="text-xl text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-medium rounded-sm hover:bg-gray-900 transition-colors duration-200"
        >
          <ArrowLeft size={18} />
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
