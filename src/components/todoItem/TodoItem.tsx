import checkIcon from '../../assets/icons/check_icon.svg';
import { getDateByTimeStamp } from '../../utils/utils';
import './TodoItem.css';

interface TodoItemProps {
  title: string;
  description: string;
  create: number;
  update: number;
  process: boolean;
  id: number;
  onChecked: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoItem({
  title,
  description,
  create,
  update,
  process,
  id,
  onChecked,
  onDelete,
}: TodoItemProps) {
  return (
    <>
      <div className={`todoItem ${process && 'checked'}`}>
        <div className='circleIcon' onClick={() => onChecked(id)}>
          {process ? (
            <img src={checkIcon} className='checkIcon' alt='checkIcon' />
          ) : (
            <></>
          )}
        </div>
        <div className='todoItemContent'>
          <div className={`title ${process && 'titleChecked'}`}>{title}</div>
          <div className={`des ${process && 'desChecked'}`}>{description}</div>
          <div className='todoAction'>
            <div className='todoActionItem'>
              <div className='title'>Created :</div>
              <div className={`colorBtn itemBtn`}>
                <span className='btnName'>{getDateByTimeStamp(create)}</span>
              </div>
            </div>
            <div className='todoActionItem'>
              <div className='title'> Updated :</div>
              <div className={`colorBtn itemBtn`}>
                <span className='btnName'>{getDateByTimeStamp(update)}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`deleteIcon ${process && 'checked'}`}
          onClick={() => (process ? {} : onDelete(id))}
        >
          <i className='fas fa-trash-alt'></i>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
