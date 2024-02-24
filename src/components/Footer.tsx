




export default function Footer() {
  return (
    <footer className="bg-black pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          <div className="w-full md:w-1/4 mb-12">
            <h5 className="text-xl font-bold text-white mb-4">Site Map</h5>
            <ul className="text-gray-400">
              <li className="mb-3 hover:text-white"><a href="#">Home</a></li>
              <li className="mb-3 hover:text-white"><a href="#">About</a></li>
              <li className="mb-3 hover:text-white"><a href="#">Services</a></li>
              <li className="hover:text-white"><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-12">
            <h5 className="text-xl font-bold text-white mb-4">Services</h5>
            <ul className="text-gray-400">
              <li className="mb-3 hover:text-white"><a href="#">Promotion</a></li>
              <li className="mb-3 hover:text-white"><a href="#">Instagram Manag</a></li>
              <li className="mb-3 hover:text-white"><a href="#">Saini</a></li>
            </ul>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/4 mb-12">
            <h5 className="text-xl font-bold text-white mb-4">About</h5>
            <ul className="text-gray-400">
              <li className="mb-3 hover:text-white"><a href="#">Company</a></li>
              <li className="mb-3 hover:text-white"><a href="#">Team</a></li>
              <li className="hover:text-white"><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h5 className="text-xl font-bold text-white mb-4">Connect</h5>
            <div className="flex items-center">
              <a href="#" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-gray-900 hover:border-white hover:bg-white hover:text-black">
                <svg className="w-4 text-white fill-current" viewBox="0 0 512 512">
                  <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>
              
              <a href="#" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-gray-900 hover:border-white hover:bg-white hover:text-black">
                <svg className="w-4 text-white fill-current" viewBox="0 0 512 512">
                  <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-800" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Mr.Divyansh saini
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}