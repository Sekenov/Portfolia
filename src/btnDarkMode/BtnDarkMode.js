import sun from './sun.svg'
import moon from './moon.svg'
import './style.css'
import { useLocalStorage } from '../utils/useLocalStorage'
import { useEffect, useRef} from 'react'
import detectDarkMode from './../utils/detectDarkMode'


const BtnDarkMode = () => {

    // const [darkMode, setDarkMode] = useState('light');

    
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())


    const btnRef = useRef(null);

    useEffect(()=>{
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    },[darkMode]);

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme);
            });
    }, [])


    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue  === 'light' ? 'dark' : 'light';
        });
    }

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';


    return ( 
        <button ref={btnRef} onClick={toggleDarkMode } className={darkMode === 'dark' ? btnActive : btnNormal}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}
 
export default BtnDarkMode;
