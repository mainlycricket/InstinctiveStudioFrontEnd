"use client"

import {
  Collapsible,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.title} size="large">
                <a href={item.url} className={`py-3 ${item.isActive? "bg-[#EEEEEE] text-[#0A0A0A]": "text-[#6F767E]"}`}>
                  <item.icon size={30} style={{ width: '20px', height: '20px' }} />
                  <h2 className={`text-[16px] font-bold ml-2 ${item.isActive? "" : ""}`}>{item.title}</h2>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
