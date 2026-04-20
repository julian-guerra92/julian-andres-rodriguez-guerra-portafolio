import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl transform opacity-0 scale-95 animate-[modal-entry_0.3s_ease-out_forwards]"
        style={{ animation: 'modalEntry 0.3s ease-out forwards' }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold text-gray-800">{title || 'Detalles'}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-6 text-gray-600">
          {children}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes modalEntry {
          0% { opacity: 0; transform: scale(0.95) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />
    </div>
  );
};
