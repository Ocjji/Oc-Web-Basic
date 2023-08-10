import Image from 'next/image'
import styles from './page.module.css'
import { About, Career, Project, Skills, Visual } from "./sections"

export default function Home() {
  return (
    <main id="container">
      <Visual />
      <About />
      <Skills />
      <Project />
      {/* <Career /> */}
    </main>
  )
}
