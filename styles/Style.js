import { createTheme } from '@mui/material';
const customTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
    palette: {
        primary: {
            main: "#32B126",
        },
        secondary: {
            main: "#24A2E9"
        },
    },
    typography: {
        fontFamily: 'Urbanist',
        color: "#19177E",
        HomeH1: {
            fontStyle: 'normal',
            fontFamily: 'Comfortaa',
            fontSize: '3.125rem',
            fontWeight: 700,
            lineHeight: '4rem',
            letterSpacing: '5%',
            color: '#2D91C9',
            animation: 'tracking-in-contract 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both'
        },
        home_text: {//extra
            fontFamily: 'Urbanist',
            fontSize: '1.125rem',
            lineHeight: '1.625rem',
            fontWeight: 400,
            textAlign: 'center',
            letterSpacing: '0.04em',
            color: '#CBD4FF',
        },
        HomeH2: {
            fontFamily: 'Comfortaa',
            fontWeight: 700,
            lineHeight: '4.59375rem',
            fontSize: '3.4375rem',
            color: '#5748F5',
            letterSpacing: '2%'
        },
        HomeH3: {
            fontFamily: 'Comfortaa',
            fontWeight: 700,
            lineHeight: '4.625rem',
            fontSize: '2.5rem',
            color: '#5748F5',
            letterSpacing: '0.05em'
        },
        HomeH4: {
            fontFamily: 'Comfortaa',
            fontWeight: 400,
            lineHeight: '2.25rem',
            fontSize: '1.25rem',
            color: '#000000',
            letterSpacing: '0.05em'
        },
        HomeH5: {
            fontFamily: 'Comfortaa',
            fontWeight: 700,
            lineHeight: '1.75rem',
            fontSize: '1.25rem',
            color: '#FFFFFF',
            opacity: '0.75'
        },
        HomeH6: {
            fontFamily: 'Comfortaa',
            fontWeight: 400,
            lineHeight: '1.5rem',
            fontSize: '1.125rem',
            color: '#FFFFFF',
            opacity: '0.75'
        },
        HomeAccordion: {
            fontFamily: 'Comfortaa',
            fontWeight: 400,
            lineHeight: '1.546875rem',
            fontSize: '1.375rem',
            color: '#5748F5',
            letterSpacing: '1%'
        },
        HomeGlassText: {
            fontFamily: 'Comfortaa',
            fontWeight: 700,
            lineHeight: '1.75rem',
            fontSize: '1.25rem',
            letterSpacing: '0.05em',
            color: '#19177E',
            '&:hover': {
                fontSize: '1.5625rem',
            }
        },
        hgTopHeading: {
            fontSize: "2.82rem",
            lineHeight: "3.13rem",
            textTransform: "capitalize",
            fontWeight: '600',
            fontFamily: 'Comfortaa',
            color: "#19177E"
        },
        profileLogoFont: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '500',
            fontSize: '3.5vmin',
            color: "#19177E"
        },
        profileH1: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '700',
            fontSize: '1.3rem',
            lineHeight: "1.875rem",
            color: "#19177E"
        },
        profileH2: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '500',
            fontSize: '1.1rem',
            lineHeight: "1.4375rem",
            color: "#19177E"
        },
        profileH3: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '500',
            lineHeight: "1.125rem",
            fontSize: '.8375rem',
            color: '#0A5F8F'
        },
        profielH5: {
            fontFamily: 'Comfortaa',
            fontWeight: 700,
            fontSize: '.9375rem',
            lineHeight: '1rem',
            color: '#32B126'
        },
        profielH6: {
            fontFamily: 'Comfortaa',
            fontWeight: '500',
            fontSize: '.625rem',
            lineHeight: '.6855',
            color: '#074D75'
        },

        hgLink: {
            fontFamily: 'Comfortaa',
            textTransform: "capitalize",
            color: "#19177E",
            fontWeight: '700',
            fontSize: "1rem",
            lineHeight: "1.2rem",
            letterSpacing: '0.01rem'
        },
        displayh1: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.02em',
            fontWeight: '700',
            lineHeight: "1.875rem",
            fontSize: '1.5625rem',
            color: '#000000'
        },
        displayh4: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.02em',
            fontWeight: '500',
            lineHeight: "1.375rem",
            fontSize: '1.125rem',
            color: '#646464'
        },
        displayh5: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.02em',
            fontWeight: '600',
            lineHeight: "1.375rem",
            fontSize: '1.125rem',
            color: '#363636',
        },
        userStatush1: {
            fontFamily: 'Urbanist',
            fontWeight: '600',
            fontSize: '1.375rem',
            lineHeight: "1.65rem",
            letterSpacing: '0.02em',
            color: '#0C0B38'


        },
        userStatush2: {
            fontFamily: 'Urbanist',
            fontWeight: '600',
            fontSize: '1.125rem',
            lineHeight: "1.35rem",
            letterSpacing: '0.02em',
            color: '#074D75'
        },
        userStatush3: {
            fontFamily: 'Urbanist',
            fontWeight: '500',
            fontSize: '0.9375rem',
            lineHeight: "1.125rem",
            letterSpacing: '0.02em',
            color: '#394565'
        },
        userStatush4: {
            fontFamily: 'Urbanist',
            fontWeight: '500',
            fontSize: '1rem',
            lineHeight: "1.2rem",
            letterSpacing: '0.02em',
            color: '#0B1A2A'
        },
        JobCardH1: {
            fontFamily: 'Urbanist',
            fontWeight: '700',
            fontSize: '1.125rem',
            lineHeight: "1.5rem",
            color: '#143FCD'
        },
        JobCardH2: {
            fontFamily: 'Urbanist',
            fontWeight: '500',
            fontSize: '.937rem',
            lineHeight: "1.125rem",
            letterSpacing: '0.02em',
            color: '#76A5DC'
        },
        JobCardH3: {
            fontFamily: 'Urbanist',
            fontWeight: '600',
            fontSize: '.8125rem',
            lineHeight: "1rem",
            letterSpacing: '0.02em',
            color: '#143FCD'
        }

    },
    shape: {
        // borderRadius: '2.3vmin',
    }
})
export default customTheme