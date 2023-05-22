import { useOutsideClick } from '../../hook/DetectOutsideClick';
import './ModalLayout.css';

interface ModalLayoutProps {
  show: boolean;
  className: string;
  onClose: () => void;
  children: React.ReactNode;
}

function ModalLayout({ className, show, onClose, children }: ModalLayoutProps) {
  const modalRef = useOutsideClick(onClose);
  return (
    <>
      {show ? (
        <div className='modalLayoutRootWrapper'>
          <div className={`modalLayoutRoot ${className}`} ref={modalRef}>
            {children}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ModalLayout;
