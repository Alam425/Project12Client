import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full'>
            <footer className="grid items-center grid-cols-1 md:grid-cols-4 gap-7 p-10 bg-slate-800">
                <div>
                    <p className="text-xl font-medium border-b-2 mb-1 text-white">Useful Links</p><br />
                    <Link to='/' className="text-lg text-white">About Us</Link><br />
                    <Link to='/' className="text-lg text-white">Frequently Asked Questions(FAQ)</Link><br />
                    <Link to='/' className="text-lg text-white">Blog</Link><br />
                    <Link to='/' className="text-lg text-white">Affiliate Zone</Link><br />
                    <Link to='/' className="text-lg text-white">Privacy Policy</Link><br />
                </div>

                <div className="md:col-span-2 my-10">
                    <p className="text-xl font-medium text-white">ISLAH ACADEMY is the leading eLearning platform for Islamic Online Courses in Bangladesh. Our online courses are designed in collaboration with the best Islamic scholars and experts of each field from all over the world.</p><br />
                    <div className="flex gap-5 items-center mt-0 justify-items-center text-slate-100">
                        <div className="tooltip text-xl bg-blue-600 h-7 p-1 rounded" data-tip="Facebook">
                            <Link target='_blank' to='https://www.facebook.com/'><FaFacebookF /></Link><br />
                        </div>
                        <div className="tooltip text-xl bg-rose-500 h-7 p-1 rounded" data-tip="Instagram">
                            <Link target='_blank' to='https://www.instagram.com/'><FaInstagram /></Link><br />
                        </div>
                        <div className="tooltip text-xl bg-sky-700 h-7 p-1 rounded" data-tip="LinkdIn">
                            <Link target='_blank' to='https://www.linkedin.com/'><FaLinkedinIn /></Link><br />
                        </div>
                        <div className="tooltip text-xl bg-sky-500 h-7 p-1 rounded" data-tip="Twitter">
                            <Link target='_blank' to='https://www.twitter.com/'><FaTwitter /></Link><br />
                        </div>
                        <div className="tooltip text-xl bg-green-500 h-7 p-1 rounded" data-tip="WhatsApp">
                            <Link target='_blank' to='https://www.whatsapp.com/'><FaWhatsapp /></Link><br />
                        </div>
                        <div className="tooltip text-xl bg-red-600 h-7 p-1 rounded" data-tip="YouTube">
                            <Link target='_blank' to='https://www.youtube.com/'><FaYoutube /></Link><br />
                        </div>
                        <div className="tooltip text-xl bg-sky-500 h-7 p-1 rounded" data-tip="Telegram">
                            <Link target='_blank' to='https://web.telegram.org/'><FaTelegram /></Link><br />
                        </div>
                    </div>
                </div>

                <div className='text-white'>
                    <p className="text-xl font- border-b-2 mb-1 text-white">Contact</p><br />
                    <p>Phone: <br /><span className="text-lg font-medium text-amber-400">+8801844727234</span></p>
                    <p>Email: <br /><span className="text-lg font-medium text-amber-400">some@one.com</span></p>
                    <p>Website: <br /><span className="text-lg font-medium text-amber-400">www.islah.academy.com</span></p>
                </div>
            </footer>

            <footer className="py-1 text-center bg-slate-300 text-slate-600 border-base-300">
                <p className="text-xl text-center font-semibold">ISLAH ACADEMY || DEVELOPED BY : SHAMS</p>
            </footer>
        </div>
    );
};

export default Footer;