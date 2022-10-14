import React from 'react'
const Footer = () => {
    return(
            <div className="bg-[#0A0A0A] pt-[70px] pb-[20px] mt-[150px] h-[443px]">
                <div className="flex justify-between max-w-[1200px] text-white m-auto">
                    <div>
                        <p className="text-white font-extrabold text-[20px]">Products</p>
                        <ul className="flex flex-col gap-[12px] ml-[10px]">
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Productions</li>
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Podcasting</li>
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Co-Working</li>
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Cyc Wall</li>
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Warehouse</li>
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Creative Networking</li>
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Event Hosting</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-white font-extrabold text-[20px]">Resources</p>
                        <ul className="flex flex-col gap-[12px] ml-[10px]">
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Pricing & Plans</li>
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Scheduling</li>
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Help</li>
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Invoice Pay</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-white font-extrabold text-[20px]">Account</p>
                        <ul className="flex flex-col gap-[12px] ml-[10px]">
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Login</li>
                            <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Create Account</li>
                         </ul>
                    </div>
                    <div>
                        <p className="text-white font-extrabold text-[20px]">Company</p>
                        <ul className="flex flex-col gap-[12px] ml-[10px]">
                             <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Our Story</li>
                             <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Our Team</li>
                             <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Address</li>
                             <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Careers</li>
                             <li className='cursor-pointer hover:text-gray-400 ease-out duration-300'>Contact Us</li>
                         </ul>
                    </div>
                    <div className="text-[35px]">
                        <p className="text-white font-extrabold text-[35px] mb-0">LOGO</p>
                        <ul className='flex gap-[10px]'>
                            <li className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48" fill="none">
                                    <g clip-path="url(#clip0_17_63)">
                                    <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="white"/>
                                    <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="white"/>
                                    <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_17_63"><rect width="48" height="48" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            <li className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48" fill="none">
                                    <path d="M47.5219 14.4001C47.5219 14.4001 47.0531 11.0907 45.6094 9.6376C43.7812 7.7251 41.7375 7.71572 40.8 7.60322C34.0875 7.11572 24.0094 7.11572 24.0094 7.11572H23.9906C23.9906 7.11572 13.9125 7.11572 7.2 7.60322C6.2625 7.71572 4.21875 7.7251 2.39062 9.6376C0.946875 11.0907 0.4875 14.4001 0.4875 14.4001C0.4875 14.4001 0 18.2907 0 22.172V25.8095C0 29.6907 0.478125 33.5813 0.478125 33.5813C0.478125 33.5813 0.946875 36.8907 2.38125 38.3438C4.20937 40.2563 6.60938 40.1907 7.67813 40.397C11.5219 40.7626 24 40.8751 24 40.8751C24 40.8751 34.0875 40.8563 40.8 40.3782C41.7375 40.2657 43.7812 40.2563 45.6094 38.3438C47.0531 36.8907 47.5219 33.5813 47.5219 33.5813C47.5219 33.5813 48 29.7001 48 25.8095V22.172C48 18.2907 47.5219 14.4001 47.5219 14.4001ZM19.0406 30.2251V16.7345L32.0062 23.5032L19.0406 30.2251Z" fill="white"/>
                                </svg>
                            </li>
                            <li className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48" fill="none">
                                    <g clip-path="url(#clip0_17_68)">
                                    <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_17_68">
                                     <rect width="48" height="48" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            <li className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48" fill="none">
                                    <g clip-path="url(#clip0_318_75)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM24.8601 17.7179C22.5257 18.6888 17.8603 20.6984 10.8638 23.7466C9.72766 24.1984 9.13251 24.6404 9.07834 25.0726C8.98677 25.803 9.90143 26.0906 11.147 26.4822C11.3164 26.5355 11.4919 26.5907 11.6719 26.6492C12.8973 27.0475 14.5457 27.5135 15.4026 27.5321C16.1799 27.5489 17.0475 27.2284 18.0053 26.5707C24.5423 22.158 27.9168 19.9276 28.1286 19.8795C28.2781 19.8456 28.4852 19.803 28.6255 19.9277C28.7659 20.0524 28.7521 20.2886 28.7372 20.352C28.6466 20.7383 25.0562 24.0762 23.1982 25.8036C22.619 26.3421 22.2081 26.724 22.1242 26.8113C21.936 27.0067 21.7443 27.1915 21.56 27.3692C20.4215 28.4667 19.5678 29.2896 21.6072 30.6336C22.5873 31.2794 23.3715 31.8135 24.1539 32.3463C25.0083 32.9281 25.8606 33.5085 26.9632 34.2313C27.2441 34.4155 27.5124 34.6067 27.7738 34.793C28.7681 35.5019 29.6615 36.1388 30.7652 36.0373C31.4065 35.9782 32.0689 35.3752 32.4053 33.5767C33.2004 29.3263 34.7633 20.1169 35.1244 16.3219C35.1561 15.9895 35.1163 15.5639 35.0843 15.3771C35.0523 15.1904 34.9855 14.9242 34.7427 14.7272C34.4552 14.4939 34.0113 14.4447 33.8127 14.4482C32.91 14.4641 31.5251 14.9456 24.8601 17.7179Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_318_75"><rect width="48" height="48" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[140px] mt-[40px] text-white">
                    <div>Copyright © 2022 zemeister | All rights reserved.</div>
                    <div>Made with 🧡 from Tashkent, Uzbekistan</div>
                    <div>Privacy Policy | Cookie Policy | Terms of Use | Refund Policy</div>
                </div>
            </div>
    )
}

export default Footer