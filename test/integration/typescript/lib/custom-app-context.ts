import React from 'react'

export interface CustomAppContext {
  host?: string
}

export const DefaultCustomAppContext = React.createContext<
  CustomAppContext | undefined
>(undefined)

export function useLocale(): 'en' | 'jp' {
  const value = React.useContext(DefaultCustomAppContext)
  const host = value?.host
  if (host) {
    const [subdomain] = host.split('.')
    if (subdomain === 'en') return 'en'
    if (subdomain === 'jp') return 'jp'
  }
  return 'en'
}
