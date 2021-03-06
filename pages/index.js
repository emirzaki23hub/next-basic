import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Layout.module.css'

export default function Home({articles}) {
  return (
    <div className={styles.container}>
     <Head>
      <title> WebDev News </title>
      <meta name='keywords' content='web development, programming' />
     </Head>
     <h1>Welcome to WebDev</h1>
     <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
    articles      
    }
  }
}
