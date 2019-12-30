import React from 'react';
import Calendar from './component/Calendar';
import styles from './utils/styles.module.scss';

const App: React.FC = () => {  
  return (
    <div className={styles.application}>
      <Calendar urlParameters={window.location.search.substring(1)}/>
    </div>
  );
}

export default App;
