"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../atoms/Button';
import { Modal } from '../atoms/Modal';
import { FaArrowRight } from 'react-icons/fa';

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white pt-12 pb-16 px-6 md:px-12 rounded-lg flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm relative overflow-hidden">
      {/* Background decoration lines (optional matching figma) */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="50" r="100" stroke="#FFB400" strokeWidth="40" />
        </svg>
      </div>

      <div className="flex-1 space-y-6 max-w-xl z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Soy Julián Andrés,<br />
          <span className="text-[#FFB400]">Full Stack</span> Developer
        </h1>

        <p className="text-gray-500 leading-relaxed text-base md:text-lg">
          Full Stack Developer con 3 años de experiencia en la industria y con un
          sólido dominio en tecnologías de backend y frontend, así como en la integración
          de servicios en la nube. Me apasiona crear soluciones de software escalables,
          eficientes y centradas en el usuario.
        </p>

        <Button onClick={() => setIsModalOpen(true)}>
          Saber Más <FaArrowRight />
        </Button>
      </div>

      <div className="flex-none z-10 relative">
        {/* Placeholder for Profile image matching Figma's white hero */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white shadow-xl bg-gray-100 overflow-hidden shrink-0">
          <Image
            src="/foto-profile-2.png"
            alt="Julián Andrés Rodríguez"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 256px, 320px"
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Perfil Profesional">
        <div className="space-y-4">
          <h4 className="font-semibold text-lg text-gray-800">Acerca de Mí</h4>
          <p>
            Gracias a mi formación académica y experiencia laboral, he
            desarrollado una excelente capacidad de organización, liderazgo,
            análisis y resolución de problemas, además de resiliencia y
            pensamiento orientado hacia el logro de objetivos. Me caracterizo
            por ser una persona creativa, con gran interés en adquirir nuevos
            conocimientos y con destacadas habilidades de comunicación
            oral y escrita, lo que me permite trabajar de manera efectiva en
            equipos multidisciplinarios.
          </p>
          <h4 className="font-semibold text-lg text-gray-800 mt-4">Puntos Fuertes</h4>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Desarrollo integral (Frontend: React, Angular | Backend: Node.js, Nest, Java).</li>
            <li>Experiencia manejando bases de datos SQL y NoSQL (MySQL, PostgreSQL, MongoDB).</li>
            <li>Implementación de integraciones en la nube y contenedores (Docker).</li>
            <li>Trabajo colaborativo mediante metodologías ágiles (Scrum).</li>
          </ul>
        </div>
      </Modal>
    </section>
  );
};
