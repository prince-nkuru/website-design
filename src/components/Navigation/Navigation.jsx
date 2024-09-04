import './Navigation.css'

const Navigation = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>EV-OLUTION</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}
export default Navigation