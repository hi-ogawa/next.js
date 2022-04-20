import React from 'react'
import NextLink from 'next/link'
import { useLocale } from '../lib/custom-app-context'

export default function Page(): JSX.Element {
  const locale = useLocale()
  console.log('(y) locale', locale)

  return (
    <div>
      <p>locale = {locale}</p>
      <NextLink href="/x">To X</NextLink>
    </div>
  )
}
