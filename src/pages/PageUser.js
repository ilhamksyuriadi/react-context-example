import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'
import { LanguageContext } from '../context/Language'
import SectionUser from '../sections/SectionUser'
import "./PageUser.css"

const PageUser = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)

    const handleChangeTheme = () => {
        if (theme === 'dark') {
            setTheme("default")
        } else {
            setTheme("dark")
        }
    }

    return (
        <div className={`page-user-${theme}`}>
            <h1>{language.titlePageUser} {theme}</h1>
            <button onClick={handleChangeTheme}>{language.buttonPageUser}</button>
            <SectionUser />
        </div>
    )
}

export default PageUser