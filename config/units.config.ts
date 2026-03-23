import {
  factoryMedia,
  infrastructureMedia,
  machineryMedia,
  qualityMedia,
  teamMedia,
  type MediaAsset,
} from "@config/media.config";

export type UnitGalleryImage = MediaAsset;

export type UnitMachine = {
  id: string;
  name: string;
  brand: string;
  model: string;
  axis: string;
  image?: string;
};

export type UnitSpecification = {
  label: string;
  value: string;
};

export type UnitCertification = {
  name: string;
  image?: string;
};

export type UnitContact = {
  address: string;
  phone: string;
  email: string;
};

export type UnitConfig = {
  id: string;
  name: string;
  location: string;
  address: string;
  specialisation: string;
  specialisationBadges: string[];
  overview: string;
  specifications: UnitSpecification[];
  machines: UnitMachine[];
  capabilities: string[];
  galleryImages: UnitGalleryImage[];
  industries: string[];
  teamDescription: string;
  teamPhoto?: string;
  certifications: UnitCertification[];
  videoSrc?: string;
  contact: UnitContact;
  mapSrc: string;
};

const commonMachines: UnitMachine[] = [
  { id: "machine-spec-01", name: "CNC Turning Machine", brand: "ACE", model: "J300LM", axis: "2-Axis" },
  { id: "machine-spec-02", name: "CNC Turning Machine", brand: "ACE Micromatic", model: "JOBBER LM", axis: "2-Axis" },
  { id: "machine-spec-03", name: "CNC Turning Machine", brand: "Haas", model: "ST 20", axis: "2-Axis" },
  { id: "machine-spec-04", name: "CNC Turning Machine", brand: "Jaguar", model: "LX20TL5", axis: "2-Axis" },
  { id: "machine-spec-05", name: "VMC Milling Machine", brand: "BFW", model: "CHAKRA BMV60TC24", axis: "3-Axis" },
  { id: "machine-spec-06", name: "VMC Milling Machine", brand: "Haas", model: "VF-2", axis: "3-Axis" },
  { id: "machine-spec-07", name: "VMC Milling Machine", brand: "Phillips", model: "VMC", axis: "3-Axis" },
  { id: "machine-spec-08", name: "Surface Grinding Machine", brand: "Cosmos", model: "Surface Grinder", axis: "—" },
  { id: "machine-spec-09", name: "Surface Grinding Machine", brand: "Pinnacle", model: "Surface Grinder", axis: "—" },
  { id: "machine-spec-10", name: "Cylindrical Grinding Machine", brand: "Micromatic", model: "ECO-200U", axis: "—" },
  { id: "machine-spec-11", name: "Cylindrical Grinding Machine", brand: "Micromatic", model: "GCU-350", axis: "—" },
  { id: "machine-spec-12", name: "Wire Cut Machine", brand: "Electronica", model: "Wire Cut", axis: "—" },
  { id: "machine-spec-13", name: "TIG Welding Machine", brand: "INDUS-ARC", model: "TIG", axis: "—" },
  { id: "machine-spec-14", name: "Orbital Welding Machine", brand: "ORBITRON", model: "Orbital", axis: "—" },
];

const commonCapabilities = [
  "Turning operation",
  "VMC",
  "Surface and Cylindrical grinding",
  "Wire cutting",
  "H-Boring & VTL",
  "MIG & TIG Welding",
  "Orbital welding",
  "Sandblasting",
  "Electropolishing",
  "Pickling and Passivation",
  "Experts in Prototype and batch production",
];

const commonIndustries = ["Pharma Equipment", "Aerospace", "Semi-Conductor", "Machine Tools"];

const factoryGallery = factoryMedia.slice(1);
const machineryGallery = machineryMedia.slice(0, 12);

export const unitGallerySections = {
  factory: { id: "unit-gallery-factory", label: "Factory / Shop Floor Gallery", description: "Shop-floor images used for Unit-1 and shared factory galleries.", assets: factoryMedia },
  machinery: { id: "unit-gallery-machinery", label: "Machinery Gallery", description: "Machine photos used for Unit-2 and machinery sections.", assets: machineryMedia },
  infrastructure: { id: "unit-gallery-infrastructure", label: "Infrastructure Gallery", description: "Infrastructure photos used for Unit-3 and infrastructure sections.", assets: infrastructureMedia },
  quality: { id: "unit-gallery-quality", label: "Quality Lab Gallery", description: "Quality-inspection photos used for Unit-4 and quality sections.", assets: qualityMedia },
  team: { id: "unit-gallery-team", label: "Team / Workforce Gallery", description: "Team photos shared across about/gallery/unit sections.", assets: teamMedia },
} as const;


export const unitsConfig: UnitConfig[] = [
  {
    id: "bangalore-1",
    name: "Unnathi CNC Technologies Pvt Ltd (UNIT-1)",
    location: "Bangalore",
    address: "No.487, D1 & D2, 13th cross, 4th Phase, Peenya Industrial Area, Bangalore-560058",
    specialisation: "Precision component manufacturer",
    specialisationBadges: ["Precision Components", "AS9100D", "ISO 9001:2015"],
    overview: "Unit-1 is our primary precision manufacturing facility, certified for aerospace and defense standards.",
    specifications: [
      { label: "Certification", value: "AS 9100D & ISO 9001:2015" },
      { label: "Validity", value: "12/12/2027" },
      { label: "City", value: "Bangalore" },
    ],
    machines: commonMachines,
    capabilities: commonCapabilities,
    galleryImages: factoryGallery,
    industries: commonIndustries,
    teamDescription: "Dedicated team of precision engineers and quality assurance specialists.",
    teamPhoto: teamMedia[0].src,
    certifications: [{ name: "AS9100D" }, { name: "ISO 9001:2015" }],
    videoSrc: "/videos/unnathi-tour.mp4",
    contact: {
      address: "No.487, D1 & D2, 13th cross, 4th Phase, Peenya Industrial Area, Bangalore-560058",
      phone: "+91 80-41171792",
      email: "rfq@unnathicnc.com",
    },
    mapSrc: "https://maps.google.com/maps?q=13.018545,77.506557&z=16&output=embed",
  },
  {
    id: "bangalore-2",
    name: "Unnathi CNC Technologies Pvt Ltd (UNIT-2)",
    location: "Bangalore",
    address: "A-418(B), 9th main road, 4th Phase, Peenya Industrial Area, Bangalore -560058",
    specialisation: "Roll forming machine manufacturing",
    specialisationBadges: ["Roll Forming", "Machine Manufacturing"],
    overview: "Unit-2 specializes in the design and manufacturing of advanced roll forming machines.",
    specifications: [
      { label: "Core Expertise", value: "Roll Forming Machine Manufacturing" },
      { label: "City", value: "Bangalore" },
    ],
    machines: commonMachines,
    capabilities: commonCapabilities,
    galleryImages: machineryGallery,
    industries: commonIndustries,
    teamDescription: "Specialized machine build and assembly team.",
    teamPhoto: teamMedia[1].src,
    certifications: [{ name: "ISO 9001:2015" }],
    videoSrc: "/videos/unnathi-tour.mp4",
    contact: {
      address: "A-418(B), 9th main road, 4th Phase, Peenya Industrial Area, Bangalore -560058",
      phone: "+91 80-41171792",
      email: "rfq@unnathicnc.com",
    },
    mapSrc: "https://maps.google.com/maps?q=13.014614,77.500831&z=16&output=embed",
  },
  {
    id: "bangalore-3",
    name: "Unnathi CNC Technologies Pvt Ltd (UNIT-3)",
    location: "Bangalore",
    address: "No.9/5, Shed No.11, Yerappa Industrial Area, Magadi main road, Channenahalli, Tavarekere Hobli, Bangalore -562130",
    specialisation: "Pickling, Electropolishing & Passivation",
    specialisationBadges: ["Surface Treatment", "ISO 9001:2015"],
    overview: "Unit-3 is a dedicated facility for advanced surface treatments and finishing processes.",
    specifications: [
      { label: "Certification", value: "ISO 9001:2015" },
      { label: "Validity", value: "07/01/2029" },
      { label: "City", value: "Bangalore" },
    ],
    machines: commonMachines,
    capabilities: commonCapabilities,
    galleryImages: infrastructureMedia,
    industries: commonIndustries,
    teamDescription: "Process specialists in electropolishing and chemical surface treatments.",
    teamPhoto: teamMedia[2].src,
    certifications: [{ name: "ISO 9001:2015" }],
    videoSrc: "/videos/unnathi-tour.mp4",
    contact: {
      address: "No.9/5, Shed No.11, Yerappa Industrial Area, Magadi main road, Channenahalli, Tavarekere Hobli, Bangalore -562130",
      phone: "+91 80-41171792",
      email: "rfq@unnathicnc.com",
    },
    mapSrc: "https://maps.google.com/maps?q=12.976047,77.439051&z=16&output=embed",
  },
  {
    id: "tumakuru",
    name: "Unnathi CNC Technologies Pvt Ltd (UNIT-4)",
    location: "Tumakuru",
    address: "Plot No.254, Yalladadlu village, Hobli Kora, Nelahala, 2nd Phase, Vasanthanarasapura Industrial Area, Tumakuru -572128",
    specialisation: "Heavy Engineering works",
    specialisationBadges: ["Heavy Engineering", "Large Components"],
    overview: "Unit-4 is equipped for large-scale heavy engineering projects and component machining.",
    specifications: [
      { label: "Specialization", value: "Heavy Engineering" },
      { label: "City", value: "Tumakuru" },
    ],
    machines: commonMachines,
    capabilities: commonCapabilities,
    galleryImages: qualityMedia,
    industries: commonIndustries,
    teamDescription: "Heavy engineering production and logistics experts.",
    certifications: [{ name: "ISO 9001:2015" }],
    videoSrc: "/videos/unnathi-tour.mp4",
    contact: {
      address: "Plot No.254, Yalladadlu village, Hobli Kora, Nelahala, 2nd Phase, Vasanthanarasapura Industrial Area, Tumakuru -572128",
      phone: "+91 80-41171792",
      email: "rfq@unnathicnc.com",
    },
    mapSrc: "https://maps.google.com/maps?q=13.506792,77.024323&z=16&output=embed",
  },
];

export const unitsById = Object.fromEntries(unitsConfig.map((unit) => [unit.id, unit]));

export const factoryPhotos = factoryMedia;
export const machineryPhotos = machineryMedia;
export const infrastructurePhotos = infrastructureMedia;
export const qualityLabPhotos = qualityMedia;
export const teamPhotos = teamMedia;
