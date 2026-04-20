import React from 'react';
import { HeroSection } from '../organisms/HeroSection';
import { KnowledgeSection } from '../organisms/KnowledgeSection';
import { EducationSection } from '../organisms/EducationSection';
import { PortfolioSection } from '../organisms/PortfolioSection';

export const HomeTemplate = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-10">
      <HeroSection />
      <KnowledgeSection />
      <EducationSection />
      <PortfolioSection />
    </div>
  );
};
