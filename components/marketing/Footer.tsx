const Footer = () => {
    return (           
        <div className='flex flex-col md:flex-row md:col-start-3 md:col-span-4 md:row-start-6 md:mb-20 md:ml-20 justify-start text-xs md:text-sm space-y-1 md:space-y-0 md:self-end'>
            <div className="flex space-x-6">
            <div>
                <span className="text-custom-white">12</span>
                <span className="text-custom-white text-opacity-50"> ACCOUNTS</span>
            </div>
            <div>
                <span className="text-custom-white">9,123</span>
                <span className="text-custom-white text-opacity-50"> VIEWS</span>
            </div>
            </div>
            <div className='text-custom-white text-opacity-50 md:ml-12'>
                ©2023 EAST PARK HOLDINGS GROUP
            </div>
        </div>
    );
}

export default Footer;