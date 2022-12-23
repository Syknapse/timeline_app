import { useState } from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { getTimestamp } from '../../utils/dates'
import React from 'react'
import { IEntry } from '@models/entryModel'
import { Button } from '../../components'
import { Modal } from '../../components'
import styles from './addEntry.module.css'

interface IAddEntryProps {
  isOpen: boolean
  close: () => void
  save: (entry: IEntry) => void
}

interface IValidations {
  year: boolean
  title: boolean
  month: boolean
}

const AddEntry: React.FC<IAddEntryProps> = ({ isOpen, close, save }) => {
  const defaultEntry: IEntry = { timestamp: 0, year: '0', title: '' }
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
    save({
      ...entry,
      timestamp: getTimestamp(entry.year, entry.month, entry.day),
    })
    resetAndClose()
  }

  return (
    <Modal isOpen={isOpen} close={() => resetAndClose()}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.wrapLabel}>
          Title*:
          <input
            type="text"
            name="title"
            placeholder="Enter title"
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
            onChange={e => setEntry({ ...entry, year: e.currentTarget.value })}
          />
        </label>
        <div>
          <select
            className={styles.month}
            name="month"
            disabled={!isValid.year}
            onChange={e => setEntry({ ...entry, month: e.currentTarget.value })}
          >
            <option value="">--Select a month--</option>
            {dayjs.months().map((month, i) => (
              <option key={`month-${i + 1}`} value={i + 1}>
                {month}
              </option>
            ))}
          </select>
          <select
            name="day"
            disabled={!isValid.month}
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
