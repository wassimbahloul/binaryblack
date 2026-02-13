import { ArrowLeft, CheckCircle2, Cloud, Database, Shield, Zap } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceCloud() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-black font-medium mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} />
            Retour
          </button>
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Services Cloud
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Infrastructure Cloud Scalable et Sécurisée. Hébergez vos applications et données sur une plateforme cloud moderne et fiable, avec disponibilité 99.99%.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Vue d'ensemble</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nos solutions cloud offrent une infrastructure flexible et économique pour vos applications. Que vous ayez besoin d'hébergement simple ou d'une architecture complexe, nous avons la solution adaptée.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Bénéficiez d'une scalabilité automatique, de sauvegardes redondantes et d'une sécurité de classe entreprise.
              </p>
              <ul className="space-y-3">
                {[
                  "Infrastructure hautement disponible (99.99%)",
                  "Scalabilité automatique et élastique",
                  "Sauvegardes automatiques et redondantes",
                  "Monitoring et alertes en temps réel",
                  "Conformité RGPD et ISO 27001"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-black flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg flex items-center justify-center p-0">
              <div className="text-center">
                <div className="image-card">
                  <img
                    src="/cloud.png"
                    alt="Services Cloud"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Nos Offres Cloud</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Cloud size={32} />,
                title: "Infrastructure as a Service (IaaS)",
                description: "Serveurs virtuels, stockage et réseautage. Gérez complètement votre infrastructure avec flexibilité totale."
              },
              {
                icon: <Database size={32} />,
                title: "Platform as a Service (PaaS)",
                description: "Déployez vos applications sans gérer l'infrastructure sous-jacente. Concentrez-vous sur le code."
              },
              {
                icon: <Zap size={32} />,
                title: "Serverless Computing",
                description: "Exécutez du code à la demande sans provisionner de serveurs. Payez uniquement ce que vous utilisez."
              },
              {
                icon: <Database size={32} />,
                title: "Managed Databases",
                description: "Bases de données gérées entièrement. PostgreSQL, MySQL, MongoDB, Redis et plus."
              }
            ].map((service, idx) => (
              <div key={idx} className="p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-black mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Caractéristiques Clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={32} />,
                title: "Sécurité Avancée",
                description: "Chiffrement end-to-end, pare-feu, VPN et détection des menaces en temps réel."
              },
              {
                icon: <Zap size={32} />,
                title: "Performance Optimale",
                description: "CDN global, caching intelligent et optimisation automatique des ressources."
              },
              {
                icon: <Cloud size={32} />,
                title: "Migration Facile",
                description: "Outils de migration assistée et support complet pour passer du legacy au cloud."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-black mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Tarification Flexible</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nous proposons des modèles de tarification flexibles basés sur votre utilisation réelle. Pas de frais cachés, transparence totale. Commencez petit et évolutionnez au fur et à mesure de la croissance de votre entreprise.
            </p>
            <button className="px-8 py-3 bg-black text-white font-medium rounded-sm hover:bg-gray-900 transition-colors duration-200">
              Calculer votre Devis
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Migrer Vers le Cloud?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe d'experts cloud pour discuter de votre stratégie de migration et découvrir comment nous pouvons optimiser vos opérations.
          </p>
          <button className="px-8 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-100 transition-colors duration-200">
            Consulter nos Experts
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
