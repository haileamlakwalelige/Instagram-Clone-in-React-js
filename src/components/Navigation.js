import '../styles/navigation.scss';
import logo from '../images/instagramLogo.png';
import search from '../images/search.png';
import Menu from './Menu.js'
function Navigation(){
    return(
        <div className="navigation">
            <div className='container'>
                <img className="logo" src={logo} alt="instagram logo" />
                <div className='search'>
                    <img className='searchIcon' src={search} alt="search icon" />
                    <span className='searchText'>Search</span>
                </div>
                <Menu />
            </div>
        </div>
    );

}

export default Navigation;