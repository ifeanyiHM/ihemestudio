/**
 * Renders a JSON-LD <script> tag for structured data (Google rich results).
 * Drop into any page's server component.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Iheme Studio",
  url: "https://iheme.studio",
  logo: "https://iheme.studio/logo.png",
  description:
    "Software engineering studio specializing in React, Next.js, TypeScript, and full-stack development. Based in Lagos, Nigeria.",
  email: "ifeanyihm@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [
    "https://github.com/ifeanyiHM",
    "https://www.linkedin.com/in/ifeanyihm/",
    "https://twitter.com/ifeanyimichaell",
  ],
};
