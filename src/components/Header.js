import logo from './logo.svg';
import './Header.css'

const Header = () => (
    <div className='App-header'>
        <img className='Header-icon' src={logo} alt="logo" />
        <span className='Header-title'>
            The Poker Bro
        </span>
    </div>
)

export default Header