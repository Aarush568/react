import { useCallback, useEffect, useState } from 'react'
import { AppDataContext } from './appDataStore'

const STORAGE_KEY = 'pulsefit.member-data'

function loadInitialState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    // corrupted or blocked storage, fall back to a clean slate
  }
  return { membership: null, bookings: [] }
}

function generateMemberId() {
  return `PF-${Math.floor(100000 + Math.random() * 900000)}`
}

function generateBookingId() {
  return `bk-${Date.now().toString(36)}${Math.floor(Math.random() * 1000)}`
}

export function AppDataProvider({ children }) {
  const [data, setData] = useState(loadInitialState)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const submitMembership = useCallback((details) => {
    const memberId = generateMemberId()
    setData((prev) => ({
      ...prev,
      membership: {
        ...details,
        memberId,
        appliedAt: new Date().toISOString(),
      },
    }))
    return memberId
  }, [])

  const cancelMembership = useCallback(() => {
    setData((prev) => ({ ...prev, membership: null }))
  }, [])

  const bookClass = useCallback((booking) => {
    const id = generateBookingId()
    setData((prev) => ({
      ...prev,
      bookings: [...prev.bookings, { ...booking, id, bookedAt: new Date().toISOString() }],
    }))
    return id
  }, [])

  const cancelBooking = useCallback((id) => {
    setData((prev) => ({
      ...prev,
      bookings: prev.bookings.filter((b) => b.id !== id),
    }))
  }, [])

  return (
    <AppDataContext.Provider
      value={{
        membership: data.membership,
        bookings: data.bookings,
        submitMembership,
        cancelMembership,
        bookClass,
        cancelBooking,
      }}
    >
      {children}
    </AppDataContext.Provider>
  )
}
