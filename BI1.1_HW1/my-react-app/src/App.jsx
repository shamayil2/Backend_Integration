import BookByTitle from "./components/BookByTitle"
import Books from "./components/Books"
import BooksByAuthor from "./components/BooksByAuthor"

function App() {
  

  return (
    <>
     <Books/> 
     <BookByTitle bookTitle="Shoe Dog"/>
     <BooksByAuthor authorName="Harper Lee"/>
    </>
   
  )
}

export default App    
