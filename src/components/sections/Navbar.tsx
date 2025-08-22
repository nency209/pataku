"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { navigationItems } from "@/constants";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="navbar-bg flex items-center gap-10 py-4 px-6">
      {navigationItems.map((item, i) => (
        <div key={i} className="relative">
          {/* If has dropdown */}
          {item.hasDropdown ? (
            <DropdownMenu
              open={openDropdown === item.title}
              onOpenChange={(open) => setOpenDropdown(open ? item.title : null)}
            >
              <DropdownMenuTrigger className="flex items-center gap-1 text-[15px] font-rubik font-light navbar-text navbat-text-hover hover:cursor-pointer">
                {item.title}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="p-2 bg-white space-y-2">
                {/* Check if dropdownItems has groups (SHOP) */}
                {Array.isArray(item.dropdownItems) &&
                item.dropdownItems.some((d: any) => d.group) ? (
                  <div className="grid grid-cols-3 gap-4 p-2 bg-white">
                    {(item.dropdownItems as any[]).map((group, idx) => (
                      <div key={idx}>
                        <DropdownMenuLabel className="font-light font-rubik text-[13px]">
                          {group.group}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <ul className="space-y-4">
                          {group.items.map((sub: any, subIdx: number) => (
                            <li key={subIdx}>
                              <Link
                                href={sub.href}
                                className="flex items-center justify-between text-muted font-rubik text-hover text-sm"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Simple dropdown
                  <div className="space-y-1 w-48">
                    {(item.dropdownItems as any[]).map((sub: any, subIdx) => (
                      <DropdownMenuItem key={subIdx} asChild>
                        <Link
                          href={sub.href}
                          className="flex items-center justify-between w-full font-light font-rubik text-[13px] hover:cursor-pointer text-muted text-hover "
                        >
                          {sub.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={item.href} className="flex items-center gap-1 text-[15px] font-rubik font-light navbar-text text-hover hover:cursor-pointer">
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
