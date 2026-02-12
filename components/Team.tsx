'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Magnetic from './Magnetic';

const teamMembers = [
  {
    name: 'Kaleb',
    role: 'Founder, Engineer',
    image: '/images/kaleb.jpg',
    linkedin: 'https://www.linkedin.com/in/kalebsofer/',
    description:
      'Initially trained as an aerospace engineer, Kaleb transitioned to Data in 2018 inspired by AlphaZero and YOLOv3. Since then, he has taken on engineering and consultancy roles with Deliveroo, Santander, and the UK Ministry of Justice.',
  },
  {
    name: 'Margaux',
    role: 'AI',
    image: '/images/margaux.jpg',
    linkedin: 'https://www.linkedin.com/in/margaux-dowland-69962529b/',
    description:
      'After completing her masters from Imperial College London with distinction, Margaux was awarded prize-winner for the best MSc Pure Mathematics Project in 2023. She currently works as an ML engineer for Oak Academy, developing AI applications in Education.',
  },
  {
    name: 'Luka',
    role: 'Product',
    image: '/images/luka.jpg',
    linkedin: 'https://www.linkedin.com/in/luka-vlaskalic-bba5988a/',
    description:
      'Luka holds a Master\u2019s degree with distinction in Physics from The University of Manchester. With over five years of experience managing products and leading technical teams in the renewable energy sector, he is currently working at Amp X, an innovative digital energy platform driving disruption in the industry.',
  },
  {
    name: 'Izaak',
    role: 'Advisor',
    image: '/images/izaak.png',
    linkedin: 'https://www.linkedin.com/in/izaakrogan/',
    description:
      'Founder of the Machine Learning Institute, Izaak is a software engineer with over a decade of experience accumulating job titles like Head of Engineering and CTO.',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-md mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Our team
          </h2>
          <p className="mt-3 text-muted-foreground">
            The people behind Softmax.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <Magnetic key={member.name} strength={0.06}>
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group block p-6 rounded-xl border border-border bg-surface hover:shadow-[var(--shadow-card)] transition-shadow duration-300"
              >
                <div className="w-20 h-20 mb-4 relative overflow-hidden rounded-full mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5 mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed text-left">
                    {member.description}
                  </p>
                </div>
              </motion.a>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}
