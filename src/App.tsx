import { useEffect, useState } from 'react';
import TodoItem from './components/todoItem/TodoItem';
import { useAppDispatch, useAppSelector } from './store/hooks';
import {
  checkedTodoItem,
  createdTodoItem,
  deletedTodoItem,
  todoData,
} from './store/todo/todo';
import DeleteModal from './components/deleteModal/DeleteModal';
import CreateModal from './components/createModal/CreateModal';
import WidgetProgress from './components/widgetprogress/WidgetProgress';
import './App.css';

function App() {
  const todo = useAppSelector(todoData);
  const dispatch = useAppDispatch();
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [createModalShow, setCreateModalShow] = useState(false);
  const [currentTodoItemIndex, setCurrentTodoItemIndex] = useState(0);
  const [processPercent, setProcessPercent] = useState(0);

  const handleCheck = (currentItemId: number) => {
    dispatch(checkedTodoItem(currentItemId));
  };

  const handleCreateModal = () => {
    setCreateModalShow(true);
  };

  const handleCreate = (title: string, descripiton: string) => {
    setCreateModalShow(false);
    dispatch(
      createdTodoItem({
        process: false,
        title: title,
        description: descripiton,
        create_date: Date.now(),
        update_date: Date.now(),
      })
    );
  };

  const handleDelete = (currentItemId: number) => {
    setDeleteModalShow(true);
    setCurrentTodoItemIndex(currentItemId);
  };

  const handlDeleteNo = () => {
    setDeleteModalShow(false);
  };

  const handlDeleteYes = () => {
    dispatch(deletedTodoItem(currentTodoItemIndex));
    setDeleteModalShow(false);
  };

  useEffect(() => {
    const total = todo?.length;
    const count = todo?.filter((todo: TodoType) => todo.process).length;
    setProcessPercent((count / total) * 100);
  }, [todo]);

  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>Todo List</h1>
          <div className='createItem' onClick={handleCreateModal}>
            + Create
          </div>
        </div>
        <WidgetProgress percent={processPercent} />
        {todo.map((item: TodoType, index: number) => {
          return (
            <TodoItem
              key={`todo_item_${index}`}
              title={item.title}
              description={item.description}
              process={item.process}
              create={item.create_date}
              update={item.update_date}
              id={index}
              onChecked={handleCheck}
              onDelete={handleDelete}
            />
          );
        })}
      </div>

      <DeleteModal
        show={deleteModalShow}
        onClose={() => setDeleteModalShow(false)}
        description='Are you sure you want to delete the item?'
        onYes={handlDeleteYes}
        onNo={handlDeleteNo}
      />

      <CreateModal
        show={createModalShow}
        onClose={() => setCreateModalShow(false)}
        onYes={handleCreate}
      />
    </>
  );
}

export default App;
