import { FC } from "react";
import { MdEmail } from "react-icons/md";
import { ImMobile, ImTwitter, ImFacebook, ImLinkedin } from "react-icons/im";
import { FaInstagram, FaGithubAlt } from "react-icons/fa";
import { SiSkype } from "react-icons/si";

type SocialItems = {
    name: string;
    url: string;
};

type SocialItemsProps = {
    email: SocialItems;
    github: SocialItems;
    linkedin: SocialItems;
    twitter: SocialItems;
    facebook: SocialItems;
    instagram: SocialItems;
    mobile: SocialItems;
    skype: SocialItems;
}

type SocialContactProps = {
    socialProps: SocialItemsProps;
}

const SocialContact: FC<SocialContactProps> = ({
    socialProps
}) => {

    const {
        email, twitter, facebook, instagram, github, linkedin, skype, mobile
    } = socialProps;

    if (!email) {
        return (
            <div></div>
        )
    }
    return (
        <div className="overflow-hidden social-box">
            <ul className="container social-contact text-center animated fadeInDown delay-800ms">
                <li className="animated delay-600ms fadeInDown"><MdEmail className="icons" size="24" color="white" />&nbsp;&nbsp; <a href={'mailto:' + email.url}>{email.name}</a></li>
                <li className="animated delay-800ms fadeInDown"><ImMobile className="icons" size="24" color="white" />&nbsp;&nbsp; <a href={'tel:' + mobile.url}>{mobile.name}</a></li>
                <li className="animated delay-1s fadeInDown"><ImTwitter className="icons" size="24" color="white" />&nbsp;&nbsp; <a href={twitter.url}>{twitter.name}</a></li>
                <li className="animated delay-1dot2s fadeInDown"><ImFacebook className="icons" size="24" color="white" />&nbsp;&nbsp; <a href={facebook.url}>{facebook.name}</a></li>
                <li className="animated delay-1dot4s fadeInDown"><FaInstagram className="icons" size="24" color="white" />&nbsp;&nbsp; <a href={instagram.url}>{instagram.name}</a></li>
                <li className="animated delay-1dot6s fadeInDown"><FaGithubAlt className="icons" size="24" color="white" />&nbsp;&nbsp; <a href={github.url}>{github.name}</a></li>
                <li className="animated delay-1dot8s fadeInDown"><SiSkype className="icons" size="24" color="white" />&nbsp;&nbsp; <a href={skype.url}>{skype.name}</a></li>
                <li className="animated delay-2s fadeInDown"><ImLinkedin className="icons" size="24" color="white" />&nbsp;&nbsp; <a href={linkedin.url}>{linkedin.name}</a></li>
            </ul>
        </div>
    )
}

export default SocialContact;
