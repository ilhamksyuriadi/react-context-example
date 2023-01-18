import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'
import { LanguageContext } from '../context/Language'
import "./SectionUser.css"

const SectionUser = () => {
    const { theme } = useContext(ThemeContext)
    const { language, handleChangeLanguage } = useContext(LanguageContext)

    const onChangeLanguage = () => {
        handleChangeLanguage()
    }

    return (
        <div className={`section-user-${theme}`}>
            <h2>{language.titleSection}</h2>
            <button onClick={onChangeLanguage}>{language.buttonSection}</button>
        </div>
    )
}

export default SectionUser