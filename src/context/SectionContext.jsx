import { createContext, useContext, useState } from 'react';

const SectionContext = createContext(null);
export const useSection = () => useContext(SectionContext);

export function SectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState('stack');
  return <SectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</SectionContext.Provider>;
}