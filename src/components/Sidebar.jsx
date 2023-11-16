import Avatar from '../img/eu.jpg'
import '../styles/components/sidebar.sass'
import Information from './Information'
import SocialNetworks from './SocialNetworks'


const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Denisson Pereira" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <Information />
        <a href="" className="btn">Download currículo</a>

    </aside>
  )
}

export default Sidebar