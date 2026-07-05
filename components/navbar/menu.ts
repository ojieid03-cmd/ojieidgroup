import {
  MonitorSmartphone,
  Tv,
  PanelTop,
  RadioTower,
  Wrench,
  ShieldCheck,
  Network,
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
    title: "Videotron Indoor",
    href: "/produk/videotron-indoor",
    icon: MonitorSmartphone,
  },
  {
    title: "Videotron Outdoor",
    href: "/produk/videotron-outdoor",
    icon: Tv,
  },
  {
    title: "Running Text",
    href: "/produk/running-text",
    icon: RadioTower,
  },
  {
    title: "Digital Signage",
    href: "/produk/digital-signage",
    icon: PanelTop,
  },
  {
    title: "Installation",
    href: "/produk/installation",
    icon: Wrench,
  },
  {
    title: "Maintenance",
    href: "/produk/maintenance",
    icon: ShieldCheck,
  },
  {
    title: "Networking",
    href: "/produk/networking",
    icon: Network,
  },
  {
    title: "WiFi Internet",
    href: "/produk/wifi",
    icon: Headphones,
  },
];