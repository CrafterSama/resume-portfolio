import { useEffect } from 'react';
import Image from 'next/image';
import rocketSVG from '../../assets/images/rocket.svg';
import avatar from '../../assets/images/new-avatar.jpg';

import TopCloud from '../common/Clouds/TopCloud';

const hero = {
    name: "Julmer Olivero",
    position: "Frontend React Developer",
    slogan: "With a tiny background in the backend stack",
    description: "I've, for the last 5 years, worked as a Frontend Developer, but the last 3 of that 5, I've mainly worked as a Frontend React Developer, I've also developed the necessary skillset so I can work as a Backend Developer as well. Javascript, React, Redux, VueJS, SASS/CSS, HTML5, PHP, Laravel, NodeJS+ExpressJS, NextJS, Apollo, Yoga, GraphQL, SQL and NoSQL Databases are my top, current, skill areas."
}

const Hero = () => {
    useEffect(() => {
        const headerBgOne = document.getElementById('bigHeaderOne');
        const headerBgTwo = document.getElementById('bigHeaderTwo');
        const timer = setTimeout(() => {
            headerBgOne?.classList.remove('fadeInRightLarge');
            headerBgTwo?.classList.remove('fadeInLeftLarge');
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <header id="about-me" className="hero">
            <div id="bigHeaderOne" className="middle-bg-one animated fadeInRightLarge"></div>
            <div id="bigHeaderTwo" className="middle-bg-two animated fadeInLeftLarge"></div>
            <div className="header-body text-center">
                <h1 className="header-title animated fadeInUp delay-1s">
                    {hero.name}
                </h1>
                <figure className="about-picture animated fadeInUp delay-800ms">
                    <Image className="picture-profile" src={avatar} alt="Julmer Olivero" width={250} height={250}/>
                </figure>
                <div className="hero-body">
                    <div className="floating-description animated fadeInDown">
                        <div className="subtitle-hero animated float slow-motion infinite">
                            <h2 className="subtitle animated fadeInUp delay-600ms">{hero.position}</h2>
                            <h4 className="small animated fadeInUp delay-800ms">{hero.slogan}</h4>
                            <p className="animated fadeInDown delay-1s">{hero.description}</p>
                            <div className="subtitle-rocket animated fadeInDownRotate delay-1s">
                                <Image className="rocket animated slower infinite floatingRocket" src={rocketSVG} alt="Rocket" />
                            </div>
                        </div>
                    </div>
                </div>
                <TopCloud />
            </div>
        </header>
    );
};

export default Hero;
