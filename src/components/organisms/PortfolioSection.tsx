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
    title: 'My Wallet App',
    description: 'Desarrollo de una aplicación móvil de gestión financiera personal, permitiendo a los usuarios registrar gastos, ingresos y visualizar estadísticas financieras.',
    imageUrl: '/my-wallet-app.jpeg',
    stack: 'Next.js - Node.js - PostgreSQL',
    fullDescription: 'De manera utonóma y personal desarrollé una aplicación móvil de gestión financiera personal utilizando Next.js para el frontend y Node.js con PostgreSQL para el backend. La aplicación permite a los usuarios registrar gastos e ingresos, categorizar transacciones y visualizar estadísticas financieras a través de gráficos interactivos. Implementé autenticación segura y optimicé la experiencia del usuario con una interfaz intuitiva y responsiva.',
    githubUrl: 'https://github.com/julian-guerra92/my-wallet-app'
  },
  {
    id: '2',
    title: 'ComiNow',
    description: 'Sistema multitenant de gestión de pedidos para restaurantes, con integración de pagos y panel administrativo para seguimiento de ventas.',
    imageUrl: '/cominow.png',
    stack: 'Node.js - NestJS - Angular -  MongoDB - PostgreSQL - Docker - AWS',
    fullDescription: 'Construcción de un sistema multitenant de gestión de pedidos para restaurantes, utilizando Node.js con NestJS para el backend y Angular para el frontend. El sistema incluye integración de pagos, panel administrativo para seguimiento de ventas y gestión de menús. Implementación de una arquitectura escalable de microservicios basada en eventos, apoyado con Docker y despliegue de la aplicación en AWS, asegurando alta disponibilidad y rendimiento.',
    githubUrl: 'https://github.com/orgs/ComiNow/repositories'
  },
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
    <section className="pt-8">
      <SectionTitle 
        title="Portafolio de Proyectos" 
        subtitle="Una selección de mis trabajos más destacados en desarrollo de software y soluciones tecnológicas"
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
