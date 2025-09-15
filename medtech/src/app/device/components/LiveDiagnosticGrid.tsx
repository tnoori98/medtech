'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {TooltipProvider} from '@/components/ui/tooltip';
import {Package, ShieldCheck, Truck, Activity, HeartPulse, Thermometer, Gauge, Syringe, Stethoscope} from 'lucide-react';
import {useMessages, useTranslations} from 'next-intl';

type I18nDevice = {
  id: string;
  name: string;
  category: string;
  compliance: string;
  instock: string; 
  certs: string;
  stock: string;
  delivery: string;
};

export default function LiveProductDiagnosticGrid() {
  const t = useTranslations('parallax');
  const messages = useMessages() as any;

  const pg = messages?.parallax?.productGrid?.[0];
  const devices: I18nDevice[] = (pg?.devices ?? []) as I18nDevice[];

  return (
    <TooltipProvider>
      <div className="w-full space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-emerald-500">
              {t('productGrid.0.title')}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t('productGrid.0.subtitle')}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-muted-foreground">Live-ready</span>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {devices.map((d, idx) => (
            <DeviceCard key={`${d.name}-${idx}`} device={d} />
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}

const deviceIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "ECG Monitor": Activity,
  "Blood Pressure Monitor": HeartPulse,
  "Pulse Oximeter": Gauge,
  "Digital Thermometer": Thermometer,
  "Infusion Pump": Syringe,
  "Stethoscope": Stethoscope,
};

function DeviceCard({device}: {device: I18nDevice}) {
  const Icon = deviceIcons[device.id]  || Package;

  return (
    <motion.div whileHover={{y: -3}} transition={{type: 'spring', stiffness: 250, damping: 20}} className="group relative">
      <Card className='bg-white/10 backdrop-blur-xl border border-white/20 
                 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all'>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="shrink-0 rounded-2xl p-3 
                bg-gradient-to-br from-sky-400/30 via-green-600/30 to-emerald-400/30 
                border border-white/20 text-white">
            <Icon className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <CardTitle className="text-base leading-tight truncate">{device.name}</CardTitle>
            <CardDescription className="truncate">{device.category}</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
            </span>
            Live
          </div>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
           <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              {device.compliance}
            </span>
            <span className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              {device.instock}
            </span>
          </div>
          <motion.div initial={{opacity: 0, y: 12}} whileHover={{opacity: 1, y: 0}} transition={{duration: 0.2}} className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm border-t border-muted/50 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200" />
          </motion.div>
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 p-5 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {/* Example placeholder badges; you can localize or derive */}
              {/* <Badge variant="secondary" className="text-xs">FDA</Badge>
              <Badge variant="secondary" className="text-xs">ISO 13485</Badge> */}
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className='rounded-xl bg-black/70 backdrop-blur-md 
                border border-white/10 p-3 flex items-center gap-2'>
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <div className="leading-tight">
                  <div className="font-medium text-white">{device.certs}</div>
                </div>
              </div>
              <div className="rounded-xl bg-black/70 backdrop-blur-md 
                border border-white/10 p-3 flex items-center gap-2">
                <Package className="h-4 w-4 text-emerald-400" />
                <div className="leading-tight">
                  <div className="text-[11px] text-muted-foreground text-gray-300"></div>
                  <div className="font-medium tabular-nums text-white">{device.stock}</div>
                </div>
              </div>
              <div className="rounded-xl bg-black/70 backdrop-blur-md 
                border border-white/10 p-3 flex items-center gap-2">
                <Truck className="h-4 w-4 text-emerald-400" />
                <div className="leading-tight">
                  <div className="text-[11px] text-muted-foreground text-gray-300"></div>
                  <div className="font-medium text-white">{device.delivery}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
     </motion.div>
  );
}
