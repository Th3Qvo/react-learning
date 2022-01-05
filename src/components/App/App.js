/** w kazdym pliku react trzeba importować bibliotekę react */
import React from 'react';
import List from '../List/List';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}> My first React app </h1>
        <h2 className={styles.subtitle}> A simple to-do app, with lists, columns and cards </h2>
        <List title={['Things to do', <sup key='1'> soon! </sup>]} image='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'></List>
      </main>
    )
  }
}

export default App;
