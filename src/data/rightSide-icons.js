import { v4 as uuidv4 } from "uuid";

import {
  AiOutlineInfoCircle,
  AiOutlineCloudDownload,
  AiOutlineShareAlt,
  AiOutlineMessage,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { RiEarthLine } from "react-icons/ri";
import { BsCloudUpload, BsPeople } from "react-icons/bs";

const sidebarData = [
  {
    id: uuidv4(),
    title: "info",
    icon: AiOutlineInfoCircle,
  },
  {
    id: uuidv4(),
    title: "location",
    icon: GoLocation,
  },
  {
    id: uuidv4(),
    title: "earth",
    icon: RiEarthLine,
  },
  {
    id: uuidv4(),
    title: "upload",
    icon: BsCloudUpload,
  },
  { id: uuidv4(), title: "download", icon: AiOutlineCloudDownload },
  { id: uuidv4(), title: "share", icon: AiOutlineShareAlt },
  { id: uuidv4(), title: "people", icon: BsPeople },
  { id: uuidv4(), title: "message", icon: AiOutlineMessage },
];
export { sidebarData };
