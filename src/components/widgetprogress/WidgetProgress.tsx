import { useAppSelector } from '../../store/hooks';
import './WidgetProgress.css';

interface WidgetProgressProps {
  percent: number;
}

function WidgetProgress({ percent }: WidgetProgressProps) {
  return (
    <div className='widgetProgress-root'>
      <div
        className='widgetProgress-mainline'
        style={{
          width: `${percent}%`,
          opacity: percent === 0 ? 0 : 1,
        }}
      >
        {Math.floor(percent)}%
      </div>
    </div>
  );
}

export default WidgetProgress;
