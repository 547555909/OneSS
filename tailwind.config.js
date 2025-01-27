module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["winter", "dark", "aqua", "night"],
    },
}
