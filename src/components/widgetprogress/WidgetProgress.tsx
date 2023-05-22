import { useAppSelector } from '../../store/hooks';
import { todoProcessPercent } from '../../store/todoProcessPercent/todoProcessPercent';
import './WidgetProgress.css';

function WidgetProgress() {
  const progresspercent = useAppSelector(todoProcessPercent);

  return (
    <div className='widgetProgress-root'>
      <div
        className='widgetProgress-mainline'
        style={{
          width: `${progresspercent}%`,
          opacity: progresspercent === 0 ? 0 : 1,
        }}
      >
        {Math.floor(progresspercent)}%
      </div>
    </div>
  );
}

export default WidgetProgress;
