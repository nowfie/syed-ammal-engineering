import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6"

const navItems = {
    row1: [{
            name: 'home',
            path: '/'
        },
        {
            name: 'about',
            path: '/about'
        },
        {
            name: 'academics',
            path: '/'
        },
        {
            name: 'research',
            path: '/'
        },
        {
            name: 'updates',
            path: '/'
        },
        {
            name: 'placement',
            path: '/'
        },
        {
            name: 'alumni',
            path: '/alumni'
        },
    ],
    row2: [{
            name: 'home',
            path: '/'
        },
        {
            name: 'about',
            path: '/about'
        },
        {
            name: 'programs',
            path: '/'
        },
        {
            name: 'research',
            path: '/'
        },
        {
            name: 'events',
            path: '/'
        },
        {
            name: 'events',
            path: '/'
        },
        {
            name: 'events',
            path: '/'
        },
    ],
}

const footerLinks = {
    col1: [{
            name: 'home',
            path: '/'
        },
        {
            name: 'about',
            path: '/'
        },
        {
            name: 'programs',
            path: '/'
        },
        {
            name: 'research',
            path: '/'
        },
        {
            name: 'events',
            path: '/'
        },
    ],
    col2: [{
            name: 'tution fee',
            path: '/'
        },
        {
            name: 'faculty',
            path: '/'
        },
        {
            name: 'placement',
            path: '/'
        },
        {
            name: 'alumni',
            path: '/'
        },
        {
            name: 'facilities',
            path: '/'
        },
    ]
}

const socialLinks = [{
        icon: FaInstagram,
        path: '/'
    },
    {
        icon: FaFacebook,
        path: '/'
    },
    {
        icon: FaYoutube,
        path: '/'
    },
    {
        icon: FaTwitter,
        path: '/'
    },
]

export {
    navItems,
    footerLinks,
    socialLinks
}