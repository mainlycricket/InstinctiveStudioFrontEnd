"use client"

import * as React from "react"
import Logo from "@/public/logo.svg";
import { RiDashboard3Line, RiBookReadFill } from "react-icons/ri";
import { MdOutlineBook } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";


import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: RiDashboard3Line,
    },
    {
      title: "Students",
      url: "#",
      icon: RiBookReadFill,
      isActive: true,
    },
    {
      title: "Chapter",
      url: "#",
      icon: MdOutlineBook,
    },
    {
      title: "Helps",
      url: "#",
      icon: IoMdHelpCircleOutline,
    },
    {
      title: "Reports",
      url: "#",
      icon: AiOutlinePieChart,
    },
    {
      title: "Settings",
      url: "#",
      icon: IoSettingsOutline,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/" className="my-3" >
                <div className="grid text-left text-sm leading-tight">
                  <Image src={Logo} alt="logo" width={100} height={100} />
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>)
  );
}
