import React from 'react'
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
          <button>Sort</button>
          <button>View</button>
          <button>Time Since</button>
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
    </div>
  )
}

export default App
