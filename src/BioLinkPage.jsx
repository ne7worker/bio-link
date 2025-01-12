import React from 'react';
import { Instagram, Mail, Globe, ExternalLink } from 'lucide-react';

const LinkCard = ({ title, url, description }) => {
    return (
        <a href={url} className="block bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-center">
                <div className="text-right">
                    <h2 className="font-bold text-gray-900">{title}</h2>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
                <ExternalLink className="text-gray-400" size={24} />
            </div>
        </a>
    );
};

const BioLinkPage = () => {
    const profile = {
        name: "لئوتک",
        bio: "تکنولوژی برای همه",
        links: [
            {
                title: "دانلود V2RayNG برای اندروید",
                url: "https://github.com/2dust/v2rayNG/releases/download/1.9.28/v2rayNG_1.9.28_universal.apk",
                description: "برنامه VPN برای آیفون و مک"
            },
            {
                title: "دانلود V2Box برای iOS",
                url: "https://apps.apple.com/us/app/v2box-v2ray-client/id6446814690",
                description: "برنامه VPN برای آیفون و مک"
            },
            {
                title: "دانلود V2RayN برای ویندوز",
                url: "https://github.com/2dust/v2rayN/releases/download/7.5.6/v2rayN-windows-64-SelfContained-With-Core.zip",
                description: "برنامه VPN برای وبندوز"
            },
            {
                title: "لینک اشتراک VPN رایگان",
                url: "https://begzar.pages.dev/sub/6231c67b-b7e8-41f3-9112-e1ccdc40123d?app=xray#BPB-Full-Normal",
                description: "این لینک باید داخل برنامه ها ایمپورت بشه"
            }
        ],
        socials: {
            instagram: "https://instagram.com/_mhtech_",
            website: "https://ne7worker.github.io/bio-link/",
            email: "ne7worker@gmail.com"
        }
    };

    return (
        <div dir="rtl" className="min-h-screen font-['Vazirmatn'] bg-gradient-to-b from-blue-50 to-blue-100 p-6">
            <div className="max-w-md mx-auto space-y-8">
                <div className="text-center">
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-blue-100 border-4 border-blue-200 flex items-center justify-center">
                        <span className="text-2xl">{profile.name}</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">LEOTECH</h1>
                    <p className="text-xl text-gray-700 mb-6">{profile.bio}</p>
                    
                    <div className="flex justify-center gap-6 mb-8">
                        <a href={profile.socials.instagram} className="text-blue-500 hover:text-blue-600">
                            <Instagram size={28} />
                        </a>
                        <a href={profile.socials.website} className="text-blue-500 hover:text-blue-600">
                            <Globe size={28} />
                        </a>
                        <a href={`mailto:${profile.socials.email}`} className="text-blue-500 hover:text-blue-600">
                            <Mail size={28} />
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    {profile.links.map((link, index) => (
                        <LinkCard
                            key={index}
                            title={link.title}
                            url={link.url}
                            description={link.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BioLinkPage;