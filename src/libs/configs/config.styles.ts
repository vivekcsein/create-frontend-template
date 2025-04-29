// all the styles related jobs written here
import { Poppins, Roboto, Nunito, Cabin, Lora } from "next/font/google";
// import localFont from 'next/font/local';
export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});
export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-nunito",
});
export const cabin = Cabin({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-cabin",
});
export const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-lora",
});

export const colors = [
  {
    id: "01",
    name: "background",
    code: "#000000",
  },
  {
    id: "02",
    name: "primary",
    code: "#dd00ff",
  },
  {
    id: "03",
    name: "secondary",
    code: "#6600ff",
  },
  {
    id: "04",
    name: "accent",
    code: "#10ff10",
  },
  {
    id: "05",
    name: "destructive",
    code: "#ff0000",
  },
  {
    id: "06",
    name: "muted",
    code: "#ededed",
  },
  {
    id: "07",
    name: "shadow",
    code: "#00000033",
  },
  {
    id: "08",
    name: "border",
    code: "#ffccff",
  },
];

// const localfont = localFont({
//   src: [
//     {
//       path: '../../public/fonts/local-Regular.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-local',
// })
