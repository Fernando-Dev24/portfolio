"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, SunMoon } from "lucide-react";

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  const handleDarkTheme = () => setTheme("dark");
  const handleLightTheme = () => setTheme("light");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant={"ghost"} />}>
        <SunMoon className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Themes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLightTheme}>
            <Sun />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDarkTheme}>
            <Moon />
            Dark
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
