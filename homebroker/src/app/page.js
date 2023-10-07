'use client'
import Link from 'next/link'
import styles from './page.module.css'
//import Todo from './Todo/Todo'

export default function Home() {
  
  return (
    <main className={styles.main}>
    <h1>Home Page</h1>
    <Link href={'/login'}> Go Login Page </Link>
    <Link href={'/about'}> Go About Page </Link>
    </main>
  )
}
