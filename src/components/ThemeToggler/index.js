import { useSelector, useDispatch } from 'react-redux'
import { changeTheme,setDark } from '../../redux/Slices/themeChange'

export const ThemeToggler = ()=>{
    const theme = useSelector((state) => state.themeChanger.theme)
    const dispatch = useDispatch()


    const changeAppTheme = () =>{
        dispatch(changeTheme())
    }
    return(
        <>
        <button onClick={changeAppTheme}>Change Theme</button>
        </>
    )
}
