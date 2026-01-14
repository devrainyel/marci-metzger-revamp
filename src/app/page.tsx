import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ValuePropositionSection from "./components/home/ValuePropositionSection";
import StatsSection from "./components/home/StatsSection";
import ServiceSection from "./components/home/ServiceSection";
import SocialsSection from "./components/home/SocialsSection";
import ContactSection from "./components/home/ContactSection";
import ContactMap from "./components/home/ContactMap"


export default function Home() {
  // JSON-LD Structured Data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "The Ridge Realty Group",
    "description": "Expert Pahrump NV real estate agent with 30+ years experience. Specializing in Southern Nevada homes, land, and commercial properties.",
    "url": "https://www.theridgerealtygroup.com",
    "telephone": "(725) 900-8040",
    "email": "marci@theridgerealtygroup.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "781 W. Mesquite Ave. Ste 100",
      "addressLocality": "Pahrump",
      "addressRegion": "NV",
      "postalCode": "89048",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.2082",
      "longitude": "-115.9839"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "image": "https://www.theridgerealtygroup.com/marci-metzger.png",
    "founder": {
      "@type": "Person",
      "name": "Marci Metzger",
      "jobTitle": "Managing Broker / Owner",
      "hasOccupation": {
        "@type": "Occupation",
        "description": "Real Estate Broker",
        "occupationLocation": {
          "@type": "Place",
          "name": "Pahrump, NV"
        }
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Pahrump, NV and Southern Nevada"
    },
    "knowsLanguage": "English",
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Real Estate Services",
          "description": "Buying and selling homes in Pahrump NV"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Real Estate Services",
          "description": "Commercial property sales and leasing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Land Sales",
          "description": "Land and lot sales in Southern Nevada"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
       <HeroSection />
       <AboutSection />
       <ValuePropositionSection />
       <StatsSection />
       <ServiceSection />
       <SocialsSection />
       <ContactSection />
       <ContactMap />
      </main>
    </>
  );
}
