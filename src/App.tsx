
import{useState} from "react"
import{List}from"./components/list" 

function App(){
const [project, setProjects]= useState<string[]>([])
function handleAddProject(){
  setProjects([...project, 'Novo projeto ${Date.now()}'])
}
return (
  <>
  <header>Conteúdo da Home</header>
  <main>
  <ul>
  {projects.map(item => <List key={item}>{item}</List>)}
  </ul>
  <button onClick={handleAddProject}>Adiciona </button>
  </main>
  </>
  )

export default App
