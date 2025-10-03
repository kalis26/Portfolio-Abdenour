import localFont from "next/font/local";

export const CalSans = localFont({
    src: [
        { path: '../public/fonts/CalSans.woff2', weight: '400' },
    ],
    display: 'swap',
});

export const Hibana = localFont({
    src: [
        { path: '../public/fonts/Hibana.woff2', weight: '300' }
    ],
    display: 'swap',
});