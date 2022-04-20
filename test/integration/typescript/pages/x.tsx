import React from 'react'
import NextLink from 'next/link'
import { useLocale } from '../lib/custom-app-context'

export default function Page(): JSX.Element {
  const locale = useLocale()
  console.log('(x) locale', locale)

  return (
    <div>
      <p>locale = {locale}</p>
      <NextLink href="/y">To Y</NextLink>
    </div>
  )
}
