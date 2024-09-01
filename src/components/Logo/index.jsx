import { Link } from 'react-router-dom'
// import logo from '../../../public/LogoMini.png'

export default function Logo() {
  return (
    <Link to="/HomePage">
        {/* <img src={logo} alt="Visua" /> */}
        <h1 className='text-2xl font-semibold'>Visua</h1>
    </Link>
  )
}
