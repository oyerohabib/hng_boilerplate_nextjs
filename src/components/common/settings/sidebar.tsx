"use client";

import {
  Banknote,
  Bell,
  ChevronLeft,
  Database,
  Globe,
  LucideIcon,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "~/lib/utils";

type SettingsSidebarProperties = {
  id?: number;
  label: string;
  icon: LucideIcon;
  link: string;
};

const Settings_Sidebar_Links: SettingsSidebarProperties[] = [
  {
    id: 1,
    label: "General",
    icon: User,
    link: "general",
  },
  {
    id: 2,
    label: "Account",
    icon: UserPlus,
    link: "account",
  },
  {
    id: 3,
    label: "Notification",
    icon: Bell,
    link: "notification",
  },
  {
    id: 4,
    label: "Payment Information",
    icon: Banknote,
    link: "payment-information",
  },
  {
    id: 5,
    label: "Data and Privacy Settings",
    icon: Database,
    link: "privacy-settings",
  },
  {
    id: 6,
    label: "Language and Region",
    icon: Globe,
    link: "language-settings",
  },
];

const Settings_Sidebar_Organization_Links: SettingsSidebarProperties[] = [
  {
    id: 1,
    label: "Members",
    icon: Users,
    link: "members",
  },
  {
    id: 2,
    label: "Roles and Permissions",
    icon: Bell,
    link: "roles-ad-permissions",
  },
  {
    id: 3,
    label: "Integrations",
    icon: Banknote,
    link: "integrations",
  },
];

const SettingsSidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  // remove the /settings/ from the pathname
  const currentPath = pathname?.replace("/settings/", "");
  useEffect(() => {
    if (currentPath) setActiveLink(currentPath);
  }, [currentPath]);
  return (
    <section className="group absolute left-0 top-0 z-[50] hidden h-screen w-[0px] select-none flex-col items-center gap-y-4 rounded-t-[16px] bg-[#FAFAFA] py-6 transition-all duration-300 hover:w-[340px] md:flex md:w-[96px] min-[1140px]:w-[340px] min-[1140px]:p-4 min-[1140px]:pt-[70px]">
      <ul className="flex w-[100%] flex-col gap-y-4 pb-[30px] pt-8">
        <div className="items-center">
          <button
            className={cn(
              "flex h-[52px] cursor-pointer items-center justify-center gap-x-3 rounded-md px-3 py-2 text-2xl font-medium transition-colors duration-300",
            )}
            onClick={() => router.back()}
          >
            <ChevronLeft size={24} />
            <h2 className="font-semibold tracking-wider">Settings</h2>
          </button>
        </div>
        <h1 className="pl-[20px] pt-[30px] text-[16px] font-semibold tracking-wider text-neutral-500">
          Profile
        </h1>
        {Settings_Sidebar_Links.map((link) => (
          <Link
            href={`/settings/${link.link}`}
            key={link.id}
            aria-current={activeLink === link.link ? "page" : undefined}
            onKeyUp={(t) => {
              if (t.key === "Enter" || t.key === " ") {
                setActiveLink(link.link);
              }
            }}
            aria-label={link.label}
            className={cn(
              "flex h-[52px] cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-[16px] font-medium text-[#3a3a3a] transition-colors duration-300",
              activeLink === link.link
                ? "rounded bg-[#f97316] text-white outline-none"
                : "focus-visible:outline-primary-light hover:bg-[#f97316]/30 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2",
            )}
          >
            <link.icon size={24} aria-hidden />

            <span className="w-[80%] group-hover:block max-[1139px]:hidden">
              {link.label}
            </span>
          </Link>
        ))}
        <hr className="mt-[20px] border-gray-300 px-[5px]" />

        <h1 className="pl-[20px] pt-[30px] text-[16px] font-semibold tracking-wider text-neutral-500">
          Organizations
        </h1>

        {Settings_Sidebar_Organization_Links.map((link) => (
          <Link
            href={`/settings/${link.link}`}
            key={link.id}
            aria-current={activeLink === link.link ? "page" : undefined}
            onKeyUp={(t) => {
              if (t.key === "Enter" || t.key === " ") {
                setActiveLink(link.link);
              }
            }}
            aria-label={link.label}
            className={cn(
              "flex h-[52px] cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-[16px] font-medium text-[#3a3a3a] transition-colors duration-300",
              activeLink === link.link
                ? "rounded bg-[#f97316] text-white outline-none"
                : "focus-visible:outline-primary-light hover:bg-[#f97316]/30 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2",
            )}
          >
            <link.icon size={24} aria-hidden />

            <span className="w-[185px] group-hover:block max-[1139px]:hidden">
              {link.label}
            </span>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default SettingsSidebar;
