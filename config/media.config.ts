import logo from "@/assets/logo.png";
import heroCnc3d from "@/assets/hero-cnc-3d.jpg";
import heroCnc from "@/assets/hero-cnc.jpg";
import facility from "@/assets/facility.jpg";
import facility3d from "@/assets/facility-3d.jpg";
import teamGroupPhoto from "@/assets/team-group-photo.jpg";
import aerospaceParts from "@/assets/aerospace-parts.jpg";
import agricultureParts from "@/assets/agriculture-parts.jpg";
import machineToolsParts from "@/assets/machine-tools-parts.jpg";
import medicalParts from "@/assets/medical-parts.jpg";
import directorMadhu from "@/assets/1.4a-Madhu sir.png";
import directorNarayana from "@/assets/1.4b Narayan sir.png";
import directorSandeep from "@/assets/1.4cSandeep sir.png";
import directorAruna from "@/assets/director-aruna.png";
import certAs9100Tuvsud from "@/assets/certificate-as9100d-tuvsud.jpg";
import certIso9001Unit3 from "@/assets/certificate-iso9001-unit3.jpg";
import certQualityAward from "@/assets/certificate-quality-award.png";
import certZedSilver from "@/assets/certificate-zed-silver.jpg";

import factory1 from "@/assets/7.1.png";
import factory2 from "@/assets/7.1a.png";
import factory3 from "@/assets/7.1aa.png";
import factory4 from "@/assets/7.1ab.png";
import factory5 from "@/assets/7.1b.png";
import factory6 from "@/assets/7.1c.png";
import factory7 from "@/assets/7.1d.png";
import factory8 from "@/assets/7.1f.png";
import factory9 from "@/assets/7.1g.png";
import factory10 from "@/assets/7.1h.png";
import factory11 from "@/assets/7.1i.png";
import factory12 from "@/assets/7.1k.png";
import factory13 from "@/assets/7.1l.png";

import machine1 from "@/assets/7.2a.png";
import machine2 from "@/assets/7.2b.png";
import machine3 from "@/assets/7.2c.png";
import machine4 from "@/assets/7.2d.png";
import machine5 from "@/assets/7.2e.png";
import machine6 from "@/assets/7.2f.png";
import machine7 from "@/assets/7.2g.png";
import machine8 from "@/assets/7.2h.png";
import machine9 from "@/assets/7.2i.png";
import machine10 from "@/assets/7.2j.png";
import machine11 from "@/assets/7.2k.png";
import machine12 from "@/assets/7.2l.png";
import machine13 from "@/assets/7.2m.png";
import machine14 from "@/assets/7.2n.png";

import infra1 from "@/assets/7.3a.png";
import infra2 from "@/assets/7.3b.png";
import infra3 from "@/assets/7.3c.png";
import infra4 from "@/assets/7.3d.png";
import infra5 from "@/assets/7.3f.png";
import infra6 from "@/assets/7.3g.png";
import infra7 from "@/assets/7.3h.png";
import infra8 from "@/assets/7.3i.png";
import infra9 from "@/assets/7.3j.png";

import quality1 from "@/assets/7.4a.png";
import quality2 from "@/assets/7.4b.png";
import quality3 from "@/assets/7.4c.png";
import quality4 from "@/assets/7.4d.png";
import quality5 from "@/assets/7.4e.png";
import quality6 from "@/assets/7.4f.png";
import quality7 from "@/assets/7.4g.png";

import team1 from "@/assets/7.5.png";
import team2 from "@/assets/7.5a.png";
import team3 from "@/assets/7.5b.png";

export type MediaSection =
  | "brand"
  | "page"
  | "factory"
  | "machinery"
  | "infrastructure"
  | "quality"
  | "team"
  | "leadership"
  | "certificate"
  | "seo"
  | "icon"
  | "fallback";

export type MediaAsset = {
  id: string;
  label: string;
  section: MediaSection;
  src: string;
  path: string;
  mimeType?: string;
  notes?: string;
  tags?: string[];
};

export type MediaSectionInfo = {
  id: MediaSection;
  label: string;
  description: string;
};

export type EditableMediaGroup = {
  id: string;
  label: string;
  description: string;
  section: MediaSection;
  assets: readonly MediaAsset[];
};

export type PageMediaReference = {
  id: string;
  label: string;
  asset: MediaAsset;
  notes?: string;
};

const createAsset = (
  id: string,
  label: string,
  section: MediaSection,
  src: string,
  path: string,
  notes?: string,
  mimeType?: string,
  tags?: string[],
): MediaAsset => ({ id, label, section, src, path, notes, mimeType, tags });

export const mediaSectionInfo: Record<MediaSection, MediaSectionInfo> = {
  brand: { id: "brand", label: "Brand & Logo", description: "Company logos and brand-only assets." },
  page: { id: "page", label: "Page Images", description: "Standalone images used in page sections and banners." },
  factory: { id: "factory", label: "Factory / Shop Floor", description: "Production floor and factory interior images." },
  machinery: { id: "machinery", label: "Machinery", description: "Machine, tooling, and machining-operation photos." },
  infrastructure: { id: "infrastructure", label: "Infrastructure", description: "Infrastructure and plant utility/process images." },
  quality: { id: "quality", label: "Quality Lab", description: "Inspection, metrology, and quality-control images." },
  team: { id: "team", label: "Team / Workforce", description: "Team and workforce photos." },
  leadership: { id: "leadership", label: "Leadership", description: "Leadership/board member profile images." },
  certificate: { id: "certificate", label: "Certificates", description: "Certificate and award preview images." },
  seo: { id: "seo", label: "SEO / Social Images", description: "Public OG, sitemap, and SEO image assets." },
  icon: { id: "icon", label: "Icons", description: "Favicons and touch icons." },
  fallback: { id: "fallback", label: "Fallbacks", description: "Fallback placeholder media." },
};

export const brandMedia = {
  logo: createAsset("brand-logo", "Company Logo", "brand", logo, "src/assets/logo.png", "Used in header and footer."),
};

export const pageMedia = {
  homeHero: createAsset("page-home-hero", "Home Hero CNC Facility", "page", heroCnc3d, "src/assets/hero-cnc-3d.jpg", "Main homepage hero image.", undefined, ["home", "hero"]),
  infrastructureHero: createAsset("page-infra-hero", "Infrastructure Hero", "page", heroCnc, "src/assets/hero-cnc.jpg", "Infrastructure hero/fallback image.", undefined, ["infrastructure", "hero"]),
  facility: createAsset("page-facility", "Facility Overview", "page", facility, "src/assets/facility.jpg", "General facility image used across multiple pages.", undefined, ["facility"]),
  facilityExterior: createAsset("page-facility-exterior", "Facility Exterior", "page", facility3d, "src/assets/facility-3d.jpg", "Contact page hero image.", undefined, ["contact", "hero"]),
  teamGroup: createAsset("page-team-group", "Team Group Photo", "page", teamGroupPhoto, "src/assets/team-group-photo.jpg", "About page team photo.", undefined, ["about", "team"]),
  aerospace: createAsset("page-industry-aerospace", "Aerospace Parts", "page", aerospaceParts, "src/assets/aerospace-parts.jpg", "Industry image for aerospace sections.", undefined, ["industries", "aerospace"]),
  agriculture: createAsset("page-industry-agriculture", "Agriculture Parts", "page", agricultureParts, "src/assets/agriculture-parts.jpg", "Industry image for agriculture sections.", undefined, ["industries", "agriculture"]),
  machineTools: createAsset("page-industry-machine-tools", "Machine Tool Parts", "page", machineToolsParts, "src/assets/machine-tools-parts.jpg", "Industry image for machine tools sections.", undefined, ["industries", "machine-tools"]),
  medical: createAsset("page-industry-medical", "Medical Parts", "page", medicalParts, "src/assets/medical-parts.jpg", "Industry image for pharma/medical sections.", undefined, ["industries", "medical"]),
};

export const leadershipMedia = {
  madhu: createAsset("leader-madhu", "Madhu K S", "leadership", directorMadhu, "src/assets/1.4a-Madhu sir.png", "Board member profile image.", undefined, ["leadership", "madhu"]),
  narayana: createAsset("leader-narayana", "Narayana S", "leadership", directorNarayana, "src/assets/1.4b Narayan sir.png", "Board member profile image.", undefined, ["leadership", "narayana"]),
  sandeep: createAsset("leader-sandeep", "Sandeep Parvatikar", "leadership", directorSandeep, "src/assets/1.4cSandeep sir.png", "Board member profile image.", undefined, ["leadership", "sandeep"]),
  aruna: createAsset("leader-aruna", "Aruna K M", "leadership", directorAruna, "src/assets/director-aruna.png", "Board member profile image.", undefined, ["leadership", "aruna"]),
};

export const certificateMedia = {
  as9100TuvSud: createAsset("cert-as9100-tuvsud", "AS9100D TÜV SÜD Certificate Preview", "certificate", certAs9100Tuvsud, "src/assets/certificate-as9100d-tuvsud.jpg", "Preview image for Unit-1 AS9100D certificate."),
  iso9001Unit3: createAsset("cert-iso9001-unit3", "ISO 9001 Unit-3 Certificate Preview", "certificate", certIso9001Unit3, "src/assets/certificate-iso9001-unit3.jpg", "Preview image for Unit-3 ISO certificate."),
  qualityAward: createAsset("cert-quality-award", "Quality Excellence Award", "certificate", certQualityAward, "src/assets/certificate-quality-award.png", "Quality award preview image."),
  zedSilver: createAsset("cert-zed-silver", "ZED Silver Certificate", "certificate", certZedSilver, "src/assets/certificate-zed-silver.jpg", "ZED certification preview image."),
};

export const factoryMedia = [
  createAsset("factory-01", "Shop Floor", "factory", factory1, "src/assets/7.1.png", "Factory gallery image."),
  createAsset("factory-02", "Shop Floor – Overview", "factory", factory2, "src/assets/7.1a.png", "Factory gallery image."),
  createAsset("factory-03", "Production Area", "factory", factory3, "src/assets/7.1aa.png", "Factory gallery image."),
  createAsset("factory-04", "CNC Turning Centre", "factory", factory4, "src/assets/7.1ab.png", "Factory gallery image."),
  createAsset("factory-05", "VMC Milling Bay", "factory", factory5, "src/assets/7.1b.png", "Factory gallery image."),
  createAsset("factory-06", "Machining Cell A", "factory", factory6, "src/assets/7.1c.png", "Factory gallery image."),
  createAsset("factory-07", "Machining Cell B", "factory", factory7, "src/assets/7.1d.png", "Factory gallery image."),
  createAsset("factory-08", "Production Floor", "factory", factory8, "src/assets/7.1f.png", "Factory gallery image."),
  createAsset("factory-09", "Component Staging", "factory", factory9, "src/assets/7.1g.png", "Factory gallery image."),
  createAsset("factory-10", "CNC Operations", "factory", factory10, "src/assets/7.1h.png", "Factory gallery image."),
  createAsset("factory-11", "Shop Floor Aerial", "factory", factory11, "src/assets/7.1i.png", "Factory gallery image."),
  createAsset("factory-12", "Precision Setup", "factory", factory12, "src/assets/7.1k.png", "Factory gallery image."),
  createAsset("factory-13", "Dispatch Bay", "factory", factory13, "src/assets/7.1l.png", "Factory gallery image."),
] as const;

export const machineryMedia = [
  createAsset("machine-01", "CNC Turning Machine", "machinery", machine1, "src/assets/7.2a.png", "Machinery gallery image."),
  createAsset("machine-02", "VMC Machining Centre", "machinery", machine2, "src/assets/7.2b.png", "Machinery gallery image."),
  createAsset("machine-03", "Turning Operation", "machinery", machine3, "src/assets/7.2c.png", "Machinery gallery image."),
  createAsset("machine-04", "Milling Operation", "machinery", machine4, "src/assets/7.2d.png", "Machinery gallery image."),
  createAsset("machine-05", "Surface Grinding", "machinery", machine5, "src/assets/7.2e.png", "Machinery gallery image."),
  createAsset("machine-06", "Cylindrical Grinding", "machinery", machine6, "src/assets/7.2f.png", "Machinery gallery image."),
  createAsset("machine-07", "Wire Cut Machine", "machinery", machine7, "src/assets/7.2g.png", "Machinery gallery image."),
  createAsset("machine-08", "TIG Welding", "machinery", machine8, "src/assets/7.2h.png", "Machinery gallery image."),
  createAsset("machine-09", "Orbital Welding", "machinery", machine9, "src/assets/7.2i.png", "Machinery gallery image."),
  createAsset("machine-10", "Special Machine", "machinery", machine10, "src/assets/7.2j.png", "Machinery gallery image."),
  createAsset("machine-11", "Tool Room", "machinery", machine11, "src/assets/7.2k.png", "Machinery gallery image."),
  createAsset("machine-12", "Machine Operations", "machinery", machine12, "src/assets/7.2l.png", "Machinery gallery image."),
  createAsset("machine-13", "CNC Programming", "machinery", machine13, "src/assets/7.2m.png", "Machinery gallery image."),
  createAsset("machine-14", "Finished Machined Parts", "machinery", machine14, "src/assets/7.2n.png", "Machinery gallery image."),
] as const;

export const infrastructureMedia = [
  createAsset("infra-01", "Infrastructure Overview", "infrastructure", infra1, "src/assets/7.3a.png", "Infrastructure gallery image."),
  createAsset("infra-02", "Facility Layout", "infrastructure", infra2, "src/assets/7.3b.png", "Infrastructure gallery image."),
  createAsset("infra-03", "Storage & Handling", "infrastructure", infra3, "src/assets/7.3c.png", "Infrastructure gallery image."),
  createAsset("infra-04", "Process Area", "infrastructure", infra4, "src/assets/7.3d.png", "Infrastructure gallery image."),
  createAsset("infra-05", "Treatment Line", "infrastructure", infra5, "src/assets/7.3f.png", "Infrastructure gallery image."),
  createAsset("infra-06", "Process Control Room", "infrastructure", infra6, "src/assets/7.3g.png", "Infrastructure gallery image."),
  createAsset("infra-07", "Facility Interior", "infrastructure", infra7, "src/assets/7.3h.png", "Infrastructure gallery image."),
  createAsset("infra-08", "Work Stations", "infrastructure", infra8, "src/assets/7.3i.png", "Infrastructure gallery image."),
  createAsset("infra-09", "Finished Goods Area", "infrastructure", infra9, "src/assets/7.3j.png", "Infrastructure gallery image."),
] as const;

export const qualityMedia = [
  createAsset("quality-01", "Quality Inspection", "quality", quality1, "src/assets/7.4a.png", "Quality gallery image."),
  createAsset("quality-02", "CMM Measurement", "quality", quality2, "src/assets/7.4b.png", "Quality gallery image."),
  createAsset("quality-03", "Precision Gauging", "quality", quality3, "src/assets/7.4c.png", "Quality gallery image."),
  createAsset("quality-04", "Surface Inspection", "quality", quality4, "src/assets/7.4d.png", "Quality gallery image."),
  createAsset("quality-05", "Metrology Lab", "quality", quality5, "src/assets/7.4e.png", "Quality gallery image."),
  createAsset("quality-06", "Calibrated Instruments", "quality", quality6, "src/assets/7.4f.png", "Quality gallery image."),
  createAsset("quality-07", "Final Inspection", "quality", quality7, "src/assets/7.4g.png", "Quality gallery image."),
] as const;

export const teamMedia = [
  createAsset("team-01", "Our Workforce", "team", team1, "src/assets/7.5.png", "Team/workforce image."),
  createAsset("team-02", "Engineering Team", "team", team2, "src/assets/7.5a.png", "Team/workforce image."),
  createAsset("team-03", "Quality Team", "team", team3, "src/assets/7.5b.png", "Team/workforce image."),
] as const;

export const seoMedia = {
  homeHero: createAsset("seo-home-hero", "SEO Hero Image", "seo", "/images/cnc-machining-bangalore-hero.svg", "public/images/cnc-machining-bangalore-hero.svg", "Homepage OG and structured data image.", "image/svg+xml"),
  galleryFloor: createAsset("seo-gallery-floor", "SEO Gallery Floor", "seo", "/images/cnc-manufacturing-gallery-floor.svg", "public/images/cnc-manufacturing-gallery-floor.svg", "Gallery structured-data image.", "image/svg+xml"),
  galleryTurning: createAsset("seo-gallery-turning", "SEO Turning Operation", "seo", "/images/cnc-turning-operation.svg", "public/images/cnc-turning-operation.svg", "Gallery structured-data image.", "image/svg+xml"),
  galleryMilling: createAsset("seo-gallery-milling", "SEO Milling Operation", "seo", "/images/cnc-milling-operation.svg", "public/images/cnc-milling-operation.svg", "Gallery structured-data image.", "image/svg+xml"),
  infrastructure: createAsset("seo-infrastructure", "SEO Infrastructure", "seo", "/images/manufacturing-infrastructure-bangalore.svg", "public/images/manufacturing-infrastructure-bangalore.svg", "Infrastructure/unit OG image.", "image/svg+xml"),
};

export const uiMedia = {
  appleTouchIcon: createAsset("icon-apple-touch", "Apple Touch Icon", "icon", "/apple-touch-icon.png", "public/apple-touch-icon.png"),
  favicon16: createAsset("icon-favicon-16", "Favicon 16", "icon", "/favicon-16.png", "public/favicon-16.png"),
  favicon32: createAsset("icon-favicon-32", "Favicon 32", "icon", "/favicon-32.png", "public/favicon-32.png"),
  favicon48: createAsset("icon-favicon-48", "Favicon 48", "icon", "/favicon-48.png", "public/favicon-48.png"),
  placeholder: createAsset("fallback-placeholder", "Placeholder", "fallback", "/placeholder.svg", "public/placeholder.svg", "Fallback used when an image is missing."),
};

export const editableMediaGroups: readonly EditableMediaGroup[] = [
  { id: "group-brand", label: "Brand Assets", description: "Logo and brand media.", section: "brand", assets: [brandMedia.logo] },
  { id: "group-page", label: "Page Images", description: "General page banners and supporting images.", section: "page", assets: Object.values(pageMedia) },
  { id: "group-leadership", label: "Leadership Photos", description: "Director profile photos.", section: "leadership", assets: Object.values(leadershipMedia) },
  { id: "group-certificates", label: "Certificate Images", description: "Certification and award images.", section: "certificate", assets: Object.values(certificateMedia) },
  { id: "group-factory", label: "Factory / Shop Floor Photos", description: "Factory gallery bank.", section: "factory", assets: factoryMedia },
  { id: "group-machinery", label: "Machinery Photos", description: "Machine gallery bank.", section: "machinery", assets: machineryMedia },
  { id: "group-infrastructure", label: "Infrastructure Photos", description: "Infrastructure gallery bank.", section: "infrastructure", assets: infrastructureMedia },
  { id: "group-quality", label: "Quality Lab Photos", description: "Quality and inspection gallery bank.", section: "quality", assets: qualityMedia },
  { id: "group-team", label: "Team / Workforce Photos", description: "Team gallery bank.", section: "team", assets: teamMedia },
  { id: "group-seo", label: "SEO / Social Images", description: "Public metadata images.", section: "seo", assets: Object.values(seoMedia) },
  { id: "group-ui", label: "UI Icons & Fallbacks", description: "Favicons and placeholders.", section: "icon", assets: [uiMedia.appleTouchIcon, uiMedia.favicon16, uiMedia.favicon32, uiMedia.favicon48, uiMedia.placeholder] },
] as const;

export const pageSectionMedia = {
  shared: {
    label: "Shared Site Sections",
    sections: {
      headerLogo: { id: "shared-header-logo", label: "Header Logo", asset: brandMedia.logo },
      footerLogo: { id: "shared-footer-logo", label: "Footer Logo", asset: brandMedia.logo },
      imageFallback: { id: "shared-image-fallback", label: "Image Fallback", asset: uiMedia.placeholder },
    },
  },
  home: {
    label: "Home Page",
    sections: {
      hero: { id: "home-hero", label: "Hero Banner", asset: pageMedia.homeHero },
      corporateOverview: { id: "home-corporate-overview", label: "Corporate Overview", asset: pageMedia.facility },
      industriesAerospace: { id: "home-industry-aerospace", label: "Industry Card – Aerospace", asset: pageMedia.aerospace },
      industriesPharma: { id: "home-industry-pharma", label: "Industry Card – Pharma Equipment", asset: pageMedia.medical },
      industriesSemiconductor: { id: "home-industry-semiconductor", label: "Industry Card – Semi-Conductor", asset: teamMedia[0] },
      industriesMachineTools: { id: "home-industry-machine-tools", label: "Industry Card – Machine Tools", asset: pageMedia.machineTools },
      capabilityTurning: { id: "home-capability-turning", label: "Capability – CNC Turning & Milling", asset: factoryMedia[3] },
      capabilityMachining: { id: "home-capability-machining", label: "Capability – Precision Machining", asset: factoryMedia[4] },
      capabilityQuality: { id: "home-capability-quality", label: "Capability – Quality & Inspection", asset: teamMedia[0] },
      statsBackground: { id: "home-stats-bg", label: "Stats Background", asset: factoryMedia[4] },
      videoPoster: { id: "home-video-poster", label: "Video Poster", asset: pageMedia.homeHero },
      infrastructureCenters: { id: "home-infra-centers", label: "Infrastructure Preview – CNC Machining Centers", asset: pageMedia.homeHero },
      infrastructureTurning: { id: "home-infra-turning", label: "Infrastructure Preview – CNC Turning Centers", asset: factoryMedia[3] },
      infrastructureQuality: { id: "home-infra-quality", label: "Infrastructure Preview – Quality & Inspection", asset: teamMedia[0] },
      exportBackground: { id: "home-export-bg", label: "Export Section Background", asset: factoryMedia[0] },
    },
  },
  about: {
    label: "About Page",
    sections: {
      hero: { id: "about-hero", label: "Hero Background", asset: factoryMedia[1] },
      facilitySection: { id: "about-facility-section", label: "Facility Section", asset: factoryMedia[1] },
      precisionSection: { id: "about-precision-section", label: "Precision Components Section", asset: factoryMedia[4] },
      teamSection: { id: "about-team-section", label: "Team Section", asset: pageMedia.teamGroup },
    },
  },
  capabilities: {
    label: "Capabilities Page",
    sections: {
      hero: { id: "capabilities-hero", label: "Hero Background", asset: factoryMedia[4] },
      coreServices: { id: "capabilities-core-services", label: "Core CNC Services", asset: factoryMedia[3] },
      specialProcesses: { id: "capabilities-special-processes", label: "Special Processes", asset: teamMedia[0] },
      productionModel: { id: "capabilities-production-model", label: "Production Model", asset: pageMedia.facility },
      inspection: { id: "capabilities-inspection", label: "Inspection & Quality Assurance", asset: factoryMedia[4] },
    },
  },
  contact: {
    label: "Contact Page",
    sections: {
      hero: { id: "contact-hero", label: "Hero Background", asset: pageMedia.facilityExterior },
    },
  },
  industries: {
    label: "Industries Page",
    sections: {
      hero: { id: "industries-hero", label: "Hero Background", asset: factoryMedia[0] },
      pharmaEquipment: { id: "industries-pharma", label: "Pharma Equipment", asset: pageMedia.medical },
      aerospace: { id: "industries-aerospace", label: "Aerospace", asset: pageMedia.aerospace },
      semiconductor: { id: "industries-semiconductor", label: "Semi-Conductor", asset: teamMedia[0] },
      machineTools: { id: "industries-machine-tools", label: "Machine Tools", asset: pageMedia.machineTools },
    },
  },
  infrastructure: {
    label: "Infrastructure Page",
    sections: {
      hero: { id: "infrastructure-hero", label: "Hero Background", asset: factoryMedia[1] },
      machineFallback: { id: "infrastructure-machine-fallback", label: "Machine Fallback Image", asset: pageMedia.infrastructureHero },
      shopFloorOverview: { id: "infrastructure-shop-floor", label: "Shop-Floor Overview", asset: factoryMedia[1] },
      galleryExtra: { id: "infrastructure-gallery-extra", label: "Gallery Extra Image", asset: factoryMedia[1] },
      certificateUnit1: { id: "infrastructure-cert-unit1", label: "Certificate Preview – Unit 1", asset: certificateMedia.as9100TuvSud },
      certificateUnit3: { id: "infrastructure-cert-unit3", label: "Certificate Preview – Unit 3", asset: certificateMedia.iso9001Unit3 },
      certificateAward: { id: "infrastructure-cert-award", label: "Certificate Preview – Quality Award", asset: certificateMedia.qualityAward },
      certificateZed: { id: "infrastructure-cert-zed", label: "Certificate Preview – ZED Silver", asset: certificateMedia.zedSilver },
    },
  },
  leadership: {
    label: "Leadership Page",
    sections: {
      sandeep: { id: "leadership-sandeep", label: "Director – Sandeep Parvatikar", asset: leadershipMedia.sandeep },
      narayana: { id: "leadership-narayana", label: "Director – Narayana S", asset: leadershipMedia.narayana },
      madhu: { id: "leadership-madhu", label: "Director – Madhu K S", asset: leadershipMedia.madhu },
      aruna: { id: "leadership-aruna", label: "Director – Aruna K M", asset: leadershipMedia.aruna },
    },
  },
  quality: {
    label: "Quality Page",
    sections: {
      certificateUnit1: { id: "quality-cert-unit1", label: "Certificate Preview – Unit 1", asset: certificateMedia.as9100TuvSud },
      certificateUnit3: { id: "quality-cert-unit3", label: "Certificate Preview – Unit 3", asset: certificateMedia.iso9001Unit3 },
    },
  },
  units: {
    label: "Unit Detail Pages",
    sections: {
      heroFallback: { id: "units-hero-fallback", label: "Unit Hero Fallback", asset: pageMedia.facility },
      overviewFallback: { id: "units-overview-fallback", label: "Unit Overview Fallback", asset: pageMedia.facility },
    },
  },
} as const;

export const mediaLibrary = {
  brand: brandMedia,
  pages: pageMedia,
  leadership: leadershipMedia,
  certificates: certificateMedia,
  factory: factoryMedia,
  machinery: machineryMedia,
  infrastructure: infrastructureMedia,
  quality: qualityMedia,
  team: teamMedia,
  seo: seoMedia,
  ui: uiMedia,
};

export const getEditableMediaGroup = (groupId: string) => editableMediaGroups.find((group) => group.id === groupId);
export const findMediaAssetById = (assetId: string) => editableMediaGroups.flatMap((group) => group.assets).find((asset) => asset.id === assetId);

export type MediaLibrary = typeof mediaLibrary;
