import React from 'react';
import { Instagram, Mail, Globe, ExternalLink } from 'lucide-react';

// The LinkCard component properly formatted
const LinkCard = ({ title, url, description }) => {
    return (
        <a href={url} className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-semibold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
                <ExternalLink className="text-gray-400" size={20} />
            </div>
        </a>
    );
};

// The main BioLinkPage component
const BioLinkPage = () => {
    const profile = {
        name: "نام شما",
        bio: "توضیحات بیوگرافی شما",
        avatar: "/api/placeholder/120/120",
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
            instagram: "https://instagram.com/youraccount",
            website: "https://yourwebsite.com",
            email: "hello@yourdomain.com"
        }
    };

    return (
        <div dir="rtl" className="min-h-screen font-['Vazirmatn'] bg-gradient-to-b from-pink-50 to-purple-50 p-6">
            <div className="max-w-md mx-auto space-y-8">
                <div className="text-center">
                    <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{profile.name}</h1>
                    <p className="text-gray-600 mb-4">{profile.bio}</p>
                    
                    <div className="flex justify-center gap-4 mb-6">
                        <a href={profile.socials.instagram} className="text-pink-600 hover:text-pink-700">
                            <Instagram size={24} />
                        </a>
                        <a href={profile.socials.website} className="text-pink-600 hover:text-pink-700">
                            <Globe size={24} />
                        </a>
                        <a href={`mailto:${profile.socials.email}`} className="text-pink-600 hover:text-pink-700">
                            <Mail size={24} />
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