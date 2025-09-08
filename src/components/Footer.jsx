import React from 'react'
import Logo from '../assets/Logo.png';
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from 'lucide-react'


const Footer = () => {
    return (
        <footer className="bg-muted text-muted-foreground bg-slate-50 ">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and social links */}
          <div>
            <img src={Logo} alt="IOIN Connect" className="w-32 mb-6" />
            <p className="text-sm leading-relaxed">
              Unifying parking systems into one intelligent, self-optimizing ecosystem.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-500">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>Home</li>
                            <li>About</li>                           
                            <li>Layers</li>
                            <li>Benefits</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-500">Contact Us</h3>
                        <div className='flex gap-2'>
                            <MapPin className='text-blue-500' />
                            <div>
                                <p>123 ioin Street</p>
                                <p>City, State 12345</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Phone className='text-blue-500 my-4' />
                            <p>Phone: (256) 00000</p>
                        </div>
                        <div className='flex gap-2'>
                            <Mail className='text-blue-500' />
                            <p>Email: info@ioin.com</p>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-500">Opening Hours</h3>
                        <p>Monday - Friday: 9am - 5pm</p>
                        <p>Saturday - Sunday: 9am - 12pm</p>
                    </div>
                   
                </div>
                <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Your <span className='text-blue-500 font-semibold'>ioin</span>Co. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer