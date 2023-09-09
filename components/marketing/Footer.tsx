const Footer = () => {
    return (           
        <div className='flex flex-col md:flex-row md:col-start-3 md:col-span-4 md:row-start-6 md:mb-20 md:ml-20 justify-start text-custom-white text-xs md:text-sm opacity-50 space-y-1 md:space-y-0 md:self-end'>
            <div className='flex space-x-6'>
                <div>
                    12 ACCOUNTS
                </div>
                <div>
                    9,123 VIEWS
                </div>
            </div>
            <div className='md:ml-12'>
                ©2023 EAST PARK HOLDINGS GROUP
            </div>
        </div>
    );
}

export default Footer;