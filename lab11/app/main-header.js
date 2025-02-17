
import logoImg from '@/assets/logo.png'; 
import classes from './main-header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import HeaderBackground from './main-header-backgroud';
export default function MainHeader() {
    return (
        
        <header className={classes.header}>
            
            <Link className={classes.mainlogo} href="/">
            <Image
            src={logoImg.src}
            alt="A plate with food on it"
            width={100}
            height={100}
            priority={false}
            />
            NextLevel Food
            </Link>
            <Link className={classes.logo} href="/meals">
          
            Meals
            </Link>
            <Link className={classes.logo} href="/community">
          
            Community
            </Link>
        </header>
        );
        }