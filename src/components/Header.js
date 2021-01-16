import './Header.css'
import * as DiIcons from 'react-icons/di';

const Header = () => (
    <div className='App-header'>
        <DiIcons.DiReact className='Header-icon'></DiIcons.DiReact>
        <span className='Header-title'>
            The Poker Bro
        </span>
    </div>
)

export default Header