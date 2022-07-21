import { v4 as uuidv4 } from "uuid";

const mapMarkers = [
  { id: uuidv4(), text: "Agriculture", color: "RGB(210, 169, 101)" },
  { id: uuidv4(), text: "Forest", color: "RGB(21, 119, 100)" },
  { id: uuidv4(), text: "Grassland", color: "RGB(204, 219, 152)" },
  { id: uuidv4(), text: "Shrubland", color: "RGB(89, 107, 44)" },
  { id: uuidv4(), text: "Sparse vegetation", color: "RGB(214, 203, 155)" },
  { id: uuidv4(), text: "Wetland", color: "RGB(39, 137, 212)" },
  { id: uuidv4(), text: "Settlement", color: "RGB(233, 70, 43)" },
  { id: uuidv4(), text: "Bare", color: "RGB(246, 240, 234)" },
  { id: uuidv4(), text: "Water", color: "RGB(163, 220, 255)" },
  { id: uuidv4(), text: "Permanent snow and ice", color: "RGB(255, 255, 255)" },
];
export { mapMarkers };
