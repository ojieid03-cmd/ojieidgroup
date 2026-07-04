import {
  MonitorSmartphone,
  Tv,
  PanelTop,
  RadioTower,
} from "lucide-react";

export const mainMenu = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "PRODUCTS",
    href: "#",
    mega: "products",
  },
  {
    title: "KALKULATOR LED",
    href: "/kalkulator-led",
  },
  {
    title: "NEWS",
    href: "/news",
  },
  {
    title: "GALLERY",
    href: "/galeri",
  },
  {
    title: "ABOUT US",
    href: "/tentang",
  },
  {
    title: "CONTACT",
    href: "/kontak",
  },
];

export const productMenu = [
  {
    title: "Indoor LED Display",
    href: "/produk/videotron-indoor",
    icon: MonitorSmartphone,
  },
  {
    title: "Outdoor LED Display",
    href: "/produk/videotron-outdoor",
    icon: Tv,
  },
  {
    title: "Digital Signage",
    href: "/produk/digital-signage",
    icon: PanelTop,
  },
  {
    title: "Running Text",
    href: "/produk/running-text",
    icon: RadioTower,
  },
];