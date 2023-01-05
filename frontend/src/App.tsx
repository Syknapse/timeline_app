import { useReducer, createContext, Dispatch } from 'react'
import { Views } from './models/views'
import { UIAction } from './models/action'
import { UIState } from './models/state'
import { reducer, initialState } from './store/reducer'
import * as actions from './store/actions'
import dayjs from 'dayjs'
import { Button } from './components'
import { TimeLapse } from './components'
import { Timeline } from './components'
import { AddEntry } from './components'
import { EntryDetails } from './components'
import { Sort } from './icons'
import { Cross } from './icons'
import { Add } from './icons'
import { Hourglass } from './icons'
import styles from './App.module.css'

interface UIContextProps {
  state: UIState
  dispatch: Dispatch<UIAction>
}
export const UIContext = createContext<UIContextProps>({ state: initialState.ui, dispatch: actions.changeViewTimeline })

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
              [Views.TIMELINE]: <Timeline entries={state.data.entries} />,
              [Views.TIME_LAPSE]: <TimeLapse />,
            }[state.ui.view]
          }
          {state.ui.addEntryIsOpen && (
            <AddEntry
              entry={state.data.selectedEntry}
              isOpen={state.ui.addEntryIsOpen}
              close={() => dispatch(actions.visibilityToggleAddEntry())}
              save={entry => dispatch(actions.addEntry(entry))}
              edit={entry => dispatch(actions.editEntry(entry))}
            />
          )}
          {state.data.selectedEntry && (
            <EntryDetails
              isOpen={state.ui.entryDetailsIsOpen}
              entry={state.data.selectedEntry}
              close={() => dispatch(actions.hideEntryDetails())}
              onEdit={() => dispatch(actions.visibilityToggleAddEntry())}
              onDelete={id => {
                dispatch(actions.deleteEntry(id))
                dispatch(actions.hideEntryDetails())
              }}
            />
          )}
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
              state.ui.view === Views.TIMELINE
                ? dispatch(actions.changeViewTimeLapse())
                : dispatch(actions.changeViewTimeline())
            }
          >
            <Hourglass />
          </Button>
        </div>
        <Button className={styles.addButton} isRound onClick={() => dispatch(actions.visibilityToggleAddEntry())}>
          {state.ui.addEntryIsOpen ? <Cross /> : <Add />}
        </Button>
      </div>
    </UIContext.Provider>
  )
}

export default App
