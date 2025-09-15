import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"

export default function Vision() {
    const t = useTranslations("vision");
  return (
    <div>
    <section className="my-20">
      <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-emerald-500">
        {t("title")}
      </h2>
      <p className="mb-6">
        {t("description")}
      </p>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative w-[370px] max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl"
      >
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src="/images/old-workflow.png" alt="Manual BP" />}
          itemTwo={<ReactCompareSliderImage src="/images/new-workflow.png" alt="Automated BP" />}
        />
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-4 right-4 flex h-3 w-3"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </motion.span>
      </motion.div>
    </section>
    </div>
  )
}
