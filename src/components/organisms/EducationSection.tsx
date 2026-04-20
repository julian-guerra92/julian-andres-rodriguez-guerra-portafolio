import React from 'react';
import { SectionTitle } from '../atoms/SectionTitle';
import { EducationCard } from '../molecules/EducationCard';

export const EducationSection = () => {
  const educations = [
    {
      institution: 'Universidad de Antioquia',
      role: 'Estudiante',
      dateRange: '2021 - Actualmente',
      title: 'Ingeniería de Sistemas',
      description: 'Formación en ingeniería de software y ciencias de la computación. Octavo Semestre en curso.'
    },
    {
      institution: 'Universidad de Medellín',
      role: 'Estudiante',
      dateRange: '2017 - 2018',
      title: 'Especialización en Formulación, Evaluación y Gestión de Proyectos Públicos y Privados',
      description: 'Gestión estratégica y evaluación de viabilidad de proyectos.'
    },
    {
      institution: 'Universidad La Gran Colombia',
      role: 'Estudiante',
      dateRange: '2008 - 2013',
      title: 'Ingeniería Agroindustrial',
      description: 'Formación integral en procesos agroindustriales y gestión de recursos.'
    }
  ];

  return (
    <section className="">
      <SectionTitle 
        title="Education" 
        subtitle="Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum"
      />
      
      <div className="bg-white rounded-lg overflow-hidden flex flex-col shadow-sm">
        {educations.map((edu, index) => (
          <EducationCard 
            key={index}
            {...edu}
          />
        ))}
      </div>
    </section>
  );
};
