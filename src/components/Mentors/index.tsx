"use client";

const Mentors = () => {
  const categories = [
    {
      title: "Technical",
      description: "AI, ASR, NLP, app development",
      mentors: [
        {
          name: "Dr. Katrin Tomanek",
          role: "AI Research Engineer",
          bio: "Specializing in Natural Language Processing, Machine Translation, and Speech Recognition. PhD in Computer Science from TU Dortmund, Germany. Former Google Research lead for ASR in Project Euphonia, now AI Tech Lead at GDIHub's Centre for Digital Language Inclusion, working to ensure digital language technology serves everyone, regardless of speech patterns.",
          image: "/images/mentor/katrin.jpg" // Add this image to your public folder
        },
        {
          name: "Dr. Emmanuel Ahene",
          role: "AI and Cybersecurity researcher, and technology consultant.",
          bio: "Dr. Emmanuel Ahene is a Computer Science lecturer and Co-Founder of Cyberpass Consult, with expertise in cybersecurity and machine learning. He leads research in Secure AI, focusing on healthcare, education, and cyber-attack detection. He has published over 20 articles, supervised numerous students, and received the 2023 KNUST Vice Chancellor’s Award for Innovation. As PI of the SignTalk project, he is developing a secure AI model to support doctor-patient communication for the hearing-impaired. He also trains IT professionals nationwide and serves as editor and reviewer for top journals.",
          image: "/images/mentor/emmanuel.jpeg" // Add this image to your public folder
        },
        {
          name: "Mark Atta Mensah",
          role: "AI Researcher",
          bio: "Mark Atta Mensah is a Lecturer and AI researcher at the University of Ghana, specializing in ASR, NLP, and Generative AI for low-resource languages. An experienced hackathon coach (Hack4Dev 2025) and EU consultant (STATS4AFRICA Residency, 2024), he mentors teams on developing inclusive, innovative, and scalable AI solutions for real-world social impact.",
          image: "/images/mentor/mark.jpg" // Add this image to your public folder
        },
      ]
    },
    {
      title: "Accessibility",
      description: "UX/UI, inclusive design, user testing",
      mentors: [
        {
          name: "Dr. Tigmanshu Bhatnagar",
          role: "UX/UI, Inclusive Designer",
          bio: "Dr. Tigmanshu Bhatnagar is a lecturer in Computer Science at UCL and a research fellow at the Global Disability Innovation Hub. With over a decade of experience, he designs assistive technologies to improve the lives of people with disabilities. He co-led India’s Attvaran Start-up accelerator, supporting 20 assistive tech ventures, and co-invented a patented soft pneumatic exoskeleton. His PhD project Tacilia won the Innovation of the Year 2023 award. A former guest faculty at IIT Delhi’s Department of Design, he was honoured with the Universal Design Award in 2018 for his grassroots work in India. Tigmanshu’s work blends innovation and empathy to foster a more inclusive world.",
          image: "/images/mentor/tigmanshu.jpg" // Add this image to your public folder
        },
        {
          name: "Preetham Nagaraj",
          role: "UX/UI Designer",
          bio: "Preetham Nagaraj is currently pursuing a PhD at UCL under the supervision of Prof. Catherine Holloway. He holds a double master’s degree—an MSc in Computer Science from the University of Illinois at Chicago and an MSc in Human-Computer Interaction from UCL. Before starting his PhD, Preetham worked as a UX designer for over a decade across the US, the UK, and India. He has worked with multiple organisations, designing user experiences in fields such as robotics, biotechnology, and advertising",
          image: "/images/mentor/preetham.jpeg" // Add this image to your public folder
        }, 
      ]
    },
    {
      title: "User/Speech and Language Therapist",
      description: "Expertise in speech therapy and user needs",
      mentors: [
        {
          name: "Gifty Ayoka",
          role: "Speech and Language Therapist",
          bio: "Gifty Ayoka is a Speech and Language Therapist and Assistant Lecturer at the University of Health and Allied Sciences (UHAS). She is dedicated to improving communication for children and adults, with a focus on inclusion, disability rights, and accessibility. Gifty co-authored a study on automated speech recognition in Ghana and is currently part of a research team collecting voice data from individuals with speech impairments to support the development of inclusive AI technologies in local languages.",
          image: "/images/mentor/gifty.jpg" // Add this image to your public folder
        },
        {
          name: "Dr. Richard Cave",
          role: "Speech and Language Therapist",
          bio: "Dr. Richard Cave is co-Director of the Centre for Digital Language Inclusion at UCL’s Global Disability Innovation Hub. He specializes in speech recognition for 'non-standard' speech and has clinical experience with individuals affected by speech changes. He also advised the Royal College of Speech and Language Therapists and consulted for Google Research on related technologies from 2019 to 2024.",
          image: "/images/mentor/richard.jpg" // Add this image to your public folder
        },  
      ]
    },
    {
      title: "Cultural",
      description: "Ghanaian linguistic and contextual adaptation",
      mentors: [
        {
          name: "Dr. George Akanlig-Pare",
          role: "Professor of Linguistics",
          bio: "Dr. George Akanlig-Pare is an Associate Professor of Linguistics at the University of Ghana, where he teaches Phonetics, Phonology, Morpho-syntax, Sign Language Linguistics, Sociophonetics, and Forensic Linguistics. A recipient of the 2011 Best Teacher Award (Humanities), he chairs the department’s Graduate Studies. His research spans tonology, tone-morpho-syntax, Sign Language, Forensic Linguistics, and Adult Literacy. He has supervised 11 PhD, 40 Master’s theses, and 11 undergraduate long essays, and has published extensively in peer-reviewed journals.",
          image: "/images/mentor/george.jpg" // Add this image to your public folder
        },  
      ]
    },
    {
      title: "Business",
      description: "Scaling solution, impact assessment, and market viability",
      mentors: [
        {
          name: "Dr Nana Assyne",
          role: "Software Engineer and Software Startup Engineer",
          bio: "Nana Assyne is a passionate and driven technology enthusiast with a background in Software Engineering and Software Startup Engineering. He is deeply interested in innovative problem-solving, collaborative development, and building scalable tech solutions. Nana focuses on scaling solutions, impact assessment, and market viability, ensuring that every project he contributes to is both sustainable and user-centered. With a strategic mindset and hands-on experience in fast-paced environments, he is excited to bring his skills and energy to this hackathon.",
          image: "/images/mentor/Nana.png" // Add this image to your public folder
        },
      ]
    },
  ];

  return (
    <section className="py-8 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 dark:text-black">Mentors</h1>
        <p className="text-center mb-6 text-gray-700">
          Meet our mentors across various categories. Each category will have at least 3 mentors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl text-black font-bold mb-2">{category.title}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="space-y-8">
                {category.mentors.map((mentor, mIndex) => (
                  <div key={mIndex} className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-lg overflow-hidden mb-4 border-2 border-gray-200">
                      <img 
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 text-lg">{mentor.name}</h3>
                      <p className="text-sm text-blue-600 mb-2">{mentor.role}</p>
                      <p className="text-sm text-gray-600 text-justify">{mentor.bio}</p>
                    </div>
                  </div>
                ))}
                {category.mentors.length === 0 && (
                  <div className="text-gray-400 italic text-center py-4">
                    Mentors to be announced soon
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;