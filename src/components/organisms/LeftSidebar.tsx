"use client";

import { useState } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { ProfileHeader } from "@/components/molecules/ProfileHeader";
import { ContactsList } from "@/components/organisms/ContactsList";
import { SkillsSection } from "@/components/organisms/SkillsSection";
import { ExtraSkillsList } from "@/components/organisms/ExtraSkillsList";
import { Divider } from "@/components/atoms/Divider";

export const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-3 rounded shadow-md text-gray-800 outline-none hover:bg-gray-50 focus:ring-2 focus:ring-yellow-400"
      >
        {isOpen ? <HiX size={24} /> : <HiMenuAlt2 size={24} />}
      </button>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="md:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-[300px] bg-white border-r border-gray-200 py-6 overflow-y-auto z-40 flex flex-col items-center transition-transform duration-300 ease-in-out shadow-[4px_0_24px_rgba(0,0,0,0.02)]
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        <ProfileHeader />
        <Divider />
        <ContactsList />
        <Divider />
        <SkillsSection />
        <Divider />
        <ExtraSkillsList />
        <div className="h-10 shrink-0 w-full" />
      </aside>
    </>
  );
};
