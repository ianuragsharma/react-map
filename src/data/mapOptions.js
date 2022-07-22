import { v4 as uuidv4 } from "uuid";

const mapOption = [
  { id: uuidv4(), isChecked: true, text: "Land Cover", subText: "Yearly, 10m" },
  {
    id: uuidv4(),
    isChecked: false,
    text: "Forest Cover Change",
    subText: "Quarterly, 10m",
  },
  {
    id: uuidv4(),
    isChecked: false,
    text: "Forest Cover Type",
    subText: "Yearly, 10m",
  },
];
export { mapOption };
