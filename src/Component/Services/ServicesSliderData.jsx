import React from "react";

const ServicesSliderData = [
    {
        id:1,
        icon:
            <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g clip-path="url(#clip0_188_80)">
            <path d="M13.0081 14.477C15.9146 21.3611 18.9319 28.5097 21.9941 35.7642C24.032 36.2365 24.4806 36.6946 24.7654 38.9467C24.9005 40.0107 24.9753 41.0813 24.9894 42.1532C25.0133 44.0983 24.1857 45 22.2219 44.9773C18.847 44.9381 15.4737 44.7628 12.0989 44.6853C10.7516 44.6545 9.39973 44.6968 8.05375 44.772C7.04841 44.8281 6.47657 44.5703 6.39569 43.6036C6.21245 41.7658 6.14818 39.918 6.20325 38.072C6.27424 36.5339 7.27415 35.7835 8.92343 35.6776C9.44659 35.6437 9.9736 35.6606 10.4988 35.6579C11.0197 35.6556 11.5406 35.6579 12.247 35.6579C11.8705 34.3235 11.5632 33.0913 11.1747 31.8843C9.78188 27.5573 8.36151 23.2387 6.95106 18.9171C6.90602 18.7765 6.84224 18.6406 6.80595 18.498C6.55137 17.4958 6.54663 16.3181 5.97795 15.5405C5.45681 14.8278 4.29081 14.6022 3.47407 14.0657C-0.791489 11.2634 -1.06186 4.53894 2.94258 1.3729C5.48451 -0.637044 10.0081 -0.417208 12.7661 1.88232C13.3209 2.32281 13.808 2.84039 14.2119 3.41882C14.3537 3.67565 14.572 3.88343 14.8373 4.01413C15.1026 4.14487 15.4023 4.19224 15.6958 4.14988C20.1078 3.8452 24.5244 3.59692 28.9325 3.24629C31.5961 3.03443 31.5912 2.96647 32.5431 5.40944C33.8598 5.25979 35.1872 5.13233 36.5048 4.93846C36.756 4.90138 37.0108 4.63598 37.1899 4.41704C37.9191 3.52563 38.6262 2.61603 39.3303 1.70422C40.2472 0.51548 41.0629 0.288083 42.4607 0.88878C43.1899 1.1822 43.9005 1.51836 44.5887 1.89544C45.3968 2.36289 45.6653 3.10994 45.3694 3.76082C45.0765 4.40482 44.323 4.70883 43.4408 4.4663C42.9684 4.34653 42.5184 4.15384 42.1071 3.89538C41.4635 3.46723 41.0258 3.62067 40.5895 4.1805C40.2805 4.55275 39.9486 4.90571 39.5957 5.23736C38.4347 6.39633 38.3712 7.47315 39.3564 8.79046C40.0684 9.74223 40.7594 10.7087 41.4295 11.69C41.7786 12.2008 42.1696 12.3129 42.7662 12.1213C43.3999 11.8945 44.0642 11.763 44.7377 11.7311C45.0982 11.7278 45.7048 12.0551 45.7631 12.3249C45.8417 12.6889 45.62 13.3316 45.3144 13.5205C44.3227 14.1162 43.286 14.6355 42.2129 15.0737C41.3118 15.4548 40.5802 15.0071 40.0656 14.3042C39.1443 13.0471 38.2277 11.7791 37.4296 10.4462C37.0667 9.84106 36.6709 9.61988 36.0101 9.61721C35.26 9.63189 34.5099 9.58737 33.767 9.48397C32.9723 9.35364 32.6049 9.70606 32.3203 10.3587C31.7241 11.7271 31.6754 11.6822 30.1334 11.6933C28.0344 11.7087 25.9352 11.8945 23.8376 11.871C21.3657 11.843 18.8934 11.6996 16.4249 11.5379C15.7591 11.4935 15.327 11.5601 14.9282 12.1626C14.4212 12.9296 13.7536 13.5943 13.0081 14.477ZM13.5754 8.36384C13.5013 4.81365 10.8627 2.30336 7.32372 2.41662C4.47289 2.50789 2.45027 4.72615 2.49015 7.71588C2.53183 10.8279 4.77639 13.0504 7.9244 12.9458C11.432 12.8297 13.8685 10.2719 13.5754 8.36384ZM8.38179 15.4728C8.38145 15.6356 8.39858 15.798 8.43294 15.9573C9.01694 17.592 9.62911 19.2168 10.1967 20.8568C11.8252 25.5629 13.4285 30.2774 15.0726 34.9779C15.1852 35.2969 15.5284 35.7307 15.8062 35.7632C16.6786 35.865 17.5713 35.8004 18.5604 35.8004L10.7279 15.0433L8.38179 15.4728ZM16.1894 9.78354L30.2574 9.39404C30.1566 8.91061 30.0796 8.55995 30.0111 8.20773C29.9336 7.80936 29.8586 7.41032 29.7914 7.01012C29.5931 5.8276 29.5949 5.82672 28.372 5.83092C24.6634 5.84411 20.9548 5.85738 17.2464 5.87071C16.7771 5.87247 16.3075 5.87071 15.8298 5.87071C15.9466 7.14427 16.054 8.31167 16.1894 9.78354ZM8.82586 41.9633H21.7276V38.4567H9.03856C8.96308 39.6954 8.89483 40.8231 8.82586 41.9633Z" fill="black"/>
            <path d="M7.61041 10.1782C6.36378 10.1611 5.28858 9.512 5.01011 8.6055C4.68025 7.53311 5.13537 6.33862 6.15918 5.59182C8.00269 4.24585 9.90698 4.72461 10.5126 6.68637C11.0775 8.51956 9.67605 10.2066 7.61041 10.1782Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_188_80">
            <rect width="46" height="45" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        ,
        service:'Building Automation',
        servicecontent: 'Our Building Automation services ensure better integration for a comfortable and energy-efficient environment.',
        servicecontentfull : 'Most, if not all, buildings today have a building automation system (BAS). Some buildings even have multiple system platforms. Most times those systems do not work together to provide a comfortable, energy efficient building environment. Let us come to your facility, review what is in place; chances are the system doesn’t meet your needs today as it did the day it was installed. Our engineers will work with you and your team to make the necessary changes to your system to enhance its performance.'
    },
    {
        id:2,
        icon:
        <svg width="27" height="55" viewBox="0 0 27 55" fill="none" xmlns="http://www.w3.org/2000/svg"  className="svgds-1">
        <path d="M25.5312 1.71875H4.90625L1.46875 32.6562H8.34375L4.90625 53.2812L25.5312 18.9062H18.6562L25.5312 1.71875Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
        </svg>
        ,
        service:'Energy Efficiency ',
        servicecontent: 'Our expert engineers achieve up to 25% electrical consumption reduction, ensuring a compelling ROI for your business.',
        servicecontentfull:'Energy efficiency goes far beyond adding or modifying any form of automation. Our engineers look at everything from the building itself to insulation to the equipment to lighting to sequence of operations. Our experience has enabled our clients to reduce their electrical consumption by 15-20% with one client achieving a 25% reduction in their electrical consumption. Give our engineering team an opportunity to develop an energy reduction initiative that provides you with a significant return on investment (ROI).',
    },
    {
        id:3,
        icon:
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.1406 41.0575V34.5667L50.936 33.746C50.6851 32.9339 50.3611 32.1493 49.9692 31.4042L51.6536 28.5605L47.0645 23.9706L44.22 25.6558C43.4758 25.2631 42.6912 24.9391 41.8791 24.6882L41.0575 21.4844H34.5666L33.7459 24.689C32.9338 24.94 32.1492 25.2639 31.405 25.6567L28.5605 23.9714L28.3594 24.1743V21.4844H25.7812C25.0568 21.4844 24.3607 21.1768 23.8726 20.6396C23.3776 20.0957 23.1447 19.3901 23.2152 18.6511C23.3398 17.3491 24.5317 16.3282 25.9291 16.3282H28.3594V8.59379C28.3594 7.17238 27.2027 6.01566 25.7812 6.01566H18.9062V5.3041C18.9062 3.0302 17.203 1.08715 15.0288 0.880039C13.8188 0.761446 12.613 1.16363 11.7193 1.9766C10.8255 2.78871 10.3125 3.94887 10.3125 5.15629V6.01566H3.4375C2.01609 6.01566 0.859375 7.17238 0.859375 8.59379V16.3282H3.28969C4.68703 16.3282 5.87898 17.3491 6.00359 18.6502C6.07406 19.3893 5.84117 20.0957 5.34617 20.6388C4.85805 21.1768 4.16195 21.4844 3.4375 21.4844H0.859375V29.2188C0.859375 30.6402 2.01609 31.7969 3.4375 31.7969H12.0312V29.3666C12.0312 27.9693 13.0513 26.7764 14.3533 26.6527C15.0941 26.59 15.7996 26.816 16.3427 27.311C16.8798 27.7982 17.1875 28.4935 17.1875 29.2188V31.7969H25.4727C25.1668 32.4251 24.897 33.0731 24.689 33.7468L21.4844 34.5675V41.0584L24.689 41.8791C24.9399 42.6912 25.2639 43.4758 25.6558 44.2209L23.9714 47.0646L28.5605 51.6545L31.405 49.9693C32.1492 50.362 32.9338 50.686 33.7459 50.9369L34.5675 54.1407H41.0584L41.8791 50.9361C42.6912 50.6851 43.4758 50.3611 44.22 49.9684L47.0645 51.6536L51.6536 47.0637L49.9692 44.22C50.362 43.4758 50.6851 42.6912 50.936 41.8782L54.1406 41.0575ZM17.4995 26.0391C16.6057 25.2261 15.3974 24.8214 14.19 24.9425C12.0158 25.1496 10.3125 27.0927 10.3125 29.3666V30.0782H3.4375C2.96398 30.0782 2.57812 29.6932 2.57812 29.2188V23.2032H3.4375C4.64578 23.2032 5.80422 22.6901 6.61805 21.7955C7.43016 20.9018 7.83063 19.6961 7.71461 18.4869C7.50664 16.3127 5.56359 14.6094 3.28969 14.6094H2.57812V8.59379C2.57812 8.11941 2.96398 7.73441 3.4375 7.73441H12.0312V5.15629C12.0312 4.43098 12.3389 3.73574 12.876 3.24762C13.42 2.75348 14.1238 2.52402 14.8655 2.58934C16.1674 2.71395 17.1875 3.90676 17.1875 5.3041V7.73441H25.7812C26.2548 7.73441 26.6406 8.11941 26.6406 8.59379V14.6094H25.9291C23.6552 14.6094 21.7121 16.3127 21.5041 18.4878C21.389 19.6961 21.7886 20.9026 22.6007 21.7964C23.4145 22.6901 24.573 23.2032 25.7812 23.2032H26.6406V25.893L23.9723 28.5614L24.8703 30.0782H18.9062V29.2188C18.9062 28.0114 18.3932 26.8512 17.4995 26.0391ZM49.5473 40.4594L49.4166 40.9441C49.1451 41.953 48.7472 42.9155 48.2341 43.805L47.9832 44.2407L49.494 46.7913L46.7913 49.4949L44.2406 47.9832L43.8058 48.2342C42.9155 48.7472 41.9521 49.1451 40.9432 49.4167L40.4585 49.5473L39.7237 52.4219H35.9021L35.1665 49.5473L34.6818 49.4167C33.6729 49.1451 32.7104 48.7472 31.8192 48.2342L31.3844 47.9832L28.8337 49.4949L26.131 46.7913L27.6418 44.2407L27.3909 43.805C26.8778 42.9155 26.4799 41.953 26.2084 40.9441L26.0777 40.4594L23.2031 39.7238V35.9021L26.0777 35.1665L26.2084 34.6818C26.4799 33.6729 26.8778 32.7104 27.3909 31.821L27.6418 31.3853L26.131 28.8347L28.8337 26.1311L31.3844 27.6427L31.8192 27.3918C32.7095 26.8787 33.6729 26.4808 34.6818 26.2093L35.1665 26.0786L35.9013 23.2032H39.7229L40.4585 26.0778L40.9432 26.2084C41.9521 26.48 42.9146 26.8778 43.8058 27.3909L44.2406 27.6418L46.7913 26.1302L49.494 28.8338L47.9832 31.3844L48.2341 31.8201C48.7472 32.7096 49.1451 33.6721 49.4166 34.681L49.5473 35.1657L52.4219 35.9013V39.7229L49.5473 40.4594Z" fill="black"/>
        <path d="M37.8125 30.9375C34.0218 30.9375 30.9375 34.0218 30.9375 37.8125C30.9375 41.6032 34.0218 44.6875 37.8125 44.6875C39.3078 44.6875 40.7344 44.2088 41.9375 43.3039L40.9045 41.9306C40.0013 42.6095 38.9323 42.9688 37.8125 42.9688C34.9688 42.9688 32.6562 40.6562 32.6562 37.8125C32.6562 34.9688 34.9688 32.6562 37.8125 32.6562C40.6562 32.6562 42.9688 34.9688 42.9688 37.8125C42.9688 38.9323 42.6104 40.0013 41.9306 40.9054L43.3048 41.9375C44.2088 40.7335 44.6875 39.3078 44.6875 37.8125C44.6875 34.0218 41.6032 30.9375 37.8125 30.9375Z" fill="black"/>
        <path d="M37.8125 27.5C32.126 27.5 27.5 32.126 27.5 37.8125C27.5 43.499 32.126 48.125 37.8125 48.125C43.499 48.125 48.125 43.499 48.125 37.8125C48.125 32.126 43.499 27.5 37.8125 27.5ZM37.8125 46.4062C33.0739 46.4062 29.2188 42.5511 29.2188 37.8125C29.2188 33.0739 33.0739 29.2188 37.8125 29.2188C42.5511 29.2188 46.4062 33.0739 46.4062 37.8125C46.4062 42.5511 42.5511 46.4062 37.8125 46.4062Z" fill="black"/>
        <path d="M46.4062 6.01562H44.6875V7.73438H46.4062V6.01562Z" fill="black"/>
        <path d="M46.4062 9.45312H44.6875V11.1719H46.4062V9.45312Z" fill="black"/>
        <path d="M48.125 7.73438H46.4062V9.45312H48.125V7.73438Z" fill="black"/>
        <path d="M44.6875 7.73438H42.9688V9.45312H44.6875V7.73438Z" fill="black"/>
        <path d="M37.8125 12.8906H36.0938V14.6094H37.8125V12.8906Z" fill="black"/>
        <path d="M37.8125 16.3281H36.0938V18.0469H37.8125V16.3281Z" fill="black"/>
        <path d="M39.5312 14.6094H37.8125V16.3281H39.5312V14.6094Z" fill="black"/>
        <path d="M36.0938 14.6094H34.375V16.3281H36.0938V14.6094Z" fill="black"/>
        <path d="M49.8438 16.3281H48.125V18.0469H49.8438V16.3281Z" fill="black"/>
        <path d="M49.8438 19.7656H48.125V21.4844H49.8438V19.7656Z" fill="black"/>
        <path d="M51.5625 18.0469H49.8438V19.7656H51.5625V18.0469Z" fill="black"/>
        <path d="M48.125 18.0469H46.4062V19.7656H48.125V18.0469Z" fill="black"/>
        <path d="M33.5156 2.57812H31.7969V4.29688H33.5156V2.57812Z" fill="black"/>
        <path d="M33.5156 6.01562H31.7969V7.73438H33.5156V6.01562Z" fill="black"/>
        <path d="M35.2344 4.29688H33.5156V6.01562H35.2344V4.29688Z" fill="black"/>
        <path d="M31.7969 4.29688H30.0781V6.01562H31.7969V4.29688Z" fill="black"/>
        <path d="M17.1875 40.3906H15.4688V42.1094H17.1875V40.3906Z" fill="black"/>
        <path d="M17.1875 43.8281H15.4688V45.5469H17.1875V43.8281Z" fill="black"/>
        <path d="M18.9062 42.1094H17.1875V43.8281H18.9062V42.1094Z" fill="black"/>
        <path d="M15.4688 42.1094H13.75V43.8281H15.4688V42.1094Z" fill="black"/>
        <path d="M8.59375 35.2344H6.875V36.9531H8.59375V35.2344Z" fill="black"/>
        <path d="M8.59375 38.6719H6.875V40.3906H8.59375V38.6719Z" fill="black"/>
        <path d="M10.3125 36.9531H8.59375V38.6719H10.3125V36.9531Z" fill="black"/>
        <path d="M6.875 36.9531H5.15625V38.6719H6.875V36.9531Z" fill="black"/>
    </svg>
        ,
        service:'Process Automation',
        servicecontent: 'Boost productivity with custom Process Automation. Achieve 20% performance improvement for your unique systems.',
        servicecontentfull:'Process Automation always presents unique opportunities for owners. No two production lines are exactly alike; it’s as if they have a personality of their own. TerraOne has had fortune of working with clients and engineers to automate concept systems that no one had ever automated before and had them operating a 20% better than the original design. We can do the same thing for your systems as well.',
    },
    {
        id:4,
        icon:<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgds-1">
        <g clip-path="url(#clip0_188_112)">
        <path d="M12.2214 30.4503C16.9651 28.7222 21.964 27.8389 27.0004 27.8389C32.0365 27.8389 37.0353 28.7221 41.7787 30.45" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.78122 20.8357C13.2159 18.2221 20.0777 16.8796 27.0025 16.8796C33.9255 16.8796 40.7856 18.2214 47.2189 20.8337" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.36804 11.2582C9.47229 7.73575 18.1892 5.92017 26.9967 5.92017C35.8066 5.92017 44.5259 7.73675 52.632 11.2611" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27.0001 48.0799C30.0211 48.0799 32.4701 45.6301 32.4701 42.6081C32.4701 39.5861 30.0211 37.1362 27.0001 37.1362C23.979 37.1362 21.53 39.5861 21.53 42.6081C21.53 45.6301 23.979 48.0799 27.0001 48.0799Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_188_112">
        <rect width="54" height="54" fill="white"/>
        </clipPath>
        </defs>
    </svg>
        ,
        service:'Network Design',
        servicecontent: 'Seamless automation with advanced network designs. Fast, reliable connections tailored to your policies.',
        servicecontentfull:'Automation systems rely on robust and stable networks to function properly. Our engineers are dedicated to providing a network with state of the art technologies such as switches, cabling, and other devices to provide a fast and reliable connection to each device. Our designs will be vetted by your IT department to ensure that we comply with your network policies and rules before any construction of a new network begins.',
    },
    {
        id:5,
        icon:
        <svg width="57" height="47" viewBox="0 0 57 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.3074 36.9846C56.69 36.9846 57 36.6745 57 36.292V32.829C57 32.4465 56.69 32.1363 56.3074 32.1363H51.0233V6.88677C51.0233 3.40501 48.1908 0.57251 44.709 0.57251H41.0457C38.597 0.57251 36.471 1.97449 35.424 4.01714C34.3771 1.97449 32.251 0.57251 29.8024 0.57251H26.1389C22.6571 0.57251 19.8246 3.40501 19.8246 6.88677V15.7199L8.60958 13.9117L7.11839 2.19114C7.07434 1.84511 6.78011 1.58594 6.43131 1.58594H0.692612C0.310152 1.58594 0 1.89609 0 2.27855V13.3368V45.7351C0 46.1175 0.310152 46.4277 0.692612 46.4277H10.9636H25.1529H35.4239H39.2917H42.6639H48.9217H50.3307H52.2938C52.6764 46.4277 52.9865 46.1175 52.9865 45.7351V43.5394H56.3075C56.6901 43.5394 57.0001 43.2292 57.0001 42.8468V39.3837C57.0001 39.0012 56.6901 38.6911 56.3075 38.6911H52.9865V36.9848H56.3074V36.9846ZM55.6148 35.5994H52.9863V33.5216H55.6148V35.5994ZM34.7314 12.2596H21.2098V11.0003H34.7314V12.2596ZM36.1166 11.0003H49.6381V12.2596H36.1166V11.0003ZM38.5991 38.691H36.1165V36.9846H38.5991V38.691ZM36.1166 40.0762H38.5992V42.154H36.1166V40.0762ZM38.5991 35.5994H36.1165V33.5216H38.5991V35.5994ZM48.229 42.154H43.3565V40.0762H48.229V42.154ZM48.229 38.691H43.3565V36.9846H48.229V38.691ZM43.3565 43.5392H48.229V45.0423H43.3565V43.5392ZM48.229 35.5994H43.3565V33.5216H48.229V35.5994ZM36.1166 32.1363V18.9366V13.6449H49.6381V32.1363H36.1166ZM41.0457 1.95773H44.709C47.4269 1.95773 49.6381 4.16883 49.6381 6.88677V9.61511H36.1166V6.88677C36.1166 4.16883 38.3277 1.95773 41.0457 1.95773ZM26.1389 1.95773H29.8024C32.5202 1.95773 34.7314 4.16883 34.7314 6.88677V9.61511H21.2098V6.88677C21.2098 4.16883 23.4209 1.95773 26.1389 1.95773ZM21.2098 13.6449H34.7314V18.1233L21.2098 15.9432V13.6449ZM5.82126 2.97116L7.18404 13.6818L1.38522 12.7468V2.97116H5.82126ZM1.38522 14.1499L34.7314 19.5264V32.6575C34.7173 32.7126 34.7075 32.7694 34.7075 32.8288V36.2919C34.7075 36.3514 34.7173 36.4081 34.7314 36.4632V39.2121C34.7173 39.2672 34.7075 39.324 34.7075 39.3834V42.8465C34.7075 42.906 34.7173 42.9627 34.7314 43.0178V45.0422H25.8455V33.032C25.8455 32.6496 25.5353 32.3394 25.1529 32.3394H10.9636C10.5812 32.3394 10.271 32.6496 10.271 33.032V45.0422H1.38522V14.1499ZM11.6562 33.7248H17.3657V45.0423H11.6562V33.7248ZM18.7509 45.0423V33.7248H24.4603V45.0423H18.7509ZM36.1166 43.5392H38.5992V45.0423H36.1166V43.5392ZM39.9843 45.0423V33.7248H41.9713V45.0423H39.9843ZM51.6012 45.0423H50.3307H49.6143V33.7248H51.6012V45.0423ZM55.6148 40.0762V42.154H52.9863V40.0762H55.6148Z" fill="black"/>
        </svg>
        ,
        service:'Manufacturing Execution System',
        servicecontent: 'What is a Manufacturing Execution System (MES)? An MES improves quality control and increases uptime while also reducing inventory and other costs. ',
        servicecontentfull:'What is a Manufacturing Execution System (MES)? An MES improves quality control and increases uptime while also reducing inventory and other associated costs. A benefit to MES is improved product tracking genealogy, which is necessary for manufacturers who must meet regulatory and transparency requirements. Our experience allows us to integrate the process automation system into your enterprise resource planning (ERP).',
    },
    {
        id:6,
        icon:<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M51.0625 41.5625H34.6691C35.3756 45.4824 37.7245 48.1793 39.8953 49.875H42.75C43.4067 49.875 43.9375 50.4058 43.9375 51.0625C43.9375 51.7192 43.4067 52.25 42.75 52.25H14.25C13.5933 52.25 13.0625 51.7192 13.0625 51.0625C13.0625 50.4058 13.5933 49.875 14.25 49.875H17.1036C19.2731 48.1793 21.6244 45.4824 22.3298 41.5625H5.9375C3.31431 41.5625 1.1875 39.4357 1.1875 36.8125V9.5C1.1875 6.87681 3.31431 4.75 5.9375 4.75H51.0625C53.6857 4.75 55.8125 6.87681 55.8125 9.5V36.8125C55.8125 39.4357 53.6857 41.5625 51.0625 41.5625ZM20.6589 49.875H36.3399C34.4458 47.8776 32.7596 45.1535 32.2323 41.5625H24.7665C24.2393 45.1535 22.553 47.8776 20.6589 49.875ZM53.4375 9.5C53.4375 8.189 52.3735 7.125 51.0625 7.125H5.9375C4.6265 7.125 3.5625 8.189 3.5625 9.5V32.0625H53.4375V9.5ZM53.4375 34.4375H3.5625V36.8125C3.5625 38.1235 4.6265 39.1875 5.9375 39.1875H22.5625H34.4375H51.0625C52.3735 39.1875 53.4375 38.1235 53.4375 36.8125V34.4375ZM28.5 38C27.8433 38 27.3125 37.4692 27.3125 36.8125C27.3125 36.1558 27.8433 35.625 28.5 35.625C29.1567 35.625 29.6875 36.1558 29.6875 36.8125C29.6875 37.4692 29.1567 38 28.5 38Z" fill="black"/>
            </svg>,
        service:'Computer Maintenance ',
        servicecontent: 'No doubt there is a maintenance program in your facility, but is it working as efficiently as your automation system?',
        servicecontentfull:'No doubt there is a maintenance program in your facility, but is it working as efficiently as your automation system? Let us work with your maintenance and IT departments to connect the automation systems into your maintenance management system, improve your preventative maintenance job tasks, and, therefore, reduce your overall maintenance costs.',
    },
    {
        id:7,
        icon:<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgds-1">
        <path d="M23 1C15 1.00016 1 6.5 1 22.5M23 1C31 0.999841 45 6.5 45 22.5M23 1V45M23 1C18.8333 2.83333 10.5 9.7 10.5 22.5C10.5 35.3 18.8333 42.8333 23 45M23 1C26.5 3 36.4997 9.00925 36 22.5C35.5 36 26 43.5 23 45M1 22.5C1 38.5 15.5 45 23 45M1 22.5H45M23 45C30.5 45 45 37.7053 45 22.5" stroke="black" stroke-width="2"/>
        </svg>        ,
        service:'Industrial Internet of Things ',
        servicecontent: 'Officially, over the past 25 years, Industrial Internet of Things (IIoT) has gone through four (4) revisions, and more are certainly to come. ',
        servicecontentfull:'Officially, over the past 25 years, Industrial Internet of Things (IIoT) has gone through four (4) revisions, and more are certainly to come. Don’t worry, our engineers have the expertise to develop a system that produces, and details statistics dynamically. Have your automation system work for you and provide you with the most accurate information possible.',
    },{
        id:8,
        icon:
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_231_454)">
            <path d="M6.11972 3.4465C8.55948 5.4999 11.1377 6.79374 14.0401 8.04242C15.3655 8.61262 15.5689 8.45624 14.9623 9.62399C14.619 10.2847 13.7626 10.8652 13.2344 11.4162C11.8551 12.8553 10.5147 14.3151 9.26196 15.8668C9.85349 15.8668 10.445 15.8668 11.0365 15.8668C9.02713 14.1917 7.11988 12.3898 5.45192 10.3688C3.79775 8.3646 4.13559 7.36614 5.69889 5.56386C6.49996 4.64033 7.34012 3.79954 8.27336 3.01021C9.50816 1.96582 7.72537 0.19821 6.49879 1.23564C4.44931 2.96908 0.900209 5.95168 1.68513 8.99586C2.5546 12.368 6.72969 15.5305 9.26196 17.6413C9.7393 18.0392 10.5807 18.2059 11.0365 17.6413C12.7079 15.5712 14.5546 13.6781 16.3926 11.7582C17.2672 10.8447 18.8198 9.70465 18.4522 8.22618C18.1468 6.99782 16.6418 6.46534 15.6065 6.00121C12.8017 4.74373 10.2713 3.67255 7.89429 1.67193C6.6661 0.638248 4.88199 2.40478 6.11972 3.4465Z" fill="black"/>
            <path d="M44.8374 2.95464C40.8906 6.81281 32.231 13.7512 39.1902 19.3829C45.6286 24.5931 51.8444 15.6142 55.6852 11.647C54.9861 11.4624 54.287 11.2778 53.5879 11.0933C55.4605 17.9268 55.4499 26.1708 46.0766 26.6214C42.9931 26.7696 38.9368 25.559 35.9853 26.564C33.6953 27.3437 32.2017 29.8795 30.6466 31.6434C27.7398 34.9407 24.833 38.2379 21.9261 41.5351C19.2872 44.5284 16.7469 47.6928 13.763 50.3533C12.5028 51.548 11.125 52.5771 9.62948 53.4404C4.96998 51.5503 3.78778 49.7429 6.08287 48.018C7.10408 46.087 10.0424 44.156 11.6132 42.6239C18.4602 35.9454 25.3072 29.2669 32.1542 22.5884C32.4711 22.2793 32.5983 21.7929 32.4769 21.3675C31.1925 16.8663 30.9272 11.3167 34.2068 7.67291C38.1083 3.33811 42.6174 2.98775 47.9935 3.51487C47.6977 2.80084 47.402 2.08681 47.1062 1.37278C46.2168 1.98226 45.3273 2.59175 44.4379 3.20124C43.0294 3.99182 44.2931 6.16045 45.7045 5.36821C47.4686 4.37805 47.3341 4.45098 48.8808 3.14734C49.7981 2.37418 48.9646 1.10047 47.9935 1.00525C41.0103 0.320559 35.5184 1.34678 31.2034 7.32936C29.395 9.83657 29.1331 12.1059 29.1528 15.1742C29.1605 16.3841 29.3667 17.6299 29.3422 18.8253C29.2884 21.4549 28.8508 21.9612 27.2195 23.8962C20.678 31.6555 12.3103 38.3194 5.09835 45.4729C2.21358 48.3343 -1.82891 52.7852 3.21654 55.9782C8.11941 59.0809 13.6783 53.995 16.9726 50.7536C23.3844 44.4448 28.3323 36.2558 35.1044 30.3744C39.7939 26.3018 48.083 31.3647 53.4062 26.9388C58.3705 22.8112 57.5187 15.9394 56.0079 10.4261C55.7613 9.5261 54.57 9.19133 53.9106 9.87242C52.4421 11.3893 49.1007 16.3911 47.0006 16.978C44.9343 14.7995 42.8679 12.6211 40.8015 10.4427C41.1482 10.0926 41.495 9.74247 41.8417 9.39237C42.6129 7.94453 45.4337 5.88097 46.6119 4.7292C47.7688 3.5983 45.9936 1.82435 44.8374 2.95464Z" fill="black"/>
            <path d="M13.45 14.8597C15.6857 16.2468 17.029 18.5035 18.6302 20.5224C20.3692 22.715 22.3187 24.7022 24.4322 26.5338C25.6474 27.587 27.4299 25.8193 26.2067 24.7592C23.7734 22.6504 21.5932 20.332 19.6543 17.7604C18.1979 15.8287 16.8019 13.9865 14.7166 12.6927C13.3404 11.8389 12.0788 14.009 13.45 14.8597Z" fill="black"/>
            <path d="M38.868 32.4187C42.3723 35.554 46.1757 38.6892 48.995 42.4501C50.0202 43.8177 51.1292 44.9249 52.2515 46.2028C54.4235 48.676 55.1077 49.7374 53.047 52.3949C52.4398 54.436 51.2426 55.0733 49.4554 54.3068C47.9545 54.4541 46.7108 53.9433 45.7242 52.7743C42.2971 50.0409 39.1847 46.7555 36.3232 43.4463C35.6289 42.6434 34.7565 41.8057 34.2038 40.8987C32.8026 38.599 33.5561 38.6028 35.042 37.1534C36.7905 35.4479 38.6037 33.8189 40.4535 32.2243C41.6789 31.168 39.8971 29.3996 38.679 30.4497C35.7959 32.935 33.0506 35.5316 30.4089 38.272C30.0597 38.6341 29.8792 39.3504 30.2127 39.7926C34.3808 45.3204 39.1917 51.3783 44.9383 55.3537C47.9055 57.4064 51.8346 58.0768 54.807 55.5202C57.7305 53.0057 57.8455 48.7768 55.505 45.8712C51.0887 40.3887 45.919 35.365 40.6426 30.6441C39.4422 29.57 37.6614 31.339 38.868 32.4187Z" fill="black"/>
            <path d="M31.8592 33.2359C32.5663 33.8925 33.2733 34.5492 33.9803 35.2058C35.1626 36.3038 36.9414 34.5332 35.7549 33.4312C35.0479 32.7746 34.3408 32.118 33.6338 31.4613C32.4515 30.3633 30.6727 32.134 31.8592 33.2359Z" fill="black"/>
            <path d="M49.0587 42.3745C47.8899 43.9524 46.5943 45.3388 45.3668 46.835C44.1179 48.3571 43.038 49.9307 41.6458 51.342C40.5104 52.4928 42.2838 54.2686 43.4203 53.1166C44.8845 51.6324 45.9938 49.9252 47.3569 48.3722C48.7087 46.832 49.9895 45.31 51.2257 43.6412C52.1877 42.3424 50.0105 41.0896 49.0587 42.3745Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_231_454">
            <rect width="58" height="58" fill="white"/>
            </clipPath>
            </defs>
            </svg>,
        service:'System Validation',
        servicecontent: 'Because of our experiences in the pharma and food & beverage industries',
        servicecontentfull:'Because of our experiences in the pharma and food & beverage industries, we have the skill set to write and execute a validation sequence to ensure that the not only the sequence of operation is being followed, but the submitted devices, controllers, and other equipment have been installed correctly.',  
    },
    {
        id:9,
        icon:
        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.0781 19.0625V55.2812C39.0781 55.534 38.9777 55.7765 38.799 55.9552C38.6202 56.134 38.3778 56.2344 38.125 56.2344H13.3438C13.091 56.2344 12.8485 56.134 12.6698 55.9552C12.491 55.7765 12.3906 55.534 12.3906 55.2812V13.3438C12.3906 13.091 12.491 12.8485 12.6698 12.6698C12.8485 12.491 13.091 12.3906 13.3438 12.3906H27.6406V10.4844H13.3438C12.5854 10.4844 11.8581 10.7856 11.3219 11.3219C10.7856 11.8581 10.4844 12.5854 10.4844 13.3438V55.2812C10.4844 56.0396 10.7856 56.7669 11.3219 57.3031C11.8581 57.8394 12.5854 58.1406 13.3438 58.1406H38.125C38.8834 58.1406 39.6106 57.8394 40.1469 57.3031C40.6831 56.7669 40.9844 56.0396 40.9844 55.2812V19.0625H39.0781Z" fill="black"/>
        <path d="M45.75 2.85938H34.3125C33.0486 2.85938 31.8364 3.36147 30.9427 4.25519C30.049 5.14892 29.5469 6.36108 29.5469 7.625V20.9688C29.5465 21.1438 29.5943 21.3155 29.6851 21.4651C29.7759 21.6148 29.9062 21.7365 30.0616 21.817C30.1981 21.8842 30.3479 21.9201 30.5 21.9219C30.6986 21.9206 30.8919 21.8573 31.0528 21.7408L37.4769 17.1562H45.75C47.0139 17.1562 48.2261 16.6542 49.1198 15.7604C50.0135 14.8667 50.5156 13.6545 50.5156 12.3906V7.625C50.5156 6.36108 50.0135 5.14892 49.1198 4.25519C48.2261 3.36147 47.0139 2.85938 45.75 2.85938ZM36.2188 11.4375C36.0302 11.4375 35.846 11.3816 35.6892 11.2769C35.5325 11.1721 35.4103 11.0233 35.3382 10.8491C35.266 10.675 35.2472 10.4833 35.2839 10.2984C35.3207 10.1135 35.4115 9.94371 35.5448 9.81041C35.6781 9.67712 35.8479 9.58634 36.0328 9.54956C36.2177 9.51279 36.4093 9.53166 36.5835 9.6038C36.7577 9.67594 36.9065 9.79811 37.0112 9.95485C37.116 10.1116 37.1719 10.2959 37.1719 10.4844C37.1719 10.7372 37.0715 10.9796 36.8927 11.1583C36.714 11.3371 36.4715 11.4375 36.2188 11.4375ZM40.0313 11.4375C39.8427 11.4375 39.6585 11.3816 39.5017 11.2769C39.345 11.1721 39.2228 11.0233 39.1507 10.8491C39.0785 10.675 39.0597 10.4833 39.0964 10.2984C39.1332 10.1135 39.224 9.94371 39.3573 9.81041C39.4906 9.67712 39.6604 9.58634 39.8453 9.54956C40.0302 9.51279 40.2218 9.53166 40.396 9.6038C40.5702 9.67594 40.719 9.79811 40.8237 9.95485C40.9285 10.1116 40.9844 10.2959 40.9844 10.4844C40.9844 10.7372 40.884 10.9796 40.7052 11.1583C40.5265 11.3371 40.284 11.4375 40.0313 11.4375ZM43.8438 11.4375C43.6552 11.4375 43.471 11.3816 43.3142 11.2769C43.1575 11.1721 43.0353 11.0233 42.9632 10.8491C42.891 10.675 42.8722 10.4833 42.9089 10.2984C42.9457 10.1135 43.0365 9.94371 43.1698 9.81041C43.3031 9.67712 43.4729 9.58634 43.6578 9.54956C43.8427 9.51279 44.0343 9.53166 44.2085 9.6038C44.3827 9.67594 44.5315 9.79811 44.6362 9.95485C44.741 10.1116 44.7969 10.2959 44.7969 10.4844C44.7969 10.7372 44.6965 10.9796 44.5177 11.1583C44.339 11.3371 44.0965 11.4375 43.8438 11.4375Z" fill="black"/>
        <path d="M35.9423 36.8382L31.7486 32.6445C32.2508 31.9106 32.4806 31.0242 32.3983 30.1388C32.316 29.2533 31.9268 28.4245 31.298 27.7957C30.6692 27.1669 29.8404 26.7776 28.9549 26.6954C28.0695 26.6131 27.1831 26.8429 26.4492 27.3451L22.4652 23.361C22.3766 23.2717 22.2711 23.2008 22.155 23.1524C22.0388 23.104 21.9143 23.0791 21.7884 23.0791C21.6626 23.0791 21.538 23.104 21.4219 23.1524C21.3057 23.2008 21.2003 23.2717 21.1117 23.361C19.2799 25.1931 18.1913 27.6385 18.0558 30.2257C17.9203 32.8128 18.7474 35.3586 20.3778 37.372L17.995 39.7548C17.4586 40.2905 17.1569 41.0173 17.1562 41.7754V53.3749H19.0625V41.7754C19.066 41.5231 19.1647 41.2813 19.3389 41.0987L21.7122 38.7349C23.7169 40.4525 26.2957 41.3506 28.9337 41.2499C31.5716 41.1492 34.0744 40.0571 35.9423 38.1917C36.0317 38.1031 36.1026 37.9976 36.151 37.8815C36.1994 37.7653 36.2243 37.6408 36.2243 37.5149C36.2243 37.3891 36.1994 37.2645 36.151 37.1484C36.1026 37.0322 36.0317 36.9268 35.9423 36.8382ZM28.527 39.3545C26.9138 39.3492 25.3348 38.8891 23.9713 38.027C22.6077 37.165 21.5149 35.9359 20.8182 34.4808C20.1216 33.0258 19.8493 31.4038 20.0327 29.8011C20.2161 28.1983 20.8478 26.6798 21.8552 25.4198L25.7344 29.3371C25.8406 29.4296 25.9651 29.4986 26.0997 29.5397C26.2344 29.5807 26.3762 29.5929 26.5159 29.5754C26.6611 29.562 26.8018 29.5177 26.9284 29.4453C27.055 29.373 27.1646 29.2743 27.2498 29.156C27.607 28.801 28.0901 28.6017 28.5938 28.6017C29.0974 28.6017 29.5805 28.801 29.9377 29.156C30.12 29.3378 30.2636 29.5547 30.3598 29.7935C30.4561 30.0323 30.5029 30.2881 30.4976 30.5455C30.4922 30.8029 30.4348 31.0566 30.3287 31.2912C30.2227 31.5258 30.0702 31.7365 29.8805 31.9106C29.7672 31.9904 29.6726 32.0941 29.6035 32.2143C29.5344 32.3344 29.4923 32.4682 29.4802 32.6063C29.4718 32.7441 29.4921 32.8822 29.5396 33.0117C29.5872 33.1413 29.6611 33.2597 29.7566 33.3593L33.8836 37.4768C32.3663 38.6985 30.4751 39.3615 28.527 39.3545Z" fill="black"/>
        </svg>
        ,
        service:'Consulting Services',
        servicecontent: 'When you need unbiased expertise to create a project, we’re the team to call.',
        servicecontentfull:'When you need unbiased expertise to create a project, we’re the team to call. We bring what few others bring to the conversation, our open ears. We listen to what your desires are, what needs that must to be met, and what all stakeholders have to say.',
    },
]

export default ServicesSliderData