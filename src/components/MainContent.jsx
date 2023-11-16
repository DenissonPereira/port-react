import '../styles/components/MainContent.sass'
import About from './About'
import Projetos from './Projetos'
import Tecnologias from './Tecnologias'

const MainContent = () => {
  return (
    <main id='main-content'>
      <About />
      <Tecnologias />
      <Projetos />
    </main>
  )
}

export default MainContent