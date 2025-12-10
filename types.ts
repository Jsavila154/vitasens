export interface SubMenuItem {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageKey: string;
}

export interface AssetMap {
  [key: string]: string;
}