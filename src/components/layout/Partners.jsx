import { motion } from "framer-motion";
import aaaLogo from "@/assets/partners/aaa.png";
import ifaaLogo from "@/assets/partners/ifaa.png";
import ibroLogo from "@/assets/partners/ibro.png";
import tasLogo from "@/assets/partners/tas.png";
import nuiLogo from "@/assets/partners/nui.png";
import wfnsLogo from "@/assets/partners/wfns.png";

export function Partners() {
  const partners = [
    { name: "Association of Anatomists of Asia and Oceania", logo: aaaLogo },
    {
      name: "International Federation of Associations of Anatomists",
      logo: ifaaLogo,
    },
    { name: "IBRO", logo: ibroLogo },
    { name: "The Anatomical Society", logo: tasLogo },
    { name: "Nigerian Universities and Institutions", logo: nuiLogo },
    { name: "World Federation of Neurological Societies", logo: wfnsLogo },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="pt-2 pb-4 bg-[#D7E7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-1"
        >
          <h2 className="text-lg font-bold text-green-700 text-center mb-4 text-pretty">
            OUR PARTNERS & COLLABORATORS
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center h-20 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer group p-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
