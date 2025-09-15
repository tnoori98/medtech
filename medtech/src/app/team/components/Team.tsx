"use client"

import { motion } from "framer-motion"
import { useTranslations, useMessages } from "next-intl"
import Image from "next/image"

export default function Team() {
  const t = useTranslations("team")
  const messages = useMessages() as any
  const members = messages?.team?.members ?? []

  return (
    <section className="py-20 from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-4 text-center text-emerald-500"
        >
          {t("team")}
        </motion.h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          {t("intro")}
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {members.map((member: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group text-emerald-500 relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-emerald-500/20 transition-all"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover [object-position:50%_30%] grayscale group-hover:grayscale-0 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-emerald-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
