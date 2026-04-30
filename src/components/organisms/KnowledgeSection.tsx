import React from 'react';
import { SectionTitle } from '../atoms/SectionTitle';
import { KnowledgeCard } from '../molecules/KnowledgeCard';
import { 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaCloud, 
  FaProjectDiagram, 
  FaUsers 
} from 'react-icons/fa';

export const KnowledgeSection = () => {
  const knowledges = [
    {
      title: 'Frontend Development',
      description: 'React, Angular, HTML/CSS',
      icon: FaLaptopCode
    },
    {
      title: 'Backend Development',
      description: 'Node.js, Nest, Java, Spring Boot',
      icon: FaServer
    },
    {
      title: 'Database Management',
      description: 'MySQL, PostgreSQL, MongoDB',
      icon: FaDatabase
    },
    {
      title: 'Cloud & DevOps',
      description: 'Integración en la nube, Docker',
      icon: FaCloud
    },
    {
      title: 'Software Architecture',
      description: 'Clean Architecture, Microservicios',
      icon: FaProjectDiagram
    },
    {
      title: 'Project Management',
      description: 'Metodologías ágiles, Scrum',
      icon: FaUsers
    }
  ];

  return (
    <section className="py-8">
      <SectionTitle 
        title="Mis Conocimientos y Habilidades" 
        subtitle="Principales áreas de experiencia y tecnologías que domino, adquiridas a través de mi formación académica y experiencia laboral." 
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {knowledges.map((k, index) => (
          <KnowledgeCard 
            key={index}
            title={k.title}
            description={k.description}
            icon={k.icon}
          />
        ))}
      </div>
    </section>
  );
};
