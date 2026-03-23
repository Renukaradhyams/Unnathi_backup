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
  // CNC Machining Centers
  {
    id: "vmc-bfw-chakra",
    name: "VMC Milling Machine",
    brand: "BFW",
    model: "CHAKRA BMV60TC24",
    axis: "3-Axis",
    capacity: "600 × 400 × 450 mm",
    accuracy: "±0.005 mm",
    controller: "FANUC / Mitsubishi",
    category: "CNC Machining Centers",
    images: machineImageSets.vmc,
    description: "High-precision vertical machining center for complex milling operations.",
    industries_supported: ["Aerospace", "Medical", "Industrial"],
  },
  {
    id: "vmc-haas-vf2",
    name: "VMC Milling Machine",
    brand: "HAAS",
    model: "VF-2",
    axis: "3-Axis",
    capacity: "762 × 406 × 508 mm",
    accuracy: "±0.005 mm",
    controller: "HAAS NGC",
    category: "CNC Machining Centers",
    images: machineImageSets.vmc,
    description: "Versatile vertical machining center for high-precision component manufacturing.",
    industries_supported: ["Aerospace", "Defense", "Industrial"],
  },
  {
    id: "vmc-phillips",
    name: "VMC Milling Machine",
    brand: "PHILLIPS",
    model: "VMC",
    axis: "3-Axis",
    capacity: "Standard",
    accuracy: "±0.008 mm",
    controller: "Various",
    category: "CNC Machining Centers",
    images: machineImageSets.vmc,
    description: "Reliable VMC for general-purpose machining and production.",
    industries_supported: ["Industrial", "Machine Tools"],
  },
  // CNC Turning Centers
  {
    id: "cnc-ace-j300lm",
    name: "CNC Turning Machine",
    brand: "ACE",
    model: "J300LM",
    axis: "2-Axis",
    capacity: "Ø 300 mm",
    accuracy: "±0.005 mm",
    controller: "FANUC",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "High-precision CNC turning center for medium to large components.",
    industries_supported: ["Automotive", "Industrial"],
  },
  {
    id: "cnc-ace-jobber",
    name: "CNC Turning Machine",
    brand: "ACE",
    model: "JOBBER LM",
    axis: "2-Axis",
    capacity: "Ø 200 mm",
    accuracy: "±0.005 mm",
    controller: "FANUC",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "Compact and efficient CNC turning center for high-volume production.",
    industries_supported: ["Automotive", "Industrial", "Electronics"],
  },
  {
    id: "cnc-haas-st20",
    name: "CNC Turning Machine",
    brand: "HAAS",
    model: "ST-20",
    axis: "2-Axis",
    capacity: "Ø 267 × 533 mm",
    accuracy: "±0.005 mm",
    controller: "HAAS NGC",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "High-performance turning center for precision engineering components.",
    industries_supported: ["Aerospace", "Industrial", "Medical"],
  },
  {
    id: "cnc-jaguar-lx20",
    name: "CNC Turning Machine",
    brand: "JAGUAR",
    model: "LX20TL5",
    axis: "2-Axis",
    capacity: "Ø 200 mm",
    accuracy: "±0.008 mm",
    controller: "Various",
    category: "CNC Turning Centers",
    images: machineImageSets.turning,
    description: "Reliable CNC turning for precision parts and connectors.",
    industries_supported: ["Industrial", "Machine Tools"],
  },
  // Grinding Machines
  {
    id: "grind-surf-cosmos",
    name: "Surface Grinding Machine",
    brand: "COSMOS",
    model: "Surface Grinder",
    axis: "Manual / Semi-Auto",
    capacity: "Standard",
    accuracy: "±0.002 mm",
    controller: "Manual",
    category: "Grinding Machines",
    images: machineImageSets.grinding,
    description: "Precision surface grinding for flat surface finishing and parallel surfaces.",
    industries_supported: ["Die & Mold", "Industrial"],
  },
  {
    id: "grind-surf-pinnacle",
    name: "Surface Grinding Machine",
    brand: "Pinnacle",
    model: "Surface Grinder",
    axis: "Manual",
    capacity: "Standard",
    accuracy: "±0.002 mm",
    controller: "Manual",
    category: "Grinding Machines",
    images: machineImageSets.grinding,
    description: "Secondary surface grinding capability for high-precision finishing.",
    industries_supported: ["Industrial", "Tool Room"],
  },
  {
    id: "grind-cyl-micromatic-eco",
    name: "Cylindrical Grinding Machine",
    brand: "Micromatic",
    model: "ECO-200U",
    axis: "Manual / Semi-Auto",
    capacity: "Ø 200 × 500 mm",
    accuracy: "±0.002 mm",
    controller: "Manual",
    category: "Grinding Machines",
    images: machineImageSets.grinding,
    description: "Precision cylindrical grinder for shafts and bearing surfaces.",
    industries_supported: ["Aerospace", "Automotive"],
  },
  {
    id: "grind-cyl-micromatic-gcu",
    name: "Cylindrical Grinding Machine",
    brand: "Micromatic",
    model: "GCU-350",
    axis: "Manual / Semi-Auto",
    capacity: "Ø 350 × 1000 mm",
    accuracy: "±0.002 mm",
    controller: "Manual",
    category: "Grinding Machines",
    images: machineImageSets.grinding,
    description: "Large capacity cylindrical grinder for heavy engineering components.",
    industries_supported: ["Industrial", "Heavy Engineering"],
  },
  // Special Machines
  {
    id: "edm-wire-electronica",
    name: "Wire Cut Machine",
    brand: "Electronica",
    model: "Wire Cut",
    axis: "4-Axis",
    capacity: "Standard",
    accuracy: "±0.005 mm",
    controller: "Electronica CNC",
    category: "Special Machines",
    images: machineImageSets.wireCut,
    description: "Precision wire-cut EDM for complex profiles and hardened materials.",
    industries_supported: ["Die & Mold", "Aerospace"],
  },
  {
    id: "weld-tig-indus",
    name: "TIG Welding Machine",
    brand: "INDUS-ARC",
    model: "TIG",
    axis: "Manual",
    capacity: "Various",
    accuracy: "N/A",
    controller: "Manual",
    category: "Special Machines",
    images: machineImageSets.tig,
    description: "Precision TIG welding for aerospace and pharma equipment.",
    industries_supported: ["Pharma", "Aerospace"],
  },
  {
    id: "weld-orbital",
    name: "Orbital Welding Machine",
    brand: "ORBITRON",
    model: "Orbital",
    axis: "Automatic",
    capacity: "Pipe welding",
    accuracy: "High-precision",
    controller: "Automatic",
    category: "Special Machines",
    images: [...machineImageSets.orbital, ...machineImageSets.heavy],
    description: "Automated orbital welding for high-purity piping and assemblies.",
    industries_supported: ["Pharma", "Semi-conductor"],
  },
];

/* ── Metrology Database ─────────────────────────────────────── */
export const metrologyDB: MetrologyEquipment[] = [
  {
    id: "metro-surface-table",
    equipment_name: "Surface Table for Inspection",
    brand: "Various",
    model: "Grade 0 / Grade 1",
    accuracy: "High-flatness",
    resolution: "N/A",
    use_case: "Base for all precision dimensional measurements and inspections.",
    images: metrologyImageSets.qc,
    calibration_info: "Calibrated annually with NABL traceability.",
  },
  {
    id: "metro-micrometer",
    equipment_name: "Digital Micrometer",
    brand: "Mitutoyo / Baker",
    model: "0-25mm, 25-50mm",
    accuracy: "±0.001 mm",
    resolution: "0.001 mm",
    use_case: "Precision measurement of outside diameters and thicknesses.",
    images: metrologyImageSets.qc,
    calibration_info: "NABL traceable calibration.",
  },
  {
    id: "metro-height-master",
    equipment_name: "Height Master",
    brand: "Mitutoyo",
    model: "Series 515",
    accuracy: "±0.001 mm",
    resolution: "0.001 mm",
    use_case: "Reference standard for height measurement and calibration of height gauges.",
    images: metrologyImageSets.height,
    calibration_info: "NABL traceable calibration.",
  },
  {
    id: "metro-vernier",
    equipment_name: "Digital Vernier",
    brand: "Mitutoyo",
    model: "Series 500",
    accuracy: "±0.01 mm",
    resolution: "0.01 mm",
    use_case: "Fast and reliable dimensional check for various component features.",
    images: metrologyImageSets.qc,
    calibration_info: "NABL traceable calibration.",
  },
  {
    id: "metro-profile",
    equipment_name: "Profile Projector",
    brand: "Mitutoyo",
    model: "PJ Series",
    accuracy: "±0.001 mm",
    resolution: "Optical magnification",
    use_case: "Inspection of complex profiles, contours, and thread geometry.",
    images: metrologyImageSets.contour,
    calibration_info: "NABL traceable annual calibration.",
  },
  {
    id: "metro-vision",
    equipment_name: "Vision Measuring System",
    brand: "Various",
    model: "Non-contact",
    accuracy: "±0.002 mm",
    resolution: "High-optical resolution",
    use_case: "Automated non-contact measurement of micro-features and flexible parts.",
    images: metrologyImageSets.vms,
    calibration_info: "Annual re-certification.",
  },
  {
    id: "metro-depth-gauge",
    equipment_name: "Depth Gauge",
    brand: "Mitutoyo",
    model: "Digital / Dial",
    accuracy: "±0.01 mm",
    resolution: "0.01 mm",
    use_case: "Measurement of hole depths, steps, and recess features.",
    images: metrologyImageSets.qc,
    calibration_info: "NABL traceable calibration.",
  },
  {
    id: "metro-gauges",
    equipment_name: "Thread Gauges, Pin Gauges",
    brand: "Various",
    model: "Metric / Imperial",
    accuracy: "Class X / Class Y",
    resolution: "N/A",
    use_case: "Go/No-Go inspection for threads and internal hole diameters.",
    images: metrologyImageSets.qc,
    calibration_info: "Certified master gauges.",
  },
  {
    id: "metro-cmm",
    equipment_name: "CMM (Coordinate Measuring Machine)",
    brand: "Various",
    model: "CNC CMM",
    accuracy: "±0.002 mm",
    resolution: "0.001 mm",
    use_case: "Comprehensive 3D inspection of complex geometries and GD&T verification.",
    images: metrologyImageSets.cmm,
    calibration_info: "NABL traceable calibration.",
  },
  {
    id: "metro-contour",
    equipment_name: "Contour Measuring Instrument",
    brand: "Mitutoyo",
    model: "Contracer",
    accuracy: "High-precision contouring",
    resolution: "Sub-micron",
    use_case: "Detailed analysis of surface profiles, radii, and complex shapes.",
    images: metrologyImageSets.contour,
    calibration_info: "Traceable calibration.",
  },
  {
    id: "metro-roughness",
    equipment_name: "Surface Roughness Instrument",
    brand: "Mitutoyo",
    model: "Surftest",
    accuracy: "±0.01 µm",
    resolution: "0.01 µm",
    use_case: "Measurement of surface finish (Ra, Rz, Rq) to ensure design specification compliance.",
    images: metrologyImageSets.roughness,
    calibration_info: "Traceable calibration with reference specimen.",
  },
];

/* ── Brands Database ─────────────────────────────────────────── */
export const brandsDB: Brand[] = [
  { id: "brand-haas", brand_name: "HAAS", country: "USA", machines_installed: 5 },
  { id: "brand-bfw", brand_name: "BFW", country: "India", machines_installed: 3 },
  { id: "brand-micromatic", brand_name: "Micromatic", country: "India", machines_installed: 2 },
  { id: "brand-pride", brand_name: "Pride", country: "India", machines_installed: 2 },
  { id: "brand-proteck", brand_name: "Proteck", country: "India", machines_installed: 3 },
  { id: "brand-mitutoyo", brand_name: "Mitutoyo", country: "Japan", machines_installed: 5 },
  { id: "brand-electronica", brand_name: "Electronica", country: "India", machines_installed: 1 },
  { id: "brand-fanuc", brand_name: "FANUC", country: "Japan", machines_installed: 4 },
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
  { label: "Tolerance Capability", value: "±0.005 mm", desc: "Micron-level precision across all operations" },
  { label: "Max Turning Capacity", value: "Ø 267 mm", desc: "Multi-axis turning capability" },
  { label: "Max Milling Travel", value: "1000 mm", desc: "Large component machining" },
  { label: "Batch Capacity", value: "10k+/month", desc: "Scalable production volumes" },
  { label: "Inspection Room", value: "Climate Controlled", desc: "Stable measurement environment" },
  { label: "Production System", value: "ERP Integrated", desc: "Real-time tracking & traceability" },
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
