import { useState, useContext } from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import React from 'react'
import styles from './addEntry.module.css'
import { IEntry } from '@models/entryModel'
import { Button } from '../../components'

// import { UIContext } from '../../App'

interface IAddEntryProps {
  isOpen: boolean
  close: () => void
  save: (entry: IEntry) => void
}

// const year2 = new Date(Date.UTC(1996)) // year to unix datestamp
// const year4 = new Date(820454400000) // unix datestamp to date
dayjs.extend(localeData)

const AddEntry: React.FC<IAddEntryProps> = ({ isOpen, close, save }) => {
  const [entry, setEntry] = useState<IEntry>({ year: 0, title: '' })
  const [isYearValid, setIsYearValid] = useState(false)
  const daysInMonth = dayjs(`${entry.year}-${entry.month}-1`).daysInMonth()

  // const { state, dispatch } = useContext(UIContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    close()
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntry({ ...entry, year: Number(e.currentTarget.value) })
    setIsYearValid(e.currentTarget.value.length === 4)
  }

  return (
    <div className={clsx(styles.root, isOpen && styles.open)}>
      <div className={styles.backdrop} onClick={close}></div>
      <div className={styles.modal}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.wrapLabel}>
            Title*:
            <input
              type="text"
              name="title"
              placeholder="Entre title"
              onChange={e => setEntry({ ...entry, title: e.currentTarget.value })}
            />
          </label>
          <label>
            Year*:
            <input
              className={clsx(styles.year, styles.mediumField)}
              type="number"
              name="year"
              placeholder="enter a year"
              min="1000"
              max="9999"
              onChange={handleYearChange}
            />
          </label>
          <div>
            <select
              className={styles.month}
              name="month"
              disabled={!entry.year || !isYearValid}
              onChange={e => setEntry({ ...entry, month: e.currentTarget.value })}
            >
              <option value="">--Select a month--</option>
              {dayjs.months().map((month, i) => (
                <option value={i + 1}>{month}</option>
              ))}
            </select>
            <select
              name="day"
              disabled={!entry.month}
              onChange={e => setEntry({ ...entry, day: e.currentTarget.value })}
            >
              <option value="">--Select a day--</option>
              {entry.month &&
                daysInMonth &&
                Array.from(Array(daysInMonth).keys()).map(day => <option value={day + 1}>{day + 1}</option>)}
            </select>
          </div>
          <label className={styles.wrapLabel}>
            Subtitle:
            <input
              type="text"
              name="subtitle"
              placeholder="Enter subtitle"
              onChange={e => setEntry({ ...entry, subtitle: e.currentTarget.value })}
            />
          </label>
          <textarea
            name="description"
            placeholder="Description..."
            cols={30}
            rows={10}
            onChange={e => setEntry({ ...entry, description: e.currentTarget.value })}
          />
          <label>
            Type:
            <select
              className={clsx(styles.mediumField, styles.rightAligned)}
              name="type"
              onChange={e => setEntry({ ...entry, type: e.currentTarget.value })}
            >
              <option value="">--Select a type--</option>
              <option value="home">home</option>
              <option value="life event">life event</option>
              <option value="job">job</option>
              <option value="family">family</option>
              <option value="general">general</option>
            </select>
          </label>
          <label>
            Color:
            <select
              className={clsx(styles.mediumField, styles.rightAligned)}
              name="color"
              onChange={e => setEntry({ ...entry, color: e.currentTarget.value })}
            >
              <option value="">--Select a color--</option>
              <option value="#ec1414">red</option>
              <option value="#142aec">purple</option>
              <option value="#14ec62">green</option>
              <option value="#ece414">yellow</option>
            </select>
          </label>
          <Button
            className={styles.submit}
            type="submit"
            onClick={() => save(entry)}
            disabled={!(isYearValid && entry.title.length > 0)}
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  )
}

export default AddEntry
