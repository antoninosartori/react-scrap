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
          allArticles.map( diario => {
            console.log(diario)
            const { firstArticles, name, imageSite } = diario
            return(
              < RowNew key={diario.name} name={name} firstArticles={firstArticles} imageSite={imageSite} />
            )
          })
        }
      </section>
    </main>
  )
}

export default App
