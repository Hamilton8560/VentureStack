import { Shield, GraduationCap, Briefcase, Video, Target, MapPin } from 'lucide-react';

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
  return (
    <section id="team" className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-ember font-mono text-sm tracking-wider uppercase mb-4">Leadership</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Built in the field,<br />
            <span className="text-silver">not in a classroom.</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Our team combines US Marine discipline with proven entrepreneurial success.
            We run on our own systems. Skin in the game.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-charcoal border border-titanium/30 rounded-2xl overflow-hidden group hover:border-ember/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
              </div>
              <div className="p-8 -mt-16 relative">
                <div className="flex items-center gap-2 text-silver text-sm mb-3">
                  <MapPin className="w-4 h-4 text-ember" />
                  {member.location}
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-ember font-medium mb-4">{member.role}</p>
                <p className="text-silver mb-6">{member.bio}</p>
                <div className="space-y-3">
                  {member.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <cred.icon className="w-4 h-4 text-ember flex-shrink-0" />
                      <span className="text-silver">{cred.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
