// Header component
import {ContactProps, HeaderProps} from "@/components/profile";
import React from "react";
import NavBar from "@/components/menu";
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
const Header: React.FC<HeaderProps & ContactProps> = ({ name, tagline, profilePicture, altProfilePicture, email, phone, socialMediaLinks }) => (
    <div className={"container mx-auto "}>
        <NavBar />
    <header className="bg-gray-200 py-8 mt-16">

        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8">
                <div className="flex items-center ml-5">
                        <Image className="rounded-full border-4 border-gray-700 w-32 h-32" src={profilePicture} alt={"Profile picture"} width={200} height={200} />

                    <div className="ml-4">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <h2 className="text-xl text-gray-600">{tagline}</h2>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-4">
                <div className="ml-4 md:text-left text-center">
                    <p><FaEnvelope className="inline-block align-middle mr-2"/>{email}</p>
                    <p><FaPhone className="inline-block align-middle mr-2"/>{phone}</p>
                    {socialMediaLinks.map((link, index) => (
                            <a href={link.url} key={index} target="_blank" rel="noopener noreferrer">{renderSocialMediaIcon(link.name)}</a>
                    ))}
                </div>
            </div>
        </div>
    </header>
    </div>
);

const renderSocialMediaIcon = (name: string): JSX.Element | null => {
    switch (name.toLowerCase()) {
        case 'facebook':
            return <FaFacebook className="inline-block align-middle mr-2" />;
        case 'twitter':
            return <FaTwitter className="inline-block align-middle mr-2" />;
        case 'instagram':
            return <FaInstagram className="inline-block align-middle mr-2" />;
        case 'github':
            return <FaGithub className="inline-block align-middle mr-2" />;
        case 'linkedin':
            return <FaLinkedin className="inline-block align-middle mr-2" />;
        default:
            return null;
    }
};

export default Header