import './App.css'
import Header from './components/Header'
import RowNew from './container/RowNew'
import useGetArticle from './hooks/useGetArticles'

function App() {
  const { allArticles, isLoading, error } = useGetArticle()

  return (
    <main>

      < Header />

      <section className='container-news container'>
        {
          isLoading && <h2>poner los skeletons</h2>
        }
        {
          error && <h2>poner quie hjay un error</h2>
        }
        {
          allArticles.map( newSite => {
            const { firstArticles, name, imageSite } = newSite
            return(
              < RowNew key={name} name={name} firstArticles={firstArticles} imageSite={imageSite} />
            )
          })
        }
      </section>

    </main>
  )
}

export default App
