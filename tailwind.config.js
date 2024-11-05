/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"],
            },
            spacing: {
                30: "28.6%",
            },
        },
    },
    plugins: [],
};
