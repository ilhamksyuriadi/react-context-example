import { createContext, useState } from 'react'

export const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
    const IND = {
        id: 'id',
        titlePageUser: 'Pengguna sedang menggunakan tema:',
        buttonPageUser: 'Ubah Tema',
        titleSection: 'Sesi Pengguna',
        buttonSection: 'Ubah Bahasa'
    }

    const ENG = {
        id: 'en',
        titlePageUser: 'User sedang menggunakan tema:',
        buttonPageUser: 'Ubah Tema',
        titleSection: 'Section User',
        buttonSection: 'Change Language'
    }

    const [language, setLanguage] = useState(IND)

    const handleChangeLanguage = () => {
        if (language.id === 'id') {
            setLanguage(ENG)
        } else {
            setLanguage(IND)
        }
    }

    return (
        <LanguageContext.Provider value={{language, handleChangeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}