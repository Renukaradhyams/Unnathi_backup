import logo from "@/assets/logo.png";


import teamGroupPhoto from "@/assets/Group_photos/team-group-photo.jpg";
import team1 from "@/assets/Group_photos/7.5.png";
import team2 from "@/assets/Group_photos/7.5a.png";
import team3 from "@/assets/Group_photos/7.5b.png";
import groupInfra from "@/assets/Group_photos/7.3d.png";

import aerospaceParts from "@/assets/industries/aerospace-parts.jpg";
import agricultureParts from "@/assets/industries/agriculture-parts.jpg";
import machineToolsParts from "@/assets/industries/machine-tools-parts.jpg";
import medicalParts from "@/assets/industries/medical-parts.jpg";

import directorMadhu from "@/assets/directors/1.4a-Madhu sir.png";
import directorNarayana from "@/assets/directors/1.4b Narayan sir.png";
import directorSandeep from "@/assets/directors/1.4cSandeep sir.png";
import directorAruna from "@/assets/directors/director-aruna.png";

import certAs9100Iso from "@/assets/Certificates/certificate-as9100d-iso9001.png";
import certAs9100Tuvsud from "@/assets/Certificates/certificate-as9100d-tuvsud.jpg";
import certIso9001Unit3 from "@/assets/Certificates/certificate-iso9001-unit3.jpg";
import certQualityAward from "@/assets/Certificates/certificate-quality-award.png";
import certZedSilver from "@/assets/Certificates/certificate-zed-silver.jpg";

import mainFactory1 from "@/assets/Main_photos/7.1.png";
import mainFactory2 from "@/assets/Main_photos/7.1a.png";
import mainFactory3 from "@/assets/Main_photos/7.1aa.png";
import mainFactory4 from "@/assets/Main_photos/7.1ab.png";
import mainFactory5 from "@/assets/Main_photos/7.1b.png";
import mainFactory6 from "@/assets/Main_photos/7.1c.png";
import mainFactory7 from "@/assets/Main_photos/7.1d.png";
import mainFactory8 from "@/assets/Main_photos/7.1f.png";
import unit4Factory1 from "@/assets/Unnathi -04-web content/7.1g.png";
import unit3Factory1 from "@/assets/Unnathi-03-web content/7.1h.png";
import unit4Factory2 from "@/assets/Unnathi -04-web content/7.1k.png";
import unit4Factory3 from "@/assets/Unnathi -04-web content/7.1l.png";

import unit1Machine1 from "@/assets/Unnathi-01- web content/7.2.png";
import unit2Machine1 from "@/assets/Unnathi-02-web content/machine-1 BFW Chakra.jpeg";
import unit2Machine2 from "@/assets/Unnathi-02-web content/machine-2.jpeg";
import unit2Machine3 from "@/assets/Unnathi-02-web content/machine-3 BFW.jpeg";
import unit2Machine4 from "@/assets/Unnathi-02-web content/Turning machine- Jaguar make.jpeg";
import unit2Machine5 from "@/assets/Unnathi-02-web content/Turning machine- Pride make.jpeg";
import unit2Machine6 from "@/assets/Unnathi-02-web content/Surface grinding- COSMOS.jpeg";
import unit1Machine2 from "@/assets/Unnathi-01- web content/7.2g.png";
import unit2Machine7 from "@/assets/Unnathi-02-web content/machine -8 Micromatic.jpeg";
import unit1Machine3 from "@/assets/Unnathi-01- web content/7.2i.png";
import unit2Machine8 from "@/assets/Unnathi-02-web content/Wire cutting - electronica.jpeg";
import unit1Machine4 from "@/assets/Unnathi-01- web content/Orbital welding set up.png";
import unit1Machine5 from "@/assets/Unnathi-01- web content/Welding process 1.jpeg";
import unit1Machine6 from "@/assets/Unnathi-01- web content/Welding process 2.jpeg";
import unit4Machine1 from "@/assets/Unnathi -04-web content/H-boring.png";
import unit4Machine2 from "@/assets/Unnathi -04-web content/H-boring machine (2).png";
import unit4Machine3 from "@/assets/Unnathi -04-web content/VTL.jpeg";

import unit1Infra1 from "@/assets/Unnathi-01- web content/7.3a.png";
import unit1Infra2 from "@/assets/Unnathi-01- web content/7.3b.png";
import unit1Infra3 from "@/assets/Unnathi-01- web content/7.3c.png";
import unit1Infra4 from "@/assets/Unnathi-01- web content/7.3d.png";
import unit1Infra5 from "@/assets/Unnathi-01- web content/7.3e.png";
import unit1Infra6 from "@/assets/Unnathi-01- web content/7.3f.png";
import unit3Infra1 from "@/assets/Unnathi-03-web content/7.3g.png";
import unit3Infra2 from "@/assets/Unnathi-03-web content/7.3i.png";
import unit4Infra1 from "@/assets/Unnathi -04-web content/Bird eye view.png";
import unit4Infra2 from "@/assets/Unnathi -04-web content/building entrance.png";
import unit4Infra3 from "@/assets/Unnathi -04-web content/shop floor.png";
import unit4Infra4 from "@/assets/Unnathi -04-web content/store room.png";

import quality1 from "@/assets/Unnathi_machine_instruments/Instruments/CMM.png";
import quality2 from "@/assets/Unnathi_machine_instruments/Instruments/Contour instrument.png";
import quality3 from "@/assets/Unnathi_machine_instruments/Instruments/Height master.png";
import quality4 from "@/assets/Unnathi_machine_instruments/Instruments/VMS.png";
import quality5 from "@/assets/Unnathi_machine_instruments/Instruments/surface roughness.png";
import quality6 from "@/assets/Unnathi-01- web content/CMM inspection.png";
import quality7 from "@/assets/Unnathi-01- web content/QC room.png";

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
  homeHero: createAsset("page-home-hero", "Home Hero CNC Facility", "page", mainFactory2, "src/assets/Main_photos/7.1a.png", "Main homepage hero image.", undefined, ["home", "hero"]),
  infrastructureHero: createAsset("page-infra-hero", "Infrastructure Hero", "page", unit4Infra1, "src/assets/Unnathi -04-web content/Bird eye view.png", "Infrastructure hero/fallback image.", undefined, ["infrastructure", "hero"]),
  facility: createAsset("page-facility", "Facility Overview", "page", mainFactory1, "src/assets/Main_photos/7.1.png", "General facility image used across multiple pages.", undefined, ["facility"]),
  facilityExterior: createAsset("page-facility-exterior", "Facility Exterior", "page", unit4Infra2, "src/assets/Unnathi -04-web content/building entrance.png", "Contact page hero image.", undefined, ["contact", "hero"]),
  teamGroup: createAsset("page-team-group", "Team Group Photo", "page", teamGroupPhoto, "src/assets/Group_photos/team-group-photo.jpg", "About page team photo.", undefined, ["about", "team"]),
  aerospace: createAsset("page-industry-aerospace", "Aerospace Parts", "page", aerospaceParts, "src/assets/industries/aerospace-parts.jpg", "Industry image for aerospace sections.", undefined, ["industries", "aerospace"]),
  agriculture: createAsset("page-industry-agriculture", "Agriculture Parts", "page", agricultureParts, "src/assets/industries/agriculture-parts.jpg", "Industry image for agriculture sections.", undefined, ["industries", "agriculture"]),
  machineTools: createAsset("page-industry-machine-tools", "Machine Tool Parts", "page", machineToolsParts, "src/assets/industries/machine-tools-parts.jpg", "Industry image for machine tools sections.", undefined, ["industries", "machine-tools"]),
  medical: createAsset("page-industry-medical", "Medical / Pharma Parts", "page", medicalParts, "src/assets/industries/medical-parts.jpg", "Industry image for pharma/medical sections.", undefined, ["industries", "medical"]),
  precisionParts: createAsset("page-industry-precision", "Precision Parts", "page", agricultureParts, "src/assets/industries/agriculture-parts.jpg", "Industry image for semiconductor/precision engineering sections.", undefined, ["industries", "precision"]),
  qualityLab: createAsset("page-industry-quality-lab", "Quality Lab", "page", quality6, "src/assets/Unnathi-01- web content/CMM inspection.png", "Industry image for quality-focused and clean-finish sections.", undefined, ["industries", "quality"]),
  cncMilling: createAsset("page-cnc-milling", "CNC Milling", "page", unit2Machine2, "src/assets/Unnathi-02-web content/machine-2.jpeg", "Supplementary CNC milling hero/support visual.", undefined, ["machining"]),
  cncTurning: createAsset("page-cnc-turning", "CNC Turning", "page", unit2Machine4, "src/assets/Unnathi-02-web content/Turning machine- Jaguar make.jpeg", "Supplementary CNC turning hero/support visual.", undefined, ["turning"]),
};

export const leadershipMedia = {
  madhu: createAsset("leader-madhu", "Madhu K S", "leadership", directorMadhu, "src/assets/directors/1.4a-Madhu sir.png", "Board member profile image.", undefined, ["leadership", "madhu"]),
  narayana: createAsset("leader-narayana", "Narayana S", "leadership", directorNarayana, "src/assets/directors/1.4b Narayan sir.png", "Board member profile image.", undefined, ["leadership", "narayana"]),
  sandeep: createAsset("leader-sandeep", "Sandeep Parvatikar", "leadership", directorSandeep, "src/assets/directors/1.4cSandeep sir.png", "Board member profile image.", undefined, ["leadership", "sandeep"]),
  aruna: createAsset("leader-aruna", "Aruna K M", "leadership", directorAruna, "src/assets/directors/director-aruna.png", "Board member profile image.", undefined, ["leadership", "aruna"]),
};

export const certificateMedia = {
  as9100Iso: createAsset("cert-as9100-iso", "AS9100D & ISO 9001 Certificate Preview", "certificate", certAs9100Iso, "src/assets/Certificates/certificate-as9100d-iso9001.png", "Preview image for integrated AS9100D + ISO certificate."),
  as9100TuvSud: createAsset("cert-as9100-tuvsud", "AS9100D TÜV SÜD Certificate Preview", "certificate", certAs9100Tuvsud, "src/assets/Certificates/certificate-as9100d-tuvsud.jpg", "Preview image for Unit-1 AS9100D certificate."),
  iso9001Unit3: createAsset("cert-iso9001-unit3", "ISO 9001 Unit-3 Certificate Preview", "certificate", certIso9001Unit3, "src/assets/Certificates/certificate-iso9001-unit3.jpg", "Preview image for Unit-3 ISO certificate."),
  qualityAward: createAsset("cert-quality-award", "Quality Excellence Award", "certificate", certQualityAward, "src/assets/Certificates/certificate-quality-award.png", "Quality award preview image."),
  zedSilver: createAsset("cert-zed-silver", "ZED Silver Certificate", "certificate", certZedSilver, "src/assets/Certificates/certificate-zed-silver.jpg", "ZED certification preview image."),
};

export const factoryMedia = [
  createAsset("factory-01", "Unit 1 Shop Floor", "factory", mainFactory1, "src/assets/Main_photos/7.1.png", "Main factory gallery image."),
  createAsset("factory-02", "Unit 1 Shop Floor Overview", "factory", mainFactory2, "src/assets/Main_photos/7.1a.png", "Main factory gallery image."),
  createAsset("factory-03", "Production Area", "factory", mainFactory3, "src/assets/Main_photos/7.1aa.png", "Main factory gallery image."),
  createAsset("factory-04", "CNC Turning Centre", "factory", mainFactory4, "src/assets/Main_photos/7.1ab.png", "Main factory gallery image."),
  createAsset("factory-05", "VMC Milling Bay", "factory", mainFactory5, "src/assets/Main_photos/7.1b.png", "Main factory gallery image."),
  createAsset("factory-06", "Machining Cell A", "factory", mainFactory6, "src/assets/Main_photos/7.1c.png", "Main factory gallery image."),
  createAsset("factory-07", "Machining Cell B", "factory", mainFactory7, "src/assets/Main_photos/7.1d.png", "Main factory gallery image."),
  createAsset("factory-08", "Production Floor", "factory", mainFactory8, "src/assets/Main_photos/7.1f.png", "Main factory gallery image."),
  createAsset("factory-09", "Unit 4 Shop Floor", "factory", unit4Factory1, "src/assets/Unnathi -04-web content/7.1g.png", "Unit 4 facility image."),
  createAsset("factory-10", "Unit 3 Process Area", "factory", unit3Factory1, "src/assets/Unnathi-03-web content/7.1h.png", "Unit 3 process floor image."),
  createAsset("factory-11", "Unit 4 Precision Setup", "factory", unit4Factory2, "src/assets/Unnathi -04-web content/7.1k.png", "Unit 4 precision setup image."),
  createAsset("factory-12", "Unit 4 Dispatch & Handling", "factory", unit4Factory3, "src/assets/Unnathi -04-web content/7.1l.png", "Unit 4 dispatch area image."),
] as const;

export const machineryMedia = [
  createAsset("machine-01", "Turning Operation", "machinery", unit1Machine1, "src/assets/Unnathi-01- web content/7.2.png", "Unit 1 machining image."),
  createAsset("machine-02", "BFW Chakra VMC", "machinery", unit2Machine1, "src/assets/Unnathi-02-web content/machine-1 BFW Chakra.jpeg", "Unit 2 machinery image."),
  createAsset("machine-03", "VMC Machining Centre", "machinery", unit2Machine2, "src/assets/Unnathi-02-web content/machine-2.jpeg", "Unit 2 machinery image."),
  createAsset("machine-04", "BFW Machining Centre", "machinery", unit2Machine3, "src/assets/Unnathi-02-web content/machine-3 BFW.jpeg", "Unit 2 machinery image."),
  createAsset("machine-05", "Jaguar Turning Machine", "machinery", unit2Machine4, "src/assets/Unnathi-02-web content/Turning machine- Jaguar make.jpeg", "Unit 2 machinery image."),
  createAsset("machine-06", "Pride Turning Machine", "machinery", unit2Machine5, "src/assets/Unnathi-02-web content/Turning machine- Pride make.jpeg", "Unit 2 machinery image."),
  createAsset("machine-07", "Surface Grinding - Cosmos", "machinery", unit2Machine6, "src/assets/Unnathi-02-web content/Surface grinding- COSMOS.jpeg", "Unit 2 machinery image."),
  createAsset("machine-08", "Wire Cut Machine", "machinery", unit2Machine8, "src/assets/Unnathi-02-web content/Wire cutting - electronica.jpeg", "Unit 2 machinery image."),
  createAsset("machine-09", "Micromatic Grinding Machine", "machinery", unit2Machine7, "src/assets/Unnathi-02-web content/machine -8 Micromatic.jpeg", "Unit 2 machinery image."),
  createAsset("machine-10", "Automatic Clamping Fixture", "machinery", unit1Machine2, "src/assets/Unnathi-01- web content/7.2g.png", "Unit 1 fixture image."),
  createAsset("machine-11", "Orbital Welding Setup", "machinery", unit1Machine4, "src/assets/Unnathi-01- web content/Orbital welding set up.png", "Unit 1 special process image."),
  createAsset("machine-12", "Welding Process", "machinery", unit1Machine5, "src/assets/Unnathi-01- web content/Welding process 1.jpeg", "Unit 1 special process image."),
  createAsset("machine-13", "Additional Welding Process", "machinery", unit1Machine6, "src/assets/Unnathi-01- web content/Welding process 2.jpeg", "Unit 1 special process image."),
  createAsset("machine-14", "H-Boring Machine", "machinery", unit4Machine1, "src/assets/Unnathi -04-web content/H-boring.png", "Unit 4 heavy-machining image."),
  createAsset("machine-15", "H-Boring Machine - Alternate View", "machinery", unit4Machine2, "src/assets/Unnathi -04-web content/H-boring machine (2).png", "Unit 4 heavy-machining image."),
  createAsset("machine-16", "VTL Machine", "machinery", unit4Machine3, "src/assets/Unnathi -04-web content/VTL.jpeg", "Unit 4 heavy-machining image."),
  createAsset("machine-17", "Orbital Welding", "machinery", unit1Machine3, "src/assets/Unnathi-01- web content/7.2i.png", "Unit 1 orbital welding image."),
] as const;

export const infrastructureMedia = [
  createAsset("infra-01", "Unit 1 Infrastructure Overview", "infrastructure", unit1Infra1, "src/assets/Unnathi-01- web content/7.3a.png", "Infrastructure gallery image."),
  createAsset("infra-02", "Unit 1 Facility Layout", "infrastructure", unit1Infra2, "src/assets/Unnathi-01- web content/7.3b.png", "Infrastructure gallery image."),
  createAsset("infra-03", "Unit 1 Storage & Handling", "infrastructure", unit1Infra3, "src/assets/Unnathi-01- web content/7.3c.png", "Infrastructure gallery image."),
  createAsset("infra-04", "Group Infrastructure View", "infrastructure", groupInfra, "src/assets/Group_photos/7.3d.png", "Shared group/infrastructure image."),
  createAsset("infra-05", "Unit 1 Process Area", "infrastructure", unit1Infra5, "src/assets/Unnathi-01- web content/7.3e.png", "Infrastructure gallery image."),
  createAsset("infra-06", "Unit 1 Dispatch & Loading", "infrastructure", unit1Infra6, "src/assets/Unnathi-01- web content/7.3f.png", "Infrastructure gallery image."),
  createAsset("infra-07", "Unit 3 Process Control", "infrastructure", unit3Infra1, "src/assets/Unnathi-03-web content/7.3g.png", "Infrastructure gallery image."),
  createAsset("infra-08", "Unit 3 Work Stations", "infrastructure", unit3Infra2, "src/assets/Unnathi-03-web content/7.3i.png", "Infrastructure gallery image."),
  createAsset("infra-09", "Unit 4 Bird Eye View", "infrastructure", unit4Infra1, "src/assets/Unnathi -04-web content/Bird eye view.png", "Infrastructure gallery image."),
  createAsset("infra-10", "Unit 4 Building Entrance", "infrastructure", unit4Infra2, "src/assets/Unnathi -04-web content/building entrance.png", "Infrastructure gallery image."),
  createAsset("infra-11", "Unit 4 Shop Floor", "infrastructure", unit4Infra3, "src/assets/Unnathi -04-web content/shop floor.png", "Infrastructure gallery image."),
  createAsset("infra-12", "Unit 4 Store Room", "infrastructure", unit4Infra4, "src/assets/Unnathi -04-web content/store room.png", "Infrastructure gallery image."),
  createAsset("infra-13", "Unit 1 Process Area 2", "infrastructure", unit1Infra4, "src/assets/Unnathi-01- web content/7.3d.png", "Infrastructure gallery image."),
] as const;

export const qualityMedia = [
  createAsset("quality-01", "CMM Inspection", "quality", quality1, "src/assets/Unnathi_machine_instruments/Instruments/CMM.png", "Quality gallery image."),
  createAsset("quality-02", "Contour Instrument", "quality", quality2, "src/assets/Unnathi_machine_instruments/Instruments/Contour instrument.png", "Quality gallery image."),
  createAsset("quality-03", "Height Master", "quality", quality3, "src/assets/Unnathi_machine_instruments/Instruments/Height master.png", "Quality gallery image."),
  createAsset("quality-04", "Vision Measuring System", "quality", quality4, "src/assets/Unnathi_machine_instruments/Instruments/VMS.png", "Quality gallery image."),
  createAsset("quality-05", "Surface Roughness Instrument", "quality", quality5, "src/assets/Unnathi_machine_instruments/Instruments/surface roughness.png", "Quality gallery image."),
  createAsset("quality-06", "CMM Inspection Room", "quality", quality6, "src/assets/Unnathi-01- web content/CMM inspection.png", "Quality gallery image."),
  createAsset("quality-07", "QC Room", "quality", quality7, "src/assets/Unnathi-01- web content/QC room.png", "Quality gallery image."),
] as const;

export const teamMedia = [
  createAsset("team-01", "Our Workforce", "team", team1, "src/assets/Group_photos/7.5.png", "Team/workforce image."),
  createAsset("team-02", "Engineering Team", "team", team2, "src/assets/Group_photos/7.5a.png", "Team/workforce image."),
  createAsset("team-03", "Quality Team", "team", team3, "src/assets/Group_photos/7.5b.png", "Team/workforce image."),
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
      industriesSemiconductor: { id: "home-industry-semiconductor", label: "Industry Card – Semi-Conductor", asset: pageMedia.precisionParts },
      industriesMachineTools: { id: "home-industry-machine-tools", label: "Industry Card – Machine Tools", asset: pageMedia.machineTools },
      capabilityTurning: { id: "home-capability-turning", label: "Capability – CNC Turning & Milling", asset: pageMedia.cncTurning },
      capabilityMachining: { id: "home-capability-machining", label: "Capability – Precision Machining", asset: pageMedia.cncMilling },
      capabilityQuality: { id: "home-capability-quality", label: "Capability – Quality & Inspection", asset: pageMedia.qualityLab },
      statsBackground: { id: "home-stats-bg", label: "Stats Background", asset: factoryMedia[4] },
      videoPoster: { id: "home-video-poster", label: "Video Poster", asset: pageMedia.homeHero },
      infrastructureCenters: { id: "home-infra-centers", label: "Infrastructure Preview – CNC Machining Centers", asset: pageMedia.cncMilling },
      infrastructureTurning: { id: "home-infra-turning", label: "Infrastructure Preview – CNC Turning Centers", asset: pageMedia.cncTurning },
      infrastructureQuality: { id: "home-infra-quality", label: "Infrastructure Preview – Quality & Inspection", asset: pageMedia.qualityLab },
      exportBackground: { id: "home-export-bg", label: "Export Section Background", asset: factoryMedia[0] },
    },
  },
  about: {
    label: "About Page",
    sections: {
      hero: { id: "about-hero", label: "Hero Background", asset: factoryMedia[1] },
      facilitySection: { id: "about-facility-section", label: "Facility Section", asset: pageMedia.facility },
      precisionSection: { id: "about-precision-section", label: "Precision Components Section", asset: pageMedia.cncMilling },
      teamSection: { id: "about-team-section", label: "Team Section", asset: pageMedia.teamGroup },
    },
  },
  capabilities: {
    label: "Capabilities Page",
    sections: {
      hero: { id: "capabilities-hero", label: "Hero Background", asset: pageMedia.cncMilling },
      coreServices: { id: "capabilities-core-services", label: "Core CNC Services", asset: pageMedia.cncTurning },
      specialProcesses: { id: "capabilities-special-processes", label: "Special Processes", asset: machineryMedia[10] },
      productionModel: { id: "capabilities-production-model", label: "Production Model", asset: pageMedia.facility },
      inspection: { id: "capabilities-inspection", label: "Inspection & Quality Assurance", asset: pageMedia.qualityLab },
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
      hero: { id: "industries-hero", label: "Hero Background", asset: pageMedia.precisionParts },
      pharmaEquipment: { id: "industries-pharma", label: "Pharma Equipment", asset: pageMedia.medical },
      aerospace: { id: "industries-aerospace", label: "Aerospace", asset: pageMedia.aerospace },
      semiconductor: { id: "industries-semiconductor", label: "Semi-Conductor", asset: pageMedia.qualityLab },
      machineTools: { id: "industries-machine-tools", label: "Machine Tools", asset: pageMedia.machineTools },
    },
  },
  infrastructure: {
    label: "Infrastructure Page",
    sections: {
      hero: { id: "infrastructure-hero", label: "Hero Background", asset: pageMedia.infrastructureHero },
      machineFallback: { id: "infrastructure-machine-fallback", label: "Machine Fallback Image", asset: pageMedia.cncTurning },
      shopFloorOverview: { id: "infrastructure-shop-floor", label: "Shop-Floor Overview", asset: pageMedia.facility },
      galleryExtra: { id: "infrastructure-gallery-extra", label: "Gallery Extra Image", asset: infrastructureMedia[8] },
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
      certificateUnit1: { id: "quality-cert-unit1", label: "Certificate Preview – Unit 1", asset: certificateMedia.as9100Iso },
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
