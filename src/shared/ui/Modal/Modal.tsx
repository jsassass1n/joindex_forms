import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ children }) => {
  return createPortal(<div>{children}</div>, document.getElementById('root-modal')!);
};
