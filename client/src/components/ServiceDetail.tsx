import * as React from "react";
import { ChevronRight, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServiceDetail({
  service,
  onBack,
}: {
  service: string;
  onBack: () => void;
}) {
  const services: Record<string, any> = {
    "presence-absence": {
      title: "Présence & Absence",
      subtitle: "Suivi de présence automatisé",
      description: "Système intelligent de détection et suivi de présence en temps réel.",
      features: [
        "Détection faciale automatique",
        "Suivi en temps réel 24/7",
        "Rapports détaillés et analytics",
        "Intégration RH/Paie",
        "Alertes en cas d'anomalie",
        "Historique complet",
      ],
      benefits: [
        "Réduction des fraudes de présence",
        "Automatisation de la gestion RH",
        "Données précises pour la paie",
        "Amélioration de la productivité",
      ],
    },
    "performance-securite": {
      title: "Performance & Sécurité",
      subtitle: "Analyse comportementale avancée",
      description: "Analyse comportementale pour optimiser la performance et la sécurité.",
      features: [
        "Détection de comportements anormaux",
        "Analyse des zones à risque",
        "Alertes de sécurité instantanées",
        "Rapports de conformité",
        "Heatmaps de circulation",
        "Statistiques détaillées",
      ],
      benefits: [
        "Amélioration de la sécurité",
        "Optimisation des espaces",
        "Conformité réglementaire",
        "Réduction des incidents",
      ],
    },
    "securite-equipements": {
      title: "Sécurité Équipements",
      subtitle: "Contrôle EPI intelligent",
      description: "Vérification automatique du port des équipements de protection individuelle.",
      features: [
        "Détection du port d'EPI",
        "Alertes en temps réel",
        "Conformité OSHA/ISO",
        "Rapports d'audit",
        "Historique des violations",
        "Intégration avec systèmes existants",
      ],
      benefits: [
        "Conformité réglementaire garantie",
        "Réduction des accidents",
        "Responsabilité légale couverte",
        "Culture de sécurité renforcée",
      ],
    },
    "gestion-factures": {
      title: "Gestion Factures",
      subtitle: "OCR & extraction intelligente",
      description: "Extraction automatique de données de factures avec OCR haute précision.",
      features: [
        "OCR multilingue haute précision",
        "Extraction automatique de champs",
        "Validation des données",
        "Intégration comptable",
        "Archivage numérique",
        "Traçabilité complète",
      ],
      benefits: [
        "Réduction du traitement manuel",
        "Erreurs minimisées",
        "Conformité fiscale",
        "Économies de temps",
      ],
    },
    "plateformes-web": {
      title: "Plateformes Web",
      subtitle: "Applications réactives et modernes",
      description: "Développement de plateformes web haute performance avec technologies modernes.",
      features: [
        "React, Vue, Angular",
        "Responsive design",
        "Progressive Web Apps",
        "SEO optimisé",
        "Performance maximale",
        "Sécurité avancée",
      ],
      benefits: [
        "Expérience utilisateur exceptionnelle",
        "Compatibilité multi-navigateurs",
        "Scalabilité garantie",
        "Maintenance facile",
      ],
    },
    "mobile-applications": {
      title: "Mobile Applications",
      subtitle: "iOS & Android natifs",
      description: "Applications mobiles natives haute performance pour iOS et Android.",
      features: [
        "Swift & Kotlin natifs",
        "Interface intuitive",
        "Offline capability",
        "Push notifications",
        "Analytics intégrés",
        "App Store ready",
      ],
      benefits: [
        "Performance optimale",
        "Accès aux APIs natives",
        "Expérience utilisateur premium",
        "Monétisation facile",
      ],
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      subtitle: "Design d'interface utilisateur",
      description: "Conception d'interfaces utilisateur modernes et intuitives.",
      features: [
        "Wireframing & prototypage",
        "Design system complet",
        "User research",
        "Accessibility (WCAG)",
        "Animation & interactions",
        "Responsive design",
      ],
      benefits: [
        "Engagement utilisateur accru",
        "Réduction du taux de rebond",
        "Conversion optimisée",
        "Marque cohérente",
      ],
    },
    "integration-api": {
      title: "Intégration API",
      subtitle: "Connectivité transparente",
      description: "Intégration d'APIs tierces et développement d'APIs personnalisées.",
      features: [
        "REST & GraphQL APIs",
        "Webhooks & événements",
        "Authentification sécurisée",
        "Rate limiting & throttling",
        "Documentation complète",
        "Support 24/7",
      ],
      benefits: [
        "Écosystème intégré",
        "Automatisation des workflows",
        "Données en temps réel",
        "Scalabilité garantie",
      ],
    },
    "iaas-infrastructure": {
      title: "IaaS & Infrastructure",
      subtitle: "Infrastructure élastique",
      description: "Infrastructure cloud élastique et sécurisée pour vos applications.",
      features: [
        "AWS, Azure, GCP",
        "Auto-scaling",
        "Load balancing",
        "Disaster recovery",
        "Backup automatique",
        "Monitoring 24/7",
      ],
      benefits: [
        "Coûts optimisés",
        "Haute disponibilité",
        "Sécurité renforcée",
        "Performance garantie",
      ],
    },
    "platform-service": {
      title: "Platform as a Service",
      subtitle: "PaaS managé",
      description: "Plateforme managée pour déployer et gérer vos applications.",
      features: [
        "Déploiement simplifié",
        "Scaling automatique",
        "Monitoring intégré",
        "Logs centralisés",
        "CI/CD pipeline",
        "Environnements multiples",
      ],
      benefits: [
        "Time-to-market réduit",
        "Maintenance minimale",
        "Coûts prévisibles",
        "Productivité maximale",
      ],
    },
    "managed-databases": {
      title: "Managed Databases",
      subtitle: "Bases de données haute disponibilité",
      description: "Services de bases de données managées avec haute disponibilité.",
      features: [
        "PostgreSQL, MySQL, MongoDB",
        "Réplication automatique",
        "Backups continus",
        "Point-in-time recovery",
        "Performance tuning",
        "Sécurité avancée",
      ],
      benefits: [
        "Zéro downtime",
        "Données sécurisées",
        "Performance optimale",
        "Conformité RGPD",
      ],
    },
    "support-monitoring": {
      title: "Support & Monitoring",
      subtitle: "Supervision 24/7",
      description: "Monitoring continu et support technique 24/7 pour vos services.",
      features: [
        "Monitoring en temps réel",
        "Alertes proactives",
        "Incident management",
        "Support technique 24/7",
        "SLA garantis",
        "Rapports mensuels",
      ],
      benefits: [
        "Disponibilité garantie",
        "Problèmes détectés rapidement",
        "Résolution rapide",
        "Tranquillité d'esprit",
      ],
    },
  };

  const serviceData = services[service];
  if (!serviceData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onBack} />
      <Card className="z-10 max-w-3xl w-full">
        <div className="flex items-start justify-between px-6">
          <div>
            <div className="text-sm font-semibold text-cyan-600 mb-1">SERVICE DÉTAILLÉ</div>
            <h2 className="text-2xl font-bold text-black">{serviceData.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{serviceData.subtitle}</p>
          </div>
          <div className="ml-4">
            <Button variant="ghost" onClick={onBack} aria-label="Retour">
              <ChevronRight className="rotate-180" />
            </Button>
          </div>
        </div>

        <div className="px-6 py-4">
          <p className="text-gray-700 mb-6">{serviceData.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Caractéristiques</h3>
              <ul className="space-y-2">
                {serviceData.features.map((f: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center text-white mt-1">
                      <Check size={14} />
                    </div>
                    <div className="text-gray-700">{f}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Avantages</h3>
              <div className="space-y-3">
                {serviceData.benefits.map((b: string, idx: number) => (
                  <Card key={idx} className="p-4 border-gray-100">
                    <p className="text-gray-900 font-medium">{b}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-2 flex justify-end">
          <Button onClick={onBack} className="">Retour</Button>
        </div>
      </Card>
    </div>
  );
}
