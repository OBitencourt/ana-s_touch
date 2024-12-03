
import { useEffect, useState } from "react";
import Image from "next/image";
import { BackButton } from "./style";

const BackToHeroButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const aboutSection = document.getElementById("about");
        const aboutPosition = aboutSection?.offsetTop || 10;
        const scrollPosition = window.scrollY;

        // Exibe o botão quando o usuário ultrapassa a seção "Sobre"
        setIsVisible(scrollPosition > aboutPosition);
    };

    const scrollToHero = () => {
        const heroSection = document.getElementById("hero");
        heroSection?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {isVisible && (
                <BackButton 
                    onClick={scrollToHero}                     
                    aria-label="Voltar ao topo"
                >
                    <Image 
                        src='/images/top-arrow.svg'
                        width={20}
                        height={20}
                        alt="arrow"
                    />
                </BackButton>
            )}
        </>
    );
};

export default BackToHeroButton;
