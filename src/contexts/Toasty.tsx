import { createContext, useContext, useState } from 'react';
import Toasty from '../components/Toasty/index';

type ToastyContextType = {
  setToasty: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      text: string;
      severity: 'info' | 'success' | 'warning' | 'error';
    }>
  >;
};

const ToastyContext = createContext<ToastyContextType | undefined>(undefined);

export const ToastyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasty, setToasty] = useState({
    open: false,
    text: '',
    severity: 'info',
  });

  return (
    <ToastyContext.Provider value={{ setToasty }}>
      <Toasty
        open={toasty.open}
        severity={toasty.severity}
        text={toasty.text}
        onClose={() => setToasty({ ...toasty, open: false })}
      />
      {children}
    </ToastyContext.Provider>
  );
};

const useToasty = () => {
  const context = useContext(ToastyContext);
  if (!context) {
    throw new Error('useToasty must be used within a ToastyProvider');
  }
  return context;
};

export default useToasty;
