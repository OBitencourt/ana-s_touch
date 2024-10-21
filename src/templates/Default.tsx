import React from 'react'
//import Header from '../components/Header'
//import Footer from '../components/Footer'

interface DefaultProps {
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            <header/>
            
            {children}
            <footer />
        </>
    )
}

export default Default
