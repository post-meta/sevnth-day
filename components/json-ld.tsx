type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "SEVENTH DAY",
  alternateName: "SVNTH.DAY",
  url: "https://sevnth.day",
  email: "01@sevnth.day",
  description:
    "Growth operations for service businesses: websites, local SEO, AI lead capture. Solo operator, Greater Seattle.",
  founder: {
    "@type": "Person",
    name: "Eugene Krasnoperov",
    sameAs: ["https://www.linkedin.com/in/ekrasnoperov"],
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Post Meta LLC",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Greater Seattle, WA",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "WA",
    addressCountry: "US",
  },
};

export const PERSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eugene Krasnoperov",
  url: "https://sevnth.day/about",
  jobTitle: "Founder, SEVENTH DAY",
  worksFor: { "@type": "Organization", name: "SEVENTH DAY" },
  email: "01@sevnth.day",
  sameAs: ["https://www.linkedin.com/in/ekrasnoperov"],
};
