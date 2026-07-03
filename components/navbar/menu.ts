import {
  MonitorSmartphone,
  Tv,
  PanelTop,
  RadioTower,
  Wrench,
  Network,
  ShieldCheck,
  Headphones,
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
    title: "SERVICES",
    href: "#",
    mega: "services",
  },

  {
    title: "KALKULATOR LED",
    href: "/kalkulator-led",
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

export const serviceMenu = [
  {
    title: "Installation",
    href: "/penawaran",
    icon: Wrench,
  },
  {
    title: "Networking",
    href: "/penawaran",
    icon: Network,
  },
  {
    title: "Maintenance",
    href: "/penawaran",
    icon: ShieldCheck,
  },
  {
    title: "Technical Support",
    href: "/penawaran",
    icon: Headphones,
  },
];