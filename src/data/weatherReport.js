import { v4 as uuidv4 } from "uuid";

import { AiOutlineEye } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPinMap } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SiForestry } from "react-icons/si";
const weatherData = [
  {
    id: uuidv4(),
    title: "Microwatch",
    icon: AiOutlineEye,
  },
  {
    id: uuidv4(),
    title: "Logging Alerts",
    icon: IoIosNotificationsOutline,
  },
  {
    id: uuidv4(),
    title: "Detect Encroachment",
    icon: BsPinMap,
  },
  {
    id: uuidv4(),
    title: "Weather",
    icon: TiWeatherPartlySunny,
  },
  {
    id: uuidv4(),
    title: "Forest AOI",
    icon: SiForestry,
  },
];
export { weatherData };
