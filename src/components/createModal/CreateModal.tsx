import { useEffect, useState } from 'react';
import ModalLayout from '../modalLayout/ModalLayout';
import closeIcon from '../../assets/icons/close_icon.svg';
import './CreateModal.css';

interface CreateModalProps {
  show: boolean;
  onClose: () => void;
  onYes: (title: string, des: string) => void;
  description: string;
}

function CreateModal({ show, onClose, onYes }: CreateModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleEmptyError, setTitleEmptyError] = useState(false);

  const handleCreate = () => {
    if (!title) {
      setTitleEmptyError(true);
      return;
    }
    onYes(title, description);
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    onClose();
  };

  useEffect(() => {
    title && titleEmptyError && setTitleEmptyError(false);
  }, [title]);

  return (
    <ModalLayout show={show} onClose={onClose} className='createModalRoot'>
      <img
        src={closeIcon}
        className='closeIcon'
        alt='closeIcon'
        onClick={onClose}
      />
      <div className='header'>Create Todo</div>
      <div className='title'>
        <div className='titleName'>Title:</div>
        <div className='titleInput'>
          <input
            value={title}
            placeholder='Type your todo list title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      {titleEmptyError ? (
        <div className='titleErrorMsg'>You must input title to create todo</div>
      ) : (
        <></>
      )}
      <div className='description'>
        <div className='descriptionName'>Description:</div>
        <div className='descriptionTextarea'>
          <textarea
            value={description}
            placeholder='Type your todo list description'
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className='btnRoot'>
        <div className='modalBtn' onClick={handleCreate}>
          Create
        </div>
        <div className='modalBtn' onClick={handleClose}>
          Cancel
        </div>
      </div>
    </ModalLayout>
  );
}

export default CreateModal;
