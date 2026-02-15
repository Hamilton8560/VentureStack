import { Shield, GraduationCap, Briefcase, Video, Target, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';

const team = [
  {
    name: 'David Hamilton',
    role: 'Founder & CEO',
    location: 'United States',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'US Marine. Built and exited companies in oil & gas, logistics, and fitness. Marine discipline meets entrepreneur results.',
    credentials: [
      { icon: Shield, text: 'US Marine Veteran' },
      { icon: GraduationCap, text: 'CS Degree, University of Maryland' },
      { icon: GraduationCap, text: 'IT Management, Georgetown University' },
      { icon: Briefcase, text: '8 Years Software Development' },
      { icon: Briefcase, text: '13 Years Entrepreneurship' },
    ],
  },
  {
    name: 'Lenin',
    role: 'Head of Video & Marketing',
    location: 'El Salvador',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Leads our creative team in El Salvador. Expert in video production and marketing strategy that drives real engagement.',
    credentials: [
      { icon: Video, text: 'Videography Expert' },
      { icon: Target, text: 'Marketing Strategy Lead' },
      { icon: Briefcase, text: 'Team Leadership' },
    ],
  },
];

export default function Team() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="team" className="py-24 bg-obsidian relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ember/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={sectionRef}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="ember" className="mb-4">Leadership</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Built in the field,<br />
            <span className="text-gradient">not in a classroom.</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Our team combines US Marine discipline with proven entrepreneurial success.
            We run on our own systems. Skin in the game.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-charcoal border border-titanium/20 rounded-2xl overflow-hidden group hover:border-ember/30 transition-all duration-500 hover:shadow-2xl hover:shadow-ember/5"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
              </div>
              <div className="p-8 -mt-16 relative">
                <div className="flex items-center gap-2 text-silver text-sm mb-3">
                  <MapPin className="w-4 h-4 text-ember" />
                  {member.location}
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-ember font-medium mb-4">{member.role}</p>
                <p className="text-silver mb-6 leading-relaxed">{member.bio}</p>
                <div className="space-y-3">
                  {member.credentials.map((cred, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.15 + idx * 0.05, duration: 0.3 }}
                    >
                      <div className="w-7 h-7 rounded-md bg-ember/10 flex items-center justify-center flex-shrink-0">
                        <cred.icon className="w-3.5 h-3.5 text-ember" />
                      </div>
                      <span className="text-silver">{cred.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
