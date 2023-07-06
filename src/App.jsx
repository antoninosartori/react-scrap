import './App.css'
import useGetArticle from './hooks/useGetArticles'

function App() {
  // custom hook
  const { allArticles, isLoading, error } = useGetArticle()

  return (
    <main>
      <div>
        { isLoading && <h1>cargando</h1> }
        { error && <h1>{error.message}</h1> }
        {console.log(allArticles)}
      </div>
    </main>
  )
}

export default App
