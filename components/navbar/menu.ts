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
    href: "/produk",
    icon: MonitorSmartphone,
  },
  {
    title: "Outdoor LED Display",
    href: "/produk",
    icon: Tv,
  },
  {
    title: "Digital Signage",
    href: "/produk",
    icon: PanelTop,
  },
  {
    title: "Running Text",
    href: "/produk",
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