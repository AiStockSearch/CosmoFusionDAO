import React, { createContext, useRef, useCallback, useContext, useEffect } from 'react';

// Тип контекста
interface SectionAnchorContextType {
  registerSection: (id: string, ref: React.RefObject<HTMLElement | null>) => void;
  scrollToSection: (id: string) => void;
}

const SectionAnchorContext = createContext<SectionAnchorContextType | undefined>(undefined);

export const useSectionAnchor = () => {
  const ctx = useContext(SectionAnchorContext);
  if (!ctx) throw new Error('useSectionAnchor must be used within SectionAnchorProvider');
  return ctx;
};

export const SectionAnchorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sectionRefs = useRef<Record<string, React.RefObject<HTMLElement | null>>>({});

  const registerSection = useCallback((id: string, ref: React.RefObject<HTMLElement | null>) => {
    sectionRefs.current[id] = ref;
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const ref = sectionRefs.current[id];
    if (ref?.current) {
      const y = ref.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  // Debug: вычисляем текущую и следующую секцию (но не скроллим автоматически)
  useEffect(() => {
    const handleScroll = () => {
      const entries = Object.entries(sectionRefs.current);
      const scrollY = window.scrollY;
      for (let i = 0; i < entries.length; ++i) {
        const [id, ref] = entries[i];
        if (!ref?.current) continue;
        const top = ref.current.offsetTop;
        const height = ref.current.offsetHeight;
        const bottom = top + height;
        if (scrollY >= top && scrollY < bottom) {
          // currentSection = id; nextSection = entries[i+1]?.[0]
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SectionAnchorContext.Provider value={{ registerSection, scrollToSection }}>
      {children}
    </SectionAnchorContext.Provider>
  );
}; 