import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="bg-black text-gray-300 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:text-emerald-400 transition-colors">
                {t("productInformation.0.title")}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-sm leading-relaxed">
                <p>{t("productInformation.0.description")}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:text-emerald-400 transition-colors">
                {t("returnPolicy.0.title")}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-sm leading-relaxed">
                <p>{t("returnPolicy.0.description")}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:text-emerald-400 transition-colors">
                {t("dataprotection.0.title")}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-sm leading-relaxed">
                <p>{t("dataprotection.0.description")}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:text-emerald-400 transition-colors">
                {t("credits.0.title")}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-sm leading-relaxed">
                <p>{t("credits.0.description")}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
      <div className="border-t border-white/10 mt-8 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MedTechTrust. All rights reserved.
      </div>
    </footer>
  )
}
