"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { useTranslations } from "next-intl"


export function NavMenu() {
  const t = useTranslations("navbar")

  return (
    <NavigationMenu viewport={false} className="top-0 z-50 
                           bg-black/30 backdrop-blur-md 
                           border-b border-white/10 
                           px-6 py-3">
      <NavigationMenuList className="justify-end gap-6 text-sm text-white">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white/80 hover:text-white transition-colors 
             data-[state=open]:text-emerald-400">{t('title')}</NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-xl bg-black/80 backdrop-blur-md 
                                   border border-white/10 p-4 shadow-xl">
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#products" className="block px-3 py-2 rounded-lg 
             text-sm text-gray-200 hover:text-emerald-500 
             hover:bg-white/10 transition-colors">
                    <div className="font-medium">{t('items.0.subtitle')}</div>
                    <div className="text-gray-400 text-xs">
                      {t('items.0.description')}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white/80 hover:text-white transition-colors 
             data-[state=open]:text-emerald-400">{t('vision.0.title')}</NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-xl bg-black/80 backdrop-blur-md 
                                   border border-white/10 p-4 shadow-xl">
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#vision" className="block px-3 py-2 rounded-lg 
             text-sm text-gray-200 hover:text-emerald-500 
             hover:bg-white/10 transition-colors">
                    <div className="font-medium">{t('vision.0.vision')}</div>
                  </Link>
                </NavigationMenuLink>
                 <NavigationMenuLink asChild>
                  <Link href="#team" className="block px-3 py-2 rounded-lg 
             text-sm text-gray-200 hover:text-emerald-500 
             hover:bg-white/10 transition-colors">
                    <div className="font-medium">{t('vision.0.team')}</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white/80 hover:text-white transition-colors 
             data-[state=open]:text-emerald-400">{t('languages.0.lng')}</NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-xl bg-black/80 backdrop-blur-md 
                                   border border-white/10 p-4 shadow-xl">
            <ul className="grid w-[100px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/en"  className="block px-3 py-2 rounded-lg 
             text-sm text-gray-200 hover:text-emerald-500 
             hover:bg-white/10 transition-colors">                   
                    {t('languages.0.en')}
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/de"  className="block px-3 py-2 rounded-lg 
             text-sm text-gray-200 hover:text-emerald-500 
             hover:bg-white/10 transition-colors">
                    {t('languages.0.de')}
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/ar" className="block px-3 py-2 rounded-lg 
             text-sm text-gray-200 hover:text-emerald-500 
             hover:bg-white/10 transition-colors">
                    {t('languages.0.ar')}
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> 
      </NavigationMenuList>
    </NavigationMenu>
  )
}