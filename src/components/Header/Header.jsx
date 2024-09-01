import React from 'react';
import { IoMenu, IoClose, IoQrCodeOutline } from 'react-icons/io5';
const Header = () => {
    const navLinks = [
        {
            title: 'Home',
            slug: '/'
        },
        {
            title: 'About',
            slug: '/about'
        },
        {
            title: 'Pricing',
            slug: '/pricing'
        },
        {
            title: 'Contact',
            slug: '/contact'
        }
    ];
    
    const [isOpen, setIsOpen] = React.useState(false);

    const handleButton = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex items-center p-2 bg-black m-2'>
                    <a href="/" className="flex gap-4 items-center">
                        <IoQrCodeOutline className="text-green-600 text-4xl" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">QuantumQR</span>
                    </a>
                </div>
                <nav className='hidden md:block'>
                    <ul className='flex gap-6'>
                        {navLinks.map((link, index) => (
                            <a to={link.slug} key={index} className='text-xl font-medium hover:text-green-500'>
                                <span>{link.title}</span>
                            </a>
                        ))}
                    </ul>
                </nav>

                <div className='md:hidden'>
                    <button onClick={handleButton} className='text-2xl p-4'>
                        {isOpen ? <IoClose /> : <IoMenu />}
                    </button>
                    {
                        isOpen && (
                            <div className='absolute top-16 left-0 w-full bg-white shadow-lg z-20 py-4'>
                                <ul className='flex flex-col items-center gap-4'>
                                    {navLinks.map((link, index) => (
                                        <a to={link.slug} key={index} className='text-xl font-medium hover:text-green-500' onClick={handleButton}>
                                            <span>{link.title}</span>
                                        </a>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;