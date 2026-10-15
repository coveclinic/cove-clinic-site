import type { NextConfig } from "next";

/** The treatment pages lived at the root on the old site; they now live under /treatments. */
const oldTreatmentPaths = [
  "free-consultation",
  "facials",
  "anti-wrinkle-injections",
  "chemical-peels",
  "microneedling",
  "polynucleotides",
  "dermal-fillers",
  "lip-enhancement",
  "skin-boosters",
  "prp",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...oldTreatmentPaths.map((p) => ({ source: `/${p}`, destination: `/treatments/${p}`, permanent: true })),
      // The old site's fillers page had an odd address.
      { source: "/about-6", destination: "/treatments/dermal-fillers", permanent: true },
    ];
  },
};

export default nextConfig;
