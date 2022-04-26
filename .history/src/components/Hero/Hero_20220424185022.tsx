import { useEffect } from 'react';
import Image from 'next/image';
import rocketSVG from '../../static/images/rocket.svg';
import avatar from '../../static/images/new-avatar.jpg';

import TopCloud from '../common/Clouds/TopCloud';

const hero = {
    name: "Julmer Olivero",
    position: "Semi-Senior Full Stack Web Developer",
    slogan: "From the Frontend to the Backend without restrictions!",
    description: "Principally, I am a Father and Husband, but in my work time, I am a Full Stack Developer with years of experience. Last 4 years, I have worked mainly as a Frontend Developer, but working with Backend is not a problem to me. My specialities are Javascript, ReactJS, Redux, SASS/CSS, HTML5, PHP, Laravel, SQL and NoSQL Databases, but I can handle any work needed as I am constantly learning and upgrading my skills with new languages and frameworks and new programming challenges."
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
                <figure className="about-picture animated fadeInUp delay-800ms">
                    <Image className="picture-profile" src={avatar} alt="Julmer Olivero" />
                </figure>
                <h1 className="header-title animated fadeInUp delay-1s">
                    {hero.name}
                </h1>
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
