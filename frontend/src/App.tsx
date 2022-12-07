import React, { useState } from 'react'
import { Button } from './components'
import { TimeLapse } from './components'
import { Timeline } from './components'
import { AddEntry } from './components'
import { Sort } from './icons'
import { List } from './icons'
import { Cross } from './icons'
import { Add } from './icons'
import { Hourglass } from './icons'
import styles from './App.module.css'

const entries = [
  {
    year: 1991,
    type: 'life event',
    title: 'a chicken was born',
  },
  {
    year: 1988,
    type: 'life event',
    title: '80s stuff',
  },
  {
    year: 2000,
    type: 'Home',
    title: 'MOved to Grimsby',
  },
  {
    year: 1991,
    type: 'life event',
    title: 'scored a goal',
  },
  {
    year: 2012,
    type: 'life event',
    title: 'end of the world',
  },
  {
    year: 2000,
    type: 'Home',
    title: 'ate spinach',
  },
  {
    year: 1997,
    type: 'life event',
    title: 'threw a rock',
  },
  {
    year: 2012,
    type: 'life event',
    title: 'forgotten year',
  },
  {
    year: 2001,
    type: 'Home',
    title: 'danced the macarena',
  },
]

enum ViewType {
  Timeline,
  Time_lapse,
}

function App() {
  const [view, setView] = useState<ViewType>(ViewType.Timeline)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

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
          <Button
            className={styles.buttons}
            onClick={() => (view === ViewType.Timeline ? setView(ViewType.Time_lapse) : setView(ViewType.Timeline))}
          >
            <Hourglass />
          </Button>
        </div>
      </header>
      <main className={styles.main}>
        {
          {
            [ViewType.Timeline]: <Timeline entries={entries} />,
            [ViewType.Time_lapse]: <TimeLapse />,
          }[view]
        }
        <AddEntry isOpen={isOpenModal} close={() => setIsOpenModal(false)} />
        <Button className={styles.addButton} isRound onClick={() => setIsOpenModal(!isOpenModal)}>
          {isOpenModal ? <Cross /> : <Add />}
        </Button>
      </main>
      <footer className={styles.footer}>
        <p>Syk Houdeib 1998</p>
      </footer>
    </div>
  )
}

export default App
