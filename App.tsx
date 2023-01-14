import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasalvesb.png',
      name: 'Lucas Alves',
      role: 'Front-End Developer'
    },
    content: [
    {type: 'paragraph', content: 'Hello, guys!' }, 
    {type: 'paragraph', content: 'I have just finished another task!' },
    {type: 'paragraph', content: 'That is cool, right?'}, 
    {type: 'link', content: 'https://github.com/lucasalvesb' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO'
    },
    content: [
    {type: 'paragraph', content: 'This is just a random comment!' }, 
    {type: 'paragraph', content: 'It feels great to just post anything!' },
    {type: 'paragraph', content: 'Woohooo!'} ,
    {type: 'link', content: 'https://github.com/diego3g' }
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
]

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.id}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}
