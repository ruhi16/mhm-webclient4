import React from 'react'
import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram, SlSocialReddit, SlSocialYoutube   } from "react-icons/sl";


function SchoolItem() {
  return (
    <>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 bg-indigo-400">
          <div className="mx-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-6xl dark:text-white">
              Md Abdur Rouf.
            </h1>

            <h1 className="max-w-xxl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-xl xl:text-3xl dark:text-white text-gray-700">
              Headmaster, Manikchak High Madrasah(H.S)
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales taxcheckout to global sales
              taxcheckout to global sales tax compliance, companies around.
            </p>
            <p>
              Mobile: +91 9452365108
              <br />
              Email: abrouf@gmail.com
            </p>

            <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <ul className="mb-4 -ml-2 flex md:order-1 md:mb-0">
                <li>
                  <a
                    className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="Twitter"
                    href="#"
                  >
                    <SlSocialFacebook size={24} />                    
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="Twitter"
                    href="#"
                  >
                    <SlSocialTwitter size={24} />                    
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="Twitter"
                    href="#"
                  >
                    <SlSocialInstagram size={24} />                    
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="Twitter"
                    href="#"
                  >
                    <SlSocialReddit size={24} />                    
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="Twitter"
                    href="#"
                  >
                    <SlSocialYoutube size={24} />                    
                  </a>
                </li>
                

                
              </ul>
            </div>
          </div>
          <div className="relative hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center bg-amber-400">
            <img
              className="h-72 w-72 rounded-full border border-spacing-12"
              src="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/72234965_2157049837931099_8908045193068937216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7a1959&_nc_ohc=qtynUvVwCXQAX96kZT7&_nc_ht=scontent-del1-1.xx&oh=00_AfBw6wa6RbYGUuWluNgQP9kXRpIG5RUkvOaeDmMD6d8byg&oe=65FA235C"
              alt="mockup"
            />
          </div>
        </div>
      
    </>
  )
}

export default SchoolItem