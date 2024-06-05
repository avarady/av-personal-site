import React from "react";

export const projects = [
    /*{
        title: "Bayou Bingo",
        subtitle: "Solo personal project.",
        imageSrc: "/images/bayoubingo.jpg",
        description: (<>
            <p>
                <b><u>Frontend:</u></b> ReactJS, HTML, CSS, Bootstrap
                <br/>
                <b><u>Backend:</u></b> NodeJS / ExpressJS REST API, PostgreSQL, WebSockets
            </p>
            <p>
                Bayou Bingo is a web application and related Twitch channel extension meant to supplement a video game called Hunt: Showdown. 
                It includes:
            </p>
            <ul>
                <li>A geoguesser game, which can be linked with Twitch to allow users to interact with a streamer playing the game.</li>
                <li className="mt-2">A loadout randomizer for items to use in-game.</li>
                <li className="mt-2">A Bingo application allowing streamers to create, manage, and host bingo games with custom prompts.</li>
            </ul>
            <p>
                Currently in active development with ongoing feature releases.
            </p>
        </>)
    },*/
    {
        title: "Bounds",
        subtitle: "Team project; client of Zant Technologies.",
        imageSrc: "/images/bounds.jpg",
        description: (<>
            <p>
                <b><u>Frontend:</u></b> ReactJS, TypeScript, HTML, Tailwind
                <br/>
                <b><u>Backend:</u></b> Python / Django REST API, Microsoft SQL Server
                <br/>
                <b><u>Other:</u></b> ArcGIS, Powershell
            </p>
            <p>
                Bounds is a government website for accessing information on parcels of land within the state of Kansas. It provides data on landowners, tax history, crop yields, and more.
            </p>
            <p>
                Personal achievements and major functionality implemented:
            </p>
            <ul>
                <li><b>Automated Data Processing:</b> Developed PowerShell scripts to automate the download of tab-delimited text files from an FTP server, parse and insert data into a database, log operations, and remove old files.</li>
                <li className="mt-2"><b>Data Dashboard Development:</b> Created a data dashboard with filtering and search functionality, allowing users to view mortgages, farmable acreage, and other metrics compared to previous periods (month, quarter, year).</li>
            </ul>
        </>)
    },
    {
        title: "LogoLounge",
        subtitle: "Team project; client of Zant Technologies.",
        imageSrc: "/images/logolounge.jpg",
        description: (<>
            <p>
                <b><u>Frontend:</u></b> ReactJS, TypeScript, HTML, Bootstrap
                <br/>
                <b><u>Backend:</u></b> Python / Django REST API, Microsoft SQL Server
            </p>
            <p><i>
                This website is currently in development and will replace the existing production site upon completion.
            </i></p>
            <p>
            LogoLounge is a social media platform for graphic designers specializing in logos. It allows users to submit, comment on, like, save, and follow other designers' work. The new site is currently in development and will replace the existing production site upon completion.
            </p>
            <p>
                Personal achievements and major functionality implemented:
            </p>
            <ul>
                <li><b>Performance Optimization:</b> Enhanced SQL queries and API algorithms, increasing speed and responsiveness by up to 50%.</li>
                <li className="mt-2"><b>AI Integration:</b> Implemented AI-generated suggestions for logo descriptions and tags using the OpenAI API.</li>
                <li className="mt-2"><b>Payment System Development:</b> Developed payment flow and processing, including coupons, gift cards, and subscription-based services, utilizing the PayPal API for final payments.</li>
                <li className="mt-2"><b>WordPress Integration:</b> Integrated the WordPress API to embed news items from the company's blog site.</li>
                <li className="mt-2"><b>Cloud Storage Integration:</b> Integrated Azure Blob Storage for uploading and retrieving logo and avatar images.</li>
                <li  className="mt-2"><b>Comprehensive Feature Development:</b> Designed and implemented both back-end and front-end features for user interactions, including following users, tracking logo views, searching logos, liking and commenting on logos, and saving logos to collections.</li>
            </ul>
        </>)
    },
    /*{
        title: "Prosper U",
        subtitle: "Team project; client of Zant Technologies.",
        imageSrc: "",
        description: (<>
            <p>
                <b><u>Frontend:</u></b> 
                <br/>
                <b><u>Backend:</u></b> 
            </p>
            <p>
                <a href="https://myprosperu.com/" target="_blank" rel="noreferrer">https://myprosperu.com/</a>
            </p>
            <p>
                Personal achievements and major functionality implemented:
            </p>
            <ul>
                <li></li>
                <li className="mt-2"></li>
                <li className="mt-2"></li>
                <li className="mt-2"></li>
            </ul>
        </>)
    },*/
    /*{
        title: "PK / intelliSPEC",
        subtitle: "Team project; client of Zant Technologies.",
        imageSrc: "",
        description: (<>
            <p>
                <b><u>Frontend:</u></b> 
                <br/>
                <b><u>Backend:</u></b> 
            </p>
            <p>
                <a href="https://pktechnology.com/intellispec/" target="_blank" rel="noreferrer">https://pktechnology.com/intellispec/</a>
            </p>
            <p>
                Personal achievements and major functionality implemented:
            </p>
            <ul>
                <li></li>
                <li className="mt-2"></li>
                <li className="mt-2"></li>
                <li className="mt-2"></li>
            </ul>
        </>)
    },*/
    {
        title: "ButterMove",
        subtitle: "Team project; client of Zant Technologies.",
        imageSrc: "/images/buttermove.jpg",
        description: (<>
            <p>
                <b><u>Frontend:</u></b> Preact, HTML, Bootstrap
                <br/>
                <b><u>Backend:</u></b> Go, GraphQL
            </p>
            <p>
                <a href="https://www.buttermove.com/" target="_blank" rel="noreferrer">https://www.buttermove.com/</a>
            </p>
            <p>
                Buttermove is a comprehensive platform that connects movers with moving companies. It features booking, customer feedback, and a unique "ButterScore" reflecting mover trustworthiness. 
            </p>
            <p>
                Personal achievements and major functionality implemented:
            </p>
            <ul>
                <li><b>Payment Processing:</b> Implemented payment holds and processing using the Stripe API.</li>
                <li className="mt-2"><b>User Account Registration:</b> Developed a secure registration system with two-factor authentication (2FA) utilizing the Twilio API.</li>
                <li className="mt-2"><b>Data Dashboards:</b> Created detailed data dashboards for ButterMove administrators, featuring extensive statistics, calculations, graphs, and filtering options.</li>
                <li className="mt-2"><b>Google Maps Integration:</b> Integrated the Google Maps API to display move information seamlessly within the platform.</li>
            </ul>
        </>)
    },
    {
        title: "Personal Portfolio",
        subtitle: "Solo personal project.",
        imageSrc: "/images/personalsite.jpg",
        description: (<>
            <p>
                <b><u>Frontend:</u></b> ReactJS, TypeScript, HTML, CSS, Bootstrap
                <br/>
                <b><u>Backend:</u></b> None
            </p>
            <p>
                This website was created from scratch.
            </p>
            <p>
                Implemented data storage in frontend code due to its manageable size, avoiding the cost and complexity of hosting a backend server.
            </p>
        </>)
    },
    /*{
        title: "Vivid",
        subtitle: "Team project. Video was also made by me.",
        imageSrc: "/images/vivid.jpg",
        description: (<>
            <p>
                <a href="https://www.youtube.com/watch?v=EcEJwZomM7Q" target="_blank" rel="noreferrer">Click here for YouTube video.</a>
            </p>
            <p>
                Vivid was a senior project
            </p>
        </>)
    }*/
];