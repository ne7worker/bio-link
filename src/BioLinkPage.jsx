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
                title: "جدیدترین مجموعه",
                url: "#",
                description: "خرید جدیدترین محصولات"
            },
            {
                title: "رزرو مشاوره",
                url: "#",
                description: "رزرو جلسه مشاوره رایگان"
            },
            {
                title: "عضویت در خبرنامه",
                url: "#",
                description: "دریافت بروزرسانی‌های هفتگی و پیشنهادات ویژه"
            }
        ],
        socials: {
            instagram: "https://instagram.com/_mhtech_",
            website: "https://ne7worker.github.io/bio-link/",
            email: "ne7worker@gmail.com"
        }
    };

    return (
        <div dir="rtl" className="min-h-screen font-['Vazirmatn'] bg-gradient-to-b from-pink-50 to-pink-100 p-6">
            <div className="max-w-md mx-auto space-y-8">
                <div className="text-center">
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-pink-100 border-4 border-pink-200 flex items-center justify-center">
                        <span className="text-2xl">{profile.name}</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">MHTECH</h1>
                    <p className="text-xl text-gray-700 mb-6">{profile.bio}</p>
                    
                    <div className="flex justify-center gap-6 mb-8">
                        <a href={profile.socials.instagram} className="text-pink-500 hover:text-pink-600">
                            <Instagram size={28} />
                        </a>
                        <a href={profile.socials.website} className="text-pink-500 hover:text-pink-600">
                            <Globe size={28} />
                        </a>
                        <a href={`mailto:${profile.socials.email}`} className="text-pink-500 hover:text-pink-600">
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