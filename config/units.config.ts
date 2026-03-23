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
  images?: string[];
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

const machineImageSets = {
  turning: [machineryMedia[0].src, machineryMedia[4].src, machineryMedia[5].src],
  vmc: [machineryMedia[1].src, machineryMedia[2].src, machineryMedia[3].src],
  grinding: [machineryMedia[6].src, machineryMedia[8].src],
  wirecut: [machineryMedia[7].src],
  tig: [machineryMedia[11].src, machineryMedia[12].src],
  orbital: [machineryMedia[10].src, machineryMedia[16].src],
  heavy: [machineryMedia[13].src, machineryMedia[14].src, machineryMedia[15].src],
} as const;

const commonMachines: UnitMachine[] = [
  { id: "machine-spec-01", name: "CNC Turning Centre", brand: "ACE", model: "J300LM (3 Nos)", axis: "X, Z", image: machineImageSets.turning[0], images: machineImageSets.turning },
  { id: "machine-spec-02", name: "CNC Turning Centre", brand: "PRIDE", model: "Unnati-1000 (1 No.)", axis: "X, Z", image: machineImageSets.turning[1], images: machineImageSets.turning },
  { id: "machine-spec-03", name: "CNC Turning Centre", brand: "ACE", model: "JOBBER LM (1 No.)", axis: "X, Z", image: machineImageSets.turning[2], images: machineImageSets.turning },
  { id: "machine-spec-04", name: "CNC Turning Centre", brand: "HAAS", model: "ST 20 (1 No.)", axis: "X, Z", image: machineImageSets.turning[1], images: machineImageSets.turning },
  { id: "machine-spec-05", name: "CNC Turning Centre", brand: "JAGUAR", model: "LX20TL5 (1 No.)", axis: "X, Z", image: machineImageSets.turning[0], images: machineImageSets.turning },
  { id: "machine-spec-06", name: "CNC Turning Centre", brand: "PROTECK", model: "PL 500U (1 No.)", axis: "X, Z", image: machineImageSets.turning[2], images: machineImageSets.turning },
  { id: "machine-spec-07", name: "Vertical Milling Centre", brand: "BFW", model: "CHAKRA (3 Nos.)", axis: "X, Y, Z, A & B", image: machineImageSets.vmc[0], images: machineImageSets.vmc },
  { id: "machine-spec-08", name: "Vertical Milling Centre", brand: "HAAS", model: "DTH1 / VF-2", axis: "X, Y, Z / A & B", image: machineImageSets.vmc[1], images: machineImageSets.vmc },
  { id: "machine-spec-09", name: "Vertical Milling Centre", brand: "BFW", model: "AGNI+ / BMV Series", axis: "X, Y, Z & A", image: machineImageSets.vmc[2], images: machineImageSets.vmc },
  { id: "machine-spec-10", name: "Surface Grinding Machine", brand: "COSMOS", model: "E1050 / 114", axis: "X, Y, Z", image: machineImageSets.grinding[0], images: machineImageSets.grinding },
  { id: "machine-spec-11", name: "Cylindrical Grinding Machine", brand: "Micromatic", model: "GCU-350 / ECO-200U", axis: "X", image: machineImageSets.grinding[1], images: machineImageSets.grinding },
  { id: "machine-spec-12", name: "Wire Cutting Machine", brand: "Electronica", model: "2 Machines", axis: "X / X,Y,U,V,Z", image: machineImageSets.wirecut[0], images: machineImageSets.wirecut },
  { id: "machine-spec-13", name: "Orbital Welding Machine", brand: "ORBITRON", model: "7000", axis: "Welding head 75M", image: machineImageSets.orbital[0], images: machineImageSets.orbital },
  { id: "machine-spec-14", name: "Welding Machine", brand: "INDUS-ARC", model: "Max thickness 16 mm", axis: "—", image: machineImageSets.tig[0], images: machineImageSets.tig },
  { id: "machine-spec-15", name: "H-Boring Machine", brand: "Heavy Engineering Cell", model: "H-Boring", axis: "Horizontal", image: machineImageSets.heavy[0], images: machineImageSets.heavy },
  { id: "machine-spec-16", name: "VTL Machine", brand: "Heavy Engineering Cell", model: "VTL", axis: "Vertical", image: machineImageSets.heavy[2], images: machineImageSets.heavy },
];

const commonCapabilities = [
  "CNC Turning Centres",
  "Vertical Milling Centres",
  "Surface Grinding Machines",
  "Cylindrical Grinding Machines",
  "Wire Cutting Machines",
  "Orbital Welding",
  "Welding Support",
  "H-Boring & VTL",
  "Major Inspection Instruments",
];

const commonIndustries = ["Pharma Equipment", "Aerospace", "Semi-Conductor", "Machine Tools"];

const unit1Gallery = [
  ...factoryMedia.slice(0, 8),
  ...machineryMedia.slice(0, 1),
  ...machineryMedia.slice(9, 13),
  ...infrastructureMedia.slice(0, 6),
  ...qualityMedia.slice(5, 7),
];

const unit2Gallery = [
  ...machineryMedia.slice(1, 9),
  machineryMedia[6],
  machineryMedia[7],
];

const unit3Gallery = [
  factoryMedia[9],
  infrastructureMedia[6],
  infrastructureMedia[7],
  qualityMedia[0],
  qualityMedia[1],
];

const unit4Gallery = [
  factoryMedia[8],
  factoryMedia[10],
  factoryMedia[11],
  infrastructureMedia[8],
  infrastructureMedia[9],
  infrastructureMedia[10],
  infrastructureMedia[11],
  machineryMedia[13],
  machineryMedia[14],
  machineryMedia[15],
];

export const unitGallerySections = {
  factory: { id: "unit-gallery-factory", label: "Factory / Shop Floor Gallery", description: "Shop-floor images used for Unit-1 and shared factory galleries.", assets: factoryMedia },
  machinery: { id: "unit-gallery-machinery", label: "Machinery Gallery", description: "Machine photos used for Unit-2 and machinery sections.", assets: machineryMedia },
  infrastructure: { id: "unit-gallery-infrastructure", label: "Infrastructure Gallery", description: "Infrastructure photos used for Unit-3 and infrastructure sections.", assets: infrastructureMedia },
  quality: { id: "unit-gallery-quality", label: "Quality Lab Gallery", description: "Quality-inspection photos used for quality sections.", assets: qualityMedia },
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
    overview: "Unit-1 is our primary precision machining and fabrication facility, housing the core shop floor, welding cells, inspection room, and dispatch-ready infrastructure for repeat aerospace and industrial production.",
    specifications: [
      { label: "Certification", value: "AS 9100D & ISO 9001:2015" },
      { label: "Validity", value: "12/12/2027" },
      { label: "City", value: "Bangalore" },
    ],
    machines: commonMachines,
    capabilities: commonCapabilities,
    galleryImages: unit1Gallery,
    industries: commonIndustries,
    teamDescription: "Dedicated team of precision engineers, welders, machinists, and quality assurance specialists.",
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
    specialisation: "Dedicated machining and machine-building unit",
    specialisationBadges: ["Unit 02", "CNC Machining", "Machine Building"],
    overview: "Unit-2 is focused on standalone machine installations and machining capacity, featuring BFW centers, turning machines, grinding, EDM wire cutting, and supporting shop-floor assets for flexible production programs.",
    specifications: [
      { label: "Core Expertise", value: "CNC Machining & Machine Manufacturing" },
      { label: "City", value: "Bangalore" },
    ],
    machines: commonMachines,
    capabilities: commonCapabilities,
    galleryImages: unit2Gallery,
    industries: commonIndustries,
    teamDescription: "Specialized machine build, machining, and assembly team for flexible production runs.",
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
    specialisation: "Pickling, electropolishing and passivation",
    specialisationBadges: ["Unit 03", "Surface Treatment", "ISO 9001:2015"],
    overview: "Unit-3 is our process-treatment unit for electropolishing, pickling, passivation, and related finishing flows, supported by process-area imagery, controlled handling, and inspection instrumentation.",
    specifications: [
      { label: "Certification", value: "ISO 9001:2015" },
      { label: "Validity", value: "07/01/2029" },
      { label: "City", value: "Bangalore" },
    ],
    machines: commonMachines,
    capabilities: commonCapabilities,
    galleryImages: unit3Gallery,
    industries: commonIndustries,
    teamDescription: "Process specialists in electropolishing, pickling, passivation, and precision finishing workflows.",
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
    specialisation: "Heavy engineering works",
    specialisationBadges: ["Unit 04", "Heavy Engineering", "Large Components"],
    overview: "Unit-4 is the heavy-engineering expansion unit with H-boring, VTL, large shop-floor areas, storage, and building-level infrastructure suited for bigger components and fabrication-intensive programs.",
    specifications: [
      { label: "Specialization", value: "Heavy Engineering" },
      { label: "City", value: "Tumakuru" },
    ],
    machines: commonMachines,
    capabilities: commonCapabilities,
    galleryImages: unit4Gallery,
    industries: [...commonIndustries, "Heavy Engineering"],
    teamDescription: "Heavy engineering production, handling, and logistics experts supporting large-component manufacturing.",
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
