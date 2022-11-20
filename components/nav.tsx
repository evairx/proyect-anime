import style from './css/nav.module.css'
import Link from 'next/link'
import logo from '../components/img/logo.png'
import Image from 'next/image'
import MenuIcon from './icons/menuIcon';
import Search from './icons/search';
import { useEffect, useState } from 'react';

const nav=()=>{
    const navOnScroll = {
        background: '#270041e1',
        borderBottom: '1px solid #FFFFFF',
	}

	const navStyleOnTop = {
        background: 'linear-gradient(rgba(0, 0, 0, 0.959) , rgba(255, 255, 255, 0))',
	}

	const [navState, setNavState] = useState(navStyleOnTop)

	const changeOnScroll = () => {
		if (window.scrollY >= 100) {
			setNavState(navOnScroll)
		} else {
			setNavState(navStyleOnTop)
		}
	}

    useEffect(() => {
        window.addEventListener('scroll', changeOnScroll)
    },[])

    return (
        <div className={style.navbar} style={navState}>
        <div className={style.title}>
            <div className={style.logo}>
            <Link href="/"><a><Image src={logo} alt="AnimePost"/></a></Link>
            </div>
        </div>
        <input type="checkbox" id="check" className={style.check}/>
        <ul className={style.menuitem1}>
            <li><Link href="/"><a>INICIO</a></Link></li>
            <li><Link href="/anime"><a>DIRECTORIO ANIME</a></Link></li>
            <li><Link href="/search"><a><Search width={16} heigh={16} fill="currentColor"/></a></Link></li>
        </ul>
         <form className={style.formicon}>
                 <label htmlFor="check" className={style.checkbtn}>
                    <MenuIcon fill='#fff' width={24} heigh={24}/>
                 </label>
         </form>
        </div>
    );
}

export default nav;
