import React from 'react'
import Footer from '../components/Footer/Footer'

interface DefaultProps {
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            
            {children}
            <Footer />
        </>
    )
}

export default Default
