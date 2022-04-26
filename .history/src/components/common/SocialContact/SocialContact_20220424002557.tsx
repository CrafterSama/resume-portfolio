import { FC } from "react";

type SocialItems = {
    name: string;
    url: string;
};

type SocialContactProps = {
    email: SocialItems;
    github: SocialItems;
    linkedin: SocialItems;
    twitter: SocialItems;
    facebook: SocialItems;
    instagram: SocialItems;
    mobile: SocialItems;
    skype: SocialItems;
}

const SocialContact: FC<SocialContactProps> = ({
    email, twitter, facebook, instagram, github, linkedin,skype, mobile
}) => {

        if (!email) {
            return (
                <div></div>
            )
        }
        return (
            <div className="overflow-hidden social-box">
                <ul className="container social-contact text-center animated fadeInDown delay-800ms">
                    <li className="animated delay-600ms fadeInDown"><i className="fas fa-envelope"></i>&nbsp;&nbsp; <a href={'mailto:' + email.url}>{email.name}</a></li>
                    <li className="animated delay-800ms fadeInDown"><i className="fas fa-mobile-alt"></i>&nbsp;&nbsp; <a href={'tel:' + mobile.url}>{mobile.name}</a></li>
                    <li className="animated delay-1s fadeInDown"><i className="fab fa-twitter"></i>&nbsp;&nbsp; <a href={twitter.url}>{twitter.name}</a></li>
                    <li className="animated delay-1dot2s fadeInDown"><i className="fab fa-facebook"></i>&nbsp;&nbsp; <a href={facebook.url}>{facebook.name}</a></li>
                    <li className="animated delay-1dot4s fadeInDown"><i className="fab fa-instagram"></i>&nbsp;&nbsp; <a href={instagram.url}>{instagram.name}</a></li>
                    <li className="animated delay-1dot6s fadeInDown"><i className="fab fa-github"></i>&nbsp;&nbsp; <a href={github.url}>{github.name}</a></li>
                    <li className="animated delay-1dot8s fadeInDown"><i className="fab fa-skype"></i>&nbsp;&nbsp; <a href={skype.url}>{skype.name}</a></li>
                    <li className="animated delay-2s fadeInDown"><i className="fab fa-linkedin-in"></i>&nbsp;&nbsp; <a href={linkedin.url}>{linkedin.name}</a></li>
                </ul>
            </div>
        )
    }
}

export default SocialContact;
