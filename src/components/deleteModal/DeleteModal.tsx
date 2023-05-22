import ModalLayout from '../modalLayout/ModalLayout';
import closeIcon from '../../assets/icons/close_icon.svg';
import './DeleteModal.css';

interface DeleteModalProps {
  show: boolean;
  onClose: () => void;
  onYes: () => void;
  onNo: () => void;
  description: string;
}

function DeleteModal({
  show,
  onClose,
  description,
  onYes,
  onNo,
}: DeleteModalProps) {
  return (
    <ModalLayout show={show} onClose={onClose} className='deleteModalRoot'>
      <img
        src={closeIcon}
        className='closeIcon'
        alt='closeIcon'
        onClick={onClose}
      />
      <div className='des'>{description}</div>
      <div className='btnRoot'>
        <div className='modalBtn' onClick={onYes}>
          Yes
        </div>
        <div className='modalBtn' onClick={onNo}>
          No
        </div>
      </div>
    </ModalLayout>
  );
}

export default DeleteModal;
