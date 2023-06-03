import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About page',
  description: 'Information about project',
}

export default function Page() {
  return <h1>Hello, About page!</h1>
}
