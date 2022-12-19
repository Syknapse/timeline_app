import { useReducer, createContext, Dispatch } from 'react'
import { Views } from './models/views'
import { UIAction } from './models/action'
import { UIState } from './models/state'
import { reducer, initialState } from './store/reducer'
import { addEntry, changeViewTimeLapse, changeViewTimeline, visibilityToggleAddEntry } from './store/actions'
import dayjs from 'dayjs'
import { Button } from './components'
import { TimeLapse } from './components'
import { Timeline } from './components'
import { AddEntry } from './components'
import { Sort } from './icons'
import { Cross } from './icons'
import { Add } from './icons'
import { Hourglass } from './icons'
import styles from './App.module.css'

const entries = [
  {
    year: 1991,
    day: '13',
    month: 'Feb',
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
    month: 'Feb',
    type: 'life event',
    title: 'scored a goal',
  },
  {
    year: 1991,
    day: '21',
    month: 'Mar',
    type: 'life event',
    title: 'pumpkin revolt',
  },
  {
    year: 2012,
    type: 'life event',
    title: 'end of the world',
  },
  {
    year: 2000,
    day: '17',
    month: 'Nov',
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

interface UIContextProps {
  state: UIState
  dispatch: Dispatch<UIAction>
}
export const UIContext = createContext<UIContextProps>({ state: initialState.ui, dispatch: changeViewTimeline })

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UIContext.Provider value={{ state: state.ui, dispatch }}>
      <div className={styles.App}>
        <header>
          <h1>Timeline</h1>
        </header>
        <main className={styles.main}>
          {
            {
              [Views.TIMELINE]: <Timeline entries={entries} />,
              [Views.TIME_LAPSE]: <TimeLapse />,
            }[state.ui.view]
          }
          <AddEntry
            isOpen={state.ui.addEntryIsOpen}
            close={() => dispatch(visibilityToggleAddEntry())}
            save={entry => dispatch(addEntry(entry))}
          />
        </main>
        <footer>
          <p className={styles.footerText}>Syk Houdeib {dayjs().year()}</p>
        </footer>
        <div className={styles.filters}>
          <Button className={styles.buttons}>
            <Sort />
          </Button>
          <Button
            className={styles.buttons}
            onClick={() =>
              state.ui.view === Views.TIMELINE ? dispatch(changeViewTimeLapse()) : dispatch(changeViewTimeline())
            }
          >
            <Hourglass />
          </Button>
        </div>
        <Button className={styles.addButton} isRound onClick={() => dispatch(visibilityToggleAddEntry())}>
          {state.ui.addEntryIsOpen ? <Cross /> : <Add />}
        </Button>
      </div>
    </UIContext.Provider>
  )
}

export default App
