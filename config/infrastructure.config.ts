import { machineryMedia, qualityMedia } from "@config/media.config";

const machineImageSets = {
  vmc: [machineryMedia[1].src, machineryMedia[2].src, machineryMedia[3].src],
  turning: [machineryMedia[0].src, machineryMedia[4].src, machineryMedia[5].src],
  grinding: [machineryMedia[6].src, machineryMedia[8].src],
  wireCut: [machineryMedia[7].src],
  tig: [machineryMedia[11].src, machineryMedia[12].src],
  orbital: [machineryMedia[10].src, machineryMedia[16].src],
  heavy: [machineryMedia[13].src, machineryMedia[14].src, machineryMedia[15].src],
};

const metrologyImageSets = {
  cmm: [qualityMedia[0].src, qualityMedia[5].src],
  contour: [qualityMedia[1].src],
  height: [qualityMedia[2].src],
  vms: [qualityMedia[3].src],
  roughness: [qualityMedia[4].src],
  qc: [qualityMedia[6].src],
};

/**
 * Infrastructure page data configuration.
 * Scalable, admin-friendly structure for machinery, metrology, brands, and more.
 */

/* ── Types ─────────────────────────────────────────────────── */
export interface Machine {
  id: string;
  name: string;
  brand: string;
  model: string;
  axis: string;
  capacity: string;
  accuracy: string;
  controller: string;
  category: MachineCategory;
  images: string[];
  description: string;
  industries_supported: string[];
}

export interface MetrologyEquipment {
  id: string;
  equipment_name: string;
  brand: string;
  model: string;
  accuracy: string;
  resolution: string;
  use_case: string;
  images: string[];
  calibration_info: string;
}

export interface Brand {
  id: string;
  brand_name: string;
  country: string;
  machines_installed: number;
}

export type MachineCategory =
  | "CNC Machining Centers"
  | "CNC Turning Centers"
  | "Grinding Machines"
  | "Special Machines";

/* ── Machinery Database ──────────────────────────────────────── */
export const machineryDB: Machine[] = [
  // CNC Turning Centers
  {
    id: "turn-ace-j300lm",
    name: "CNC Turning Centre",
    brand: "ACE",
    model: "J300LM (3 Nos)",
    axis: "X, Z",
    capacity: "135 × 300 mm",
    accuracy: "0.02 mm",
    controller: "—",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "ACE J300LM CNC turning centres with 135 × 300 mm bed capacity.",
    industries_supported: ["Aerospace", "Medical", "Advanced Engineering"],
  },
  {
    id: "turn-pride-unnati-1000",
    name: "CNC Turning Centre",
    brand: "PRIDE",
    model: "Unnati-1000 (1 No.)",
    axis: "X, Z",
    capacity: "200 × 1000 mm",
    accuracy: "0.02 mm",
    controller: "—",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "Pride Unnati-1000 turning centre for longer shaft-type jobs.",
    industries_supported: ["Aerospace", "Machine Tools", "Advanced Engineering"],
  },
  {
    id: "turn-ace-jobber-lm",
    name: "CNC Turning Centre",
    brand: "ACE",
    model: "JOBBER LM (1 No.)",
    axis: "X, Z",
    capacity: "200 × 400 mm",
    accuracy: "0.001 mm",
    controller: "—",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "ACE Jobber LM turning centre for precision batch jobs.",
    industries_supported: ["Medical", "Aerospace", "Advanced Engineering"],
  },
  {
    id: "turn-haas-st20",
    name: "CNC Turning Centre",
    brand: "HAAS",
    model: "ST 20 (1 No.)",
    axis: "X, Z",
    capacity: "200 × 800 mm",
    accuracy: "0.01 mm",
    controller: "HAAS",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "HAAS ST 20 turning centre for precision turned components.",
    industries_supported: ["Aerospace", "Medical", "Machine Tools"],
  },
  {
    id: "turn-jaguar-lx20tl5",
    name: "CNC Turning Centre",
    brand: "JAGUAR",
    model: "LX20TL5 (1 No.)",
    axis: "X, Z",
    capacity: "250 × 500 mm",
    accuracy: "0.03 mm",
    controller: "—",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "Jaguar LX20TL5 turning centre for medium-sized turned components.",
    industries_supported: ["Machine Tools", "Advanced Engineering", "Industrial"],
  },
  {
    id: "turn-proteck-pl500u",
    name: "CNC Turning Centre",
    brand: "PROTECK",
    model: "PL 500U (1 No.)",
    axis: "X, Z",
    capacity: "400 × 1200 mm",
    accuracy: "0.03 mm",
    controller: "—",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "Proteck PL 500U turning centre for larger turning applications.",
    industries_supported: ["Heavy Engineering", "Machine Tools", "Industrial"],
  },
  {
    id: "turn-jaguar-standard",
    name: "CNC Turning Centre",
    brand: "JAGUAR",
    model: "Standard (1 No.)",
    axis: "X, Z",
    capacity: "250 × 500 mm",
    accuracy: "0.01 mm",
    controller: "—",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "General-purpose Jaguar CNC turning centre.",
    industries_supported: ["Advanced Engineering", "Industrial"],
  },
  {
    id: "turn-pride-standard",
    name: "CNC Turning Centre",
    brand: "PRIDE",
    model: "Standard (1 No.)",
    axis: "X, Z",
    capacity: "250 × 700 mm",
    accuracy: "0.01 mm",
    controller: "—",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "Pride turning centre for medium-size precision turning jobs.",
    industries_supported: ["Machine Tools", "Industrial"],
  },

  // CNC Machining Centers
  {
    id: "vmc-bfw-chakra-3",
    name: "Vertical Milling Centre",
    brand: "BFW",
    model: "CHAKRA (3 Nos.)",
    axis: "X, Y, Z, A & B",
    capacity: "1200 × 800 × 650 mm",
    accuracy: "0.02 mm",
    controller: "—",
    category: "CNC Machining Centers",
    images: machineImageSets.vmc,
    description: "BFW Chakra machining centres for multi-axis precision milling.",
    industries_supported: ["Aerospace", "Medical", "Advanced Engineering"],
  },
  {
    id: "vmc-haas-dth1",
    name: "Vertical Milling Centre",
    brand: "HAAS",
    model: "DTH1 (1 No.)",
    axis: "X, Y, Z",
    capacity: "400 × 600 × 350 mm",
    accuracy: "0.01 mm",
    controller: "HAAS",
    category: "CNC Machining Centers",
    images: machineImageSets.vmc,
    description: "HAAS vertical milling centre for compact high-precision jobs.",
    industries_supported: ["Medical", "Aerospace", "Machine Tools"],
  },
  {
    id: "vmc-haas-vf2",
    name: "Vertical Milling Centre",
    brand: "HAAS",
    model: "VF-2 (1 No.)",
    axis: "X, Y, Z, A & B",
    capacity: "762 × 406 × 508 mm",
    accuracy: "0.001 mm",
    controller: "HAAS",
    category: "CNC Machining Centers",
    images: machineImageSets.vmc,
    description: "HAAS VF-2 for close-tolerance machining operations.",
    industries_supported: ["Aerospace", "Medical", "Advanced Engineering"],
  },
  {
    id: "vmc-bfw-agni-plus-1",
    name: "Vertical Milling Centre",
    brand: "BFW",
    model: "AGNI + (1 No.)",
    axis: "X, Y, Z & A",
    capacity: "800 × 450 × 500 mm",
    accuracy: "0.015 mm",
    controller: "—",
    category: "CNC Machining Centers",
    images: machineImageSets.vmc,
    description: "BFW AGNI+ machining centre with 4-axis capability.",
    industries_supported: ["Machine Tools", "Aerospace", "Industrial"],
  },
  {
    id: "vmc-phillips-pvm1165",
    name: "Vertical Milling Centre",
    brand: "PHILLIPS",
    model: "PVM-1165 (1 No.)",
    axis: "X, Y, Z",
    capacity: "1150 × 600 × 500 mm",
    accuracy: "0.015 mm",
    controller: "—",
    category: "CNC Machining Centers",
    images: machineImageSets.vmc,
    description: "Phillips PVM-1165 vertical milling centre for larger machining envelopes.",
    industries_supported: ["Machine Tools", "Advanced Engineering", "Industrial"],
  },
  {
    id: "vmc-bfw-agni-plus-2",
    name: "Vertical Milling Centre",
    brand: "BFW",
    model: "AGNI + (1 No.)",
    axis: "X, Y, Z & A",
    capacity: "800 × 450 × 500 mm",
    accuracy: "0.015 mm",
    controller: "—",
    category: "CNC Machining Centers",
    images: machineImageSets.vmc,
    description: "Second BFW AGNI+ centre for flexible 4-axis milling operations.",
    industries_supported: ["Machine Tools", "Industrial"],
  },
  {
    id: "vmc-bfw-bmv60-tc20",
    name: "Vertical Milling Centre",
    brand: "BFW Chakra",
    model: "BMV60 TC20 (1 No.)",
    axis: "X, Y, Z, A & B",
    capacity: "400 × 600 × 500 mm",
    accuracy: "0.01 mm",
    controller: "—",
    category: "CNC Machining Centers",
    images: machineImageSets.vmc,
    description: "BFW Chakra BMV60 TC20 5-axis machining centre.",
    industries_supported: ["Aerospace", "Medical", "Advanced Engineering"],
  },
  {
    id: "vmc-bfw-bmv50-tc24",
    name: "Vertical Milling Centre",
    brand: "BFW",
    model: "BMV50 TC24 (1 No.)",
    axis: "X, Y, Z",
    capacity: "850 × 600 × 500 mm",
    accuracy: "0.01 mm",
    controller: "—",
    category: "CNC Machining Centers",
    images: machineImageSets.vmc,
    description: "BFW BMV50 TC24 machining centre for precision milling applications.",
    industries_supported: ["Machine Tools", "Aerospace", "Industrial"],
  },

  // Grinding Machines
  {
    id: "grind-surface-cosmos-e1050",
    name: "Surface Grinding Machine",
    brand: "COSMOS",
    model: "E1050 (1 No.)",
    axis: "X, Y, Z",
    capacity: "1000 × 500 × 500 mm",
    accuracy: "0.001 mm",
    controller: "—",
    category: "Grinding Machines",
    images: machineImageSets.grinding,
    description: "Cosmos E1050 surface grinder for precision flat grinding.",
    industries_supported: ["Aerospace", "Machine Tools", "Advanced Engineering"],
  },
  {
    id: "grind-surface-cosmos-114",
    name: "Surface Grinding Machine",
    brand: "COSMOS",
    model: "114 (1 No.)",
    axis: "X, Y, Z",
    capacity: "700 × 400 × 400 mm",
    accuracy: "0.001 mm",
    controller: "—",
    category: "Grinding Machines",
    images: machineImageSets.grinding,
    description: "Cosmos 114 surface grinder for precision finishing.",
    industries_supported: ["Machine Tools", "Industrial"],
  },
  {
    id: "grind-surface-pinnacle",
    name: "Surface Grinding Machine",
    brand: "PINNACLE",
    model: "Standard (1 No.)",
    axis: "X, Y, Z",
    capacity: "1000 × 500 × 500 mm",
    accuracy: "0.001 mm",
    controller: "—",
    category: "Grinding Machines",
    images: machineImageSets.grinding,
    description: "Pinnacle surface grinder for close-tolerance finishing.",
    industries_supported: ["Industrial", "Tool Room"],
  },
  {
    id: "grind-cyl-gcu350-1200",
    name: "Cylindrical Grinding Machine",
    brand: "Micromatic",
    model: "GCU-350 (1 No.)",
    axis: "X",
    capacity: "250 × 350 × 1200 mm",
    accuracy: "0.001 mm",
    controller: "—",
    category: "Grinding Machines",
    images: machineImageSets.grinding,
    description: "Micromatic GCU-350 cylindrical grinder for longer shafts and journals.",
    industries_supported: ["Aerospace", "Heavy Engineering", "Industrial"],
  },
  {
    id: "grind-cyl-eco200u",
    name: "Cylindrical Grinding Machine",
    brand: "Micromatic",
    model: "ECO-200U (1 No.)",
    axis: "X",
    capacity: "100 × 200 × 425 mm",
    accuracy: "0.001 mm",
    controller: "—",
    category: "Grinding Machines",
    images: machineImageSets.grinding,
    description: "Micromatic ECO-200U cylindrical grinder for smaller precision components.",
    industries_supported: ["Medical", "Aerospace", "Advanced Engineering"],
  },
  {
    id: "grind-cyl-gcu350-800",
    name: "Cylindrical Grinding Machine",
    brand: "Micromatic",
    model: "GCU-350 (1 No.)",
    axis: "X",
    capacity: "350 × 800 mm",
    accuracy: "0.001 mm",
    controller: "—",
    category: "Grinding Machines",
    images: machineImageSets.grinding,
    description: "Additional Micromatic GCU-350 cylindrical grinding capacity.",
    industries_supported: ["Industrial", "Heavy Engineering"],
  },

  // Special Machines
  {
    id: "wirecut-electronica-large",
    name: "Wire Cutting Machine",
    brand: "Electronica",
    model: "Standard (1 No.)",
    axis: "X",
    capacity: "550 × 600 mm",
    accuracy: "0.05 mm",
    controller: "Electronica",
    category: "Special Machines",
    images: machineImageSets.wireCut,
    description: "Electronica wire cut machine for larger profile cutting work.",
    industries_supported: ["Aerospace", "Tool Room", "Advanced Engineering"],
  },
  {
    id: "wirecut-electronica-uvz",
    name: "Wire Cutting Machine",
    brand: "Electronica",
    model: "Standard (1 No.)",
    axis: "X, Y, U, V & Z",
    capacity: "300 × 400 × 200 mm",
    accuracy: "0.01 mm",
    controller: "Electronica",
    category: "Special Machines",
    images: machineImageSets.wireCut,
    description: "Electronica wire cut machine for complex multi-axis profile jobs.",
    industries_supported: ["Aerospace", "Medical", "Advanced Engineering"],
  },
  {
    id: "weld-orbitron-7000",
    name: "Orbital Welding Machine",
    brand: "ORBITRON",
    model: "7000",
    axis: "Welding head 75M",
    capacity: "Orbital tube & pipe welding",
    accuracy: "Process controlled",
    controller: "Automatic",
    category: "Special Machines",
    images: machineImageSets.orbital,
    description: "Orbitron 7000 orbital welding machine with 75M welding head.",
    industries_supported: ["Pharma Equipment", "Medical", "Advanced Engineering"],
  },
  {
    id: "weld-indus-arc",
    name: "Welding Machine",
    brand: "INDUS-ARC",
    model: "Standard",
    axis: "—",
    capacity: "Max. thickness 16 mm",
    accuracy: "Process controlled",
    controller: "Manual",
    category: "Special Machines",
    images: machineImageSets.tig,
    description: "Indus-Arc welding machine with maximum 16 mm thickness capability.",
    industries_supported: ["Pharma Equipment", "Aerospace", "Industrial"],
  },
];

/* ── Metrology Database ─────────────────────────────────────── */
export const metrologyDB: MetrologyEquipment[] = [
  {
    id: "metro-tesa-454",
    equipment_name: "Height Master",
    brand: "TESA",
    model: "454 (1 No.)",
    accuracy: "Least count 0.0001 mm",
    resolution: "0.0001 mm",
    use_case: "Table capacity 460 × 510 × 420 mm for precision height and dimensional inspection.",
    images: metrologyImageSets.height,
    calibration_info: "Axis: X, Y, Z.",
  },
  {
    id: "metro-zeiss-1600g-1",
    equipment_name: "Contour / Measuring Instrument",
    brand: "ZEISS",
    model: "1600G (1 No.)",
    accuracy: "Least count 0.001 mm",
    resolution: "0.001 mm",
    use_case: "Measuring length 0 to 100 mm for contour and profile verification.",
    images: metrologyImageSets.contour,
    calibration_info: "Axis: X, Z.",
  },
  {
    id: "metro-zeiss-surfcom",
    equipment_name: "Surface Roughness Instrument",
    brand: "ZEISS",
    model: "Surfcom (1 No.)",
    accuracy: "Least count 0.0001 mm",
    resolution: "0.0001 mm",
    use_case: "Measuring length 0 to 50 mm for surface finish validation.",
    images: metrologyImageSets.roughness,
    calibration_info: "Axis: X, Z.",
  },
  {
    id: "metro-zeiss-1600g-2",
    equipment_name: "Contour / Measuring Instrument",
    brand: "ZEISS",
    model: "1600G (1 No.)",
    accuracy: "Least count 0.0001 mm",
    resolution: "0.0001 mm",
    use_case: "Measuring length 0 to 100 mm for precision profile and dimensional checks.",
    images: metrologyImageSets.cmm,
    calibration_info: "Axis: X, Z.",
  },
];

/* ── Brands Database ─────────────────────────────────────────── */
export const brandsDB: Brand[] = [
  { id: "brand-ace", brand_name: "ACE", country: "India", machines_installed: 4 },
  { id: "brand-pride", brand_name: "PRIDE", country: "India", machines_installed: 2 },
  { id: "brand-haas", brand_name: "HAAS", country: "USA", machines_installed: 2 },
  { id: "brand-jaguar", brand_name: "JAGUAR", country: "Taiwan", machines_installed: 2 },
  { id: "brand-proteck", brand_name: "PROTECK", country: "India", machines_installed: 1 },
  { id: "brand-bfw", brand_name: "BFW", country: "India", machines_installed: 6 },
  { id: "brand-phillips", brand_name: "PHILLIPS", country: "India", machines_installed: 1 },
  { id: "brand-cosmos", brand_name: "COSMOS", country: "India", machines_installed: 2 },
  { id: "brand-micromatic", brand_name: "Micromatic", country: "India", machines_installed: 3 },
  { id: "brand-electronica", brand_name: "Electronica", country: "India", machines_installed: 2 },
  { id: "brand-orbitron", brand_name: "ORBITRON", country: "India", machines_installed: 1 },
  { id: "brand-zeiss", brand_name: "ZEISS", country: "Germany", machines_installed: 3 },
  { id: "brand-tesa", brand_name: "TESA", country: "Switzerland", machines_installed: 1 },
];

/* ── Categories ──────────────────────────────────────────────── */
export const machineCategories: MachineCategory[] = [
  "CNC Machining Centers",
  "CNC Turning Centers",
  "Grinding Machines",
  "Special Machines",
];

/* ── Capability Metrics ─────────────────────────────────────── */
export const capabilityMetrics = [
  { label: "Turning Platforms", value: "8 Machines", desc: "ACE, Pride, HAAS, Jaguar and Proteck turning centres" },
  { label: "Milling Platforms", value: "8 Machines", desc: "BFW, HAAS and Phillips vertical milling centres" },
  { label: "Grinding Capacity", value: "6 Machines", desc: "Surface and cylindrical grinding for close-tolerance finishing" },
  { label: "Wire Cut Capacity", value: "2 Machines", desc: "Electronica EDM wire cutting capability" },
  { label: "Welding Capability", value: "Orbitron + Indus-Arc", desc: "Orbital welding and welding support for fabrication processes" },
  { label: "Metrology Assets", value: "4 Major Instruments", desc: "TESA and ZEISS inspection systems for dimensional control" },
];

/* ── Process Steps ──────────────────────────────────────────── */
export const processSteps = [
  { label: "Raw Material", desc: "Incoming inspection & material certification" },
  { label: "CNC Machining", desc: "Turning, milling, multi-axis operations" },
  { label: "Grinding", desc: "Surface, cylindrical & internal grinding" },
  { label: "In-Process QC", desc: "Dimensional checks at every stage" },
  { label: "Final Inspection", desc: "CMM, profile projector, roughness testing" },
  { label: "Finishing", desc: "Deburring, polishing, surface treatment" },
  { label: "Dispatch", desc: "Packing, documentation & delivery" },
];

/* ── FAQ Items ───────────────────────────────────────────────── */
export const faqItems = [
  { q: "What machining tolerances can you achieve?", a: "We routinely achieve tolerances of ±0.005 mm across CNC turning, milling, and grinding operations. For critical aerospace components, we can achieve ±0.002 mm with our precision grinding equipment." },
  { q: "Do you handle aerospace components?", a: "Yes. We are AS9100D certified and supply precision machined components to leading aerospace OEMs and Tier-1 suppliers. Our quality management system meets the stringent requirements of the aerospace industry." },
  { q: "What is your maximum machining capacity?", a: "Our VMCs handle up to 1000 × 500 × 500 mm travel. CNC turning capacity goes up to Ø 267 mm. We have the capability to machine a wide range of component sizes across our fleet of 30+ precision machines." },
  { q: "Do you provide inspection reports?", a: "Every component ships with a detailed dimensional inspection report. We provide FAIR (First Article Inspection Report), material test certificates, and CoC (Certificate of Conformity) as required." },
  { q: "Can you handle bulk production orders?", a: "Our facility is equipped with bar feeding systems, ERP-integrated production planning, and a capacity exceeding 10,000 components per month. We handle prototype to high-volume production seamlessly." },
];

/* ── Safety & Compliance ────────────────────────────────────── */
export const safetyItems = [
  { label: "5S Workplace", desc: "Organized, clean manufacturing environment" },
  { label: "PPE Compliance", desc: "Mandatory protective equipment at all stations" },
  { label: "Fire Safety", desc: "Fire detection, suppression & evacuation systems" },
  { label: "Controlled Zones", desc: "Restricted access manufacturing areas" },
  { label: "ISO & AS9100D", desc: "International quality management compliance" },
];

/* ── Facility Features ──────────────────────────────────────── */
export const facilityFeatures = [
  "20,000+ sq. ft. manufacturing floor",
  "Climate-controlled inspection room",
  "Dedicated tool room & storage",
  "ERP-integrated production planning",
  "5S compliant workspace",
  "ISO & AS9100D certified environment",
];

/* ── Gallery Labels ─────────────────────────────────────────── */
export const galleryLabels = [
  "CNC Shop Floor",
  "Machining Operations",
  "Turning Center Bay",
  "Milling Operations",
  "Quality Inspection Lab",
  "Tool Room & Storage",
];
