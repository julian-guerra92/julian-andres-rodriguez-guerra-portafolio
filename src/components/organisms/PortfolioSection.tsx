"use client";

import React, { useState } from 'react';
import { SectionTitle } from '../atoms/SectionTitle';
import { ProjectCard } from '../molecules/ProjectCard';
import { Modal } from '../atoms/Modal';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  stack: string;
  fullDescription: string;
  githubUrl: string;
  demoUrl?: string;
}

const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'App Web y Arquitecturas Limpias (Ceiba Software)',
    description: 'Desarrollo de aplicación web backend y frontend implementando principios de arquitectura limpia para mantener alta escalabilidad.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    stack: 'Spring Boot y Angular',
    fullDescription: 'Participación activa en el diseño, desarrollo y reestructuración de core transaccional para Ceiba Software. Se enfocó el desarrollo en metodologías de Clean Architecture para asegurar entregas robustas, de fácil testing y acoplamiento flexible. Implementé APIs potentes de extremo a extremo.',
    githubUrl: 'https://github.com'
  },
  {
    id: '2',
    title: 'Integración de Servicios Cloud (Innovati)',
    description: 'Sistema integral distribuido para la orquestación y administración unificada de diversos servicios en la nube.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    stack: 'Node.js, React, Nest y Angular',
    fullDescription: 'Construcción desde los cimientos de la arquitectura backend con NestJS y microservicios robustos a través de integraciones asíncronas con flujos nativos de Cloud, presentados elegantemente en un frontend altamente eficiente bajo la sombrilla de Next.js y React. Se empleó un stack unificado Node para mejorar tiempos de despliegue.',
    githubUrl: 'https://github.com'
  },
  {
    id: '3',
    title: 'Plataforma de Analítica de Datos (Colanta)',
    description: 'Desarrollo modular de una herramienta directiva de business intelligence, permitiendo visualizaciones complejas de datos transaccionales.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    stack: 'Qlik Sense y BD Relacionales',
    fullDescription: 'Lideré el diseño e implementación de un hub de extracción y cruce de datos empresariales extraídos de múltiples sistemas legados. Aprovechamos la potencia de Qlik Sense incrustado y rutinas automatizadas de bases de datos para entregar dashboards directivos con analítica de consumo rápido.',
    githubUrl: 'https://github.com'
  }
];

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-8">
      <SectionTitle 
        title="Portfolio" 
        subtitle="Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum"
      />
      
      <div 
        className="portfolio-scroll flex w-full overflow-x-auto overflow-y-hidden gap-6 pb-8 pt-2 px-2 snap-x snap-mandatory scroll-smooth"
      >
        {PORTFOLIO_PROJECTS.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            onLearnMore={() => openModal(project)}
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Detalles del Proyecto">
        {selectedProject && (
          <div className="space-y-4">
            <h3 className="font-bold text-2xl text-gray-800 border-b pb-2">{selectedProject.title}</h3>
            
            <div className="pt-2">
              <h4 className="font-semibold text-gray-800 mb-2">Stack Tecnológico:</h4>
              <span className="inline-block border border-[#FFB400] text-[#cf9200] font-semibold px-4 py-1 rounded-full text-sm bg-[#FFF9E6]">
                {selectedProject.stack}
              </span>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-gray-800 mb-2 tracking-wide">Descripción Completa:</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {selectedProject.fullDescription}
              </p>
            </div>
            
            <div className="flex gap-4 pt-6 mt-4 border-t border-gray-100 flex-wrap">
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-700 hover:text-black hover:bg-gray-100 px-4 py-2 rounded-md transition-colors font-medium text-sm border"
              >
                <FaGithub className="text-xl" /> Ver Repositorio
              </a>
              <a 
                href={selectedProject.demoUrl || "#"} 
                className="flex items-center gap-2 bg-[#FFB400] text-black hover:bg-[#e6a200] px-4 py-2 rounded-md transition-colors font-semibold text-sm border border-transparent shadow-sm"
              >
                <FaExternalLinkAlt /> Ver Demo
              </a>
            </div>
          </div>
        )}
      </Modal>

      <style dangerouslySetInnerHTML={{__html: `
        .portfolio-scroll {
          scrollbar-color: #d1d5db transparent;
          scrollbar-width: thin;
        }

        .portfolio-scroll::-webkit-scrollbar {
          height: 8px;
        }

        .portfolio-scroll::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }

        .portfolio-scroll::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: content-box;
          transition: background-color 0.3s ease;
        }

        .portfolio-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #9ca3af;
        }

        .portfolio-scroll:not(:hover)::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
        }
      `}} />
    </section>
  );
};
