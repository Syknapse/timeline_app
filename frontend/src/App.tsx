import React from 'react'
import { Button } from './components'
import { Sort } from './icons'
import { List } from './icons'
import { Hourglass } from './icons'
import styles from './App.module.css'

const entries = [
  {
    year: 1991,
    type: 'life event',
    title: 'a chicken was born',
  },
  {
    year: 2000,
    type: 'Home',
    title: 'MOved to Grimsby',
  },
]

function App() {
  return (
    <div className={styles.App}>
      <header>
        <h1>Timeline</h1>
        <div className={styles.filters}>
          <Button className={styles.buttons}>
            <Sort />
          </Button>
          <Button className={styles.buttons}>
            <List />
          </Button>
          <Button className={styles.buttons}>
            <Hourglass />
          </Button>
        </div>
      </header>
      <main>
        {entries.map(entry => (
          <section>
            <div>{entry.year}</div>
            <div>{entry.type}</div>
            <div>{entry.title}</div>
          </section>
        ))}
      </main>
      <footer>
        <p>Syk Houdeib 1998</p>
      </footer>
    </div>
  )
}

export default App
