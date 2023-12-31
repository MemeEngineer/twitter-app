
const React = require('react')

function DefaultLayout({title, children}){
    return(
        <html>
            <head>
                <title>{title}</title>
                {/* <script src="https://cdn.tailwindcss.com"></script> */}
                <link rel="stylesheet" href="/css/app.css"></link>
            </head>
            <body className= 'flex flex-col items-center'>
                <h1>{title}</h1>
                {children}
            </body>
        </html>

    )
}

module.exports = DefaultLayout;