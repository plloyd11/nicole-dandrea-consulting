module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        fontFamily: {
            body: ['poppins'],
            display: ['jubilat'],
        },
        extend: {
            colors: {
                primaryColor: '#743282',
                primaryColorDark: '#53245d',
                secondaryColor: '#B668A1',
                secondaryColorDark: '#8C5668',
                tertiaryColor: '#FFD722',
                tertiaryColorDark: '#D9CF3A',
                headerDark: '#202020',
                headerLight: '#404040',
                bodyCopyDark: '#4B5563',
                bodyCopyLight: '#6B7280',
            },
            zIndex: {
                '-10': '-10',
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')],
}
