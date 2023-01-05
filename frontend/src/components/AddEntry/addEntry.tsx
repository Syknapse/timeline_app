import { useState } from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { getTimestamp } from '../../utils/dates'
import { generateID } from '../../utils/generateID'
import { IEntry } from '../../models/entryModels'
import { Categories } from '../../models/entryModels'
import { Button } from '../../components'
import { Modal } from '../../components'
import styles from './addEntry.module.css'

interface IAddEntryProps {
  entry?: IEntry | null
  isOpen: boolean
  close: () => void
  save: (entry: IEntry) => void
  edit: (entry: IEntry) => void
}

interface IValidations {
  year: boolean
  title: boolean
  month: boolean
}

type EntryCategory = Required<Pick<IEntry, 'category'>>
type IEntryCategories = {
  [key in Categories]: EntryCategory[keyof EntryCategory]
}

const entryCategories: IEntryCategories = {
  [Categories.HOME]: {
    icon: '🏡',
    description: 'Home',
  },
  [Categories.LIFE_EVENT]: {
    icon: '💥',
    description: 'Life event',
  },
  [Categories.JOB]: {
    icon: '🛠️',
    description: 'Job',
  },
  [Categories.FAMILY]: {
    icon: '👪',
    description: 'Family',
  },
  [Categories.TRAVEL]: {
    icon: '🌍',
    description: 'Travel',
  },
  [Categories.GENERAL]: {
    icon: '⭐️',
    description: 'General',
  },
}

const AddEntry: React.FC<IAddEntryProps> = ({ entry: _entry, isOpen, close, save, edit }) => {
  const defaultEntry: IEntry = _entry || { id: '1', timestamp: 0, year: '0', title: '' }
  const [entry, setEntry] = useState<IEntry>(defaultEntry)
  const daysInMonth: number | null = dayjs(`${entry.year}-${entry.month}-1`).daysInMonth() || null
  const isValid: IValidations = {
    year: typeof entry.year !== 'undefined' && entry.year.length === 4,
    title: entry.title.length > 0,
    month: typeof entry.month !== 'undefined' && entry.month.length > 0,
  }

  const resetAndClose = (): void => {
    setEntry(defaultEntry)
    close()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    entry.id && entry.id !== '1'
      ? edit({
          ...entry,
          timestamp: getTimestamp(entry.year, entry.month, entry.day),
        })
      : save({
          ...entry,
          id: generateID(),
          timestamp: getTimestamp(entry.year, entry.month, entry.day),
        })
    resetAndClose()
  }

  return (
    <Modal className={styles.modal} isOpen={isOpen} close={() => resetAndClose()}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.wrapLabel}>
          Title*:
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={entry.title}
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
            value={entry.year !== '0' ? entry.year : ''}
            onChange={e => setEntry({ ...entry, year: e.currentTarget.value })}
          />
        </label>
        <div>
          <select
            className={styles.month}
            name="month"
            disabled={!isValid.year}
            value={entry.month}
            onChange={e => setEntry({ ...entry, month: e.currentTarget.value })}
          >
            <option value="">--Select a month--</option>
            {dayjs.months().map((month, i) => (
              <option key={`month-${month}`} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            name="day"
            disabled={!isValid.month}
            value={entry.day}
            onChange={e => setEntry({ ...entry, day: e.currentTarget.value })}
          >
            <option value="">--Select a day--</option>
            {entry.month &&
              daysInMonth &&
              Array.from(Array(daysInMonth).keys()).map(day => (
                <option key={`day-${day + 1}`} value={day + 1}>
                  {day + 1}
                </option>
              ))}
          </select>
        </div>
        <label className={styles.wrapLabel}>
          Subtitle:
          <input
            type="text"
            name="subtitle"
            placeholder="Enter subtitle"
            value={entry.subtitle ? entry.subtitle : ''}
            onChange={e => setEntry({ ...entry, subtitle: e.currentTarget.value })}
          />
        </label>
        <textarea
          name="description"
          placeholder="Description..."
          cols={30}
          rows={10}
          value={entry.description}
          onChange={e => setEntry({ ...entry, description: e.currentTarget.value })}
        />
        <label>
          Category:
          <select
            className={clsx(styles.mediumField, styles.rightAligned)}
            name="type"
            onChange={e => setEntry({ ...entry, category: entryCategories[e.currentTarget.value as Categories] })}
          >
            <option value="">--Select a category--</option>
            {Object.entries(entryCategories).map(([name, data]) => (
              <option key={name} value={name}>
                {data.icon} {data.description}
              </option>
            ))}
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
          onClick={() => handleSubmit}
          disabled={!(isValid.year && isValid.title)}
        >
          Save
        </Button>
      </form>
    </Modal>
  )
}

export default AddEntry
