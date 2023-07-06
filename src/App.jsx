import './App.css'
import Header from './components/Header'
import RowNew from './container/RowNew'

import useGetArticle from './hooks/useGetArticles'

function App() {
  // custom hook
  const { allArticles, isLoading, error } = useGetArticle()
  
  return (
    <main>
      < Header />
      <section className='container-news'>
        {
          allArticles.map( newSite => {
            const { firstArticles, name, imageSite } = newSite
            return(
              < RowNew key={newSite.name} name={name} firstArticles={firstArticles} imageSite={imageSite} />
            )
          })
        }
      </section>
    </main>
  )
}

export default App
