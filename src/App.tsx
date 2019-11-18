import React from 'react';
import Calendar from './component/Calendar';
import styles from './utils/styles.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.application}>
      <Calendar />
    </div>
  );
}

export default App;
