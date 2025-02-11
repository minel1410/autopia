"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"
import { H1 } from "./ui/typography"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export function Logo() {

  return (
    <SidebarMenu>
      <SidebarMenuItem key={"logo"}>
        <SidebarMenuButton className={"pt-5 h-full flex items-center gap-2"} asChild>
          <a href={"/"}>
            <Image
              src={"autopia-logo-notext.svg"}
              alt="logo"
              height={65}
              width={65}
            />
            <h1 className="text-2xl font-bold">AUTOPIA</h1>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

{/* <SidebarMenuItem>
        <div className="pt-5 flex items-center gap-2">
          <Image src={"autopia-logo-notext.svg"} alt="logo" height={60} width={60} />
          <h1 className="text-2xl font-bold">AUTOPIA</h1>
        </div>
      </SidebarMenuItem> */}


;