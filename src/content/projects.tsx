export interface IProjectItem {
  title: string;
  images: { src: string; text: string }[];
  skills: {
    front?: string[];
    back?: string[];
    other?: string[];
  };
  description: string;
  achievements: {
    title: string;
    description: string;
  }[];
}

export const projects = [
  {
    title: "Game Website",
    images: [
      {
        src: "/images/game/geoguesser.jpg",
        text: 'Users can play a Geoguesser game to guess locations in maps from the video game "Hunt: Showdown".',
      },
      {
        src: "/images/game/geoguesser2.jpg",
        text: "Statistics are tracked per user if logged in.",
      },
      {
        src: "/images/game/twitchext.jpg",
        text: "Developed a Twitch extension allowing streamers to invite their audience to participate in guessing locations. Uses WebSockets to communicate live information both ways.",
      },
      {
        src: "/images/game/account.jpg",
        text: "Users can connect their Twitch account to enable automatic connection with the Twitch extension on their channel.",
      },
      {
        src: "/images/game/loadout.jpg",
        text: "The Loadout Randomizer feature allows users to randomize the items that they bring into their game matches.",
      },
      {
        src: "/images/game/bingosettings.jpg",
        text: 'Streamers can set up bingo games to play with their audiences. It includes settings for date and time, whether or not to allow user rerolls, public or private games, etc. Users can also import prompts via CSV file. An example prompt might be "Streamer gets more than 5 kills in one match"',
      },
      {
        src: "/images/game/bingoplayer.jpg",
        text: "The player view of a bingo game. Uses WebSockets to keep list of calls up to date.",
      },
    ],
    skills: {
      front: ["ReactJS", "HTML", "CSS", "Bootstrap"],
      back: ["Node.js", "Express.js", "REST API", "Postgres"],
      other: ["AWS S3", "WebSockets", "Twitch API", "PayPal API"],
    },
    description:
      'This website was created to complement the video game "Hunt: Showdown". It features interactive tools to allow streamers to engage with their audience during live broadcasts. Official name of website withheld for privacy reasons due to association with gaming username.',
    achievements: [
      {
        title: "Comprehensive Feature Development",
        description:
          "Independently designed and implemented frontend, backend, and Twitch extension components.",
      },
      {
        title: "Twitch Integration",
        description:
          "Implemented Twitch account connectivity via Twitch API, which will automatically configure the Twitch extension on the user's channel to synchronize with their active Geoguesser session.",
      },
      {
        title: "WebSockets",
        description:
          "Engineered websocket functionality to facilitate real-time updates of information during gameplay.",
      },
      {
        title: "File Processing",
        description:
          "Developed functionality enabling CSV files to be uploaded, parsed, and imported into bingo game prompts.",
      },
    ],
  },
  {
    title: "Bounds",
    images: [
      {
        src: "/images/bounds/search.jpg",
        text: "Map uses Esri / ArcGIS. All parcels searchable by owner and/or location. Dropdowns offer suggestions as you type.",
      },
      {
        src: "/images/bounds/crophistory.jpg",
        text: "Each parcel's crop history can be seen. Values are pulled from DB and displayed in chart form. Created chart components to be used throughout the site.",
      },
      {
        src: "/images/bounds/yield.jpg",
        text: "Each parcel's yield can be seen. Values are pulled from DB and percent change is calculated.",
      },
      {
        src: "/images/bounds/ucc.jpg",
        text: "UCC search table. Joins 6 tables, collapsing 1:N relationships into JSON to be displayed in a single row. Files are PDFs served through an API call for security rather than being directly accessed from storage server. Personally implemented all necessary functionality both front and back end.",
      },
      {
        src: "/images/bounds/mra.jpg",
        text: "Mortgage rate analysis table. Estimates interest rate based on historical values if actual value is not stored in DB. Optimized query and load time.",
      },
      {
        src: "/images/bounds/financialoverview.jpg",
        text: "Financial overview dashboard. Several values involve complicated SQL queries to calculate. Optimized query and load time.",
      },
    ],
    skills: {
      front: ["ReactJS", "TypeScript", "HTML", "CSS", "Tailwind"],
      back: ["Python", "Django", "REST API", "MS SQL Server"],
      other: ["ArcGIS", "Powershell"],
    },
    description:
      "Bounds is a website for accessing information on parcels of land within the state of Kansas. It provides data on landowners, tax history, crop yields, and more. In early development.",
    achievements: [
      {
        title: "Performance Optimization",
        description:
          "Improved SQL queries and API algorithms, achieving up to 75% faster speed and responsiveness.",
      },
      {
        title: "Automated Data Processing",
        description:
          "Engineered PowerShell scripts to automate the retrieval of tab-delimited text files from an FTP server, parsing, data insertion into databases, operation logging, and deletion of obsolete files.",
      },
      {
        title: "Data Dashboard Development",
        description:
          "Designed a comprehensive data dashboard featuring filtering and search capabilities, enabling users to analyze metrics such as mortgages, farmable acreage, and comparative data across different periods.",
      },
    ],
  },
  {
    title: "LogoLounge",
    images: [
      {
        src: "/images/logolounge/main.jpg",
        text: "",
      },
      {
        src: "/images/logolounge/home.jpg",
        text: '"Fresh" page displaying most recently submitted logos. User can hover over logo to like or save directly, or click on logo to view detail modal. Implemented like and save functionality both front and back end.',
      },
      {
        src: "/images/logolounge/logodetail.jpg",
        text: "Logo detail modal. User can view details, like / save, and comment. Related logos pulled based on similar tags. Implemented comment functionality front and back end, as well as related logos query.",
      },
      {
        src: "/images/logolounge/collection.jpg",
        text: "Logo save modal. Can be saved to and removed from multiple collections. Implemented all logic and functionality for collections.",
      },
      {
        src: "/images/logolounge/news.jpg",
        text: "News page. Uses Wordpress API to pull articles from the organization's Wordpress blog site. Implemented all functionality for this page.",
      },
      {
        src: "/images/logolounge/awards.jpg",
        text: "Awards tab on profile page. Award badges are dynamically added to logos that have been featured in a book. Wrote query for user awards.",
      },
      {
        src: "/images/logolounge/checkout.jpg",
        text: "Checkout / renewal screen. Membership can be paid via PayPal, credit card, or gift card code. Implemented payment endpoints in API, PayPal connection, and gift card generation, verification, and tracking.",
      },
    ],
    skills: {
      front: ["ReactJS", "TypeScript", "HTML", "CSS", "Bootstrap"],
      back: ["Python", "Django", "REST API", "MS SQL Server"],
      other: ["OpenAI API", "Azure Blob Storage", "PayPal API", "MailChimp API", "WordPress API"],
    },
    description:
      "LogoLounge is a social media platform for graphic designers specializing in logos. It allows users to submit, comment on, like, save, and follow other designers' work. This new site is currently in development and will replace the existing production site upon completion.",
    achievements: [
      {
        title: "AI Integration",
        description:
          "Implemented AI-generated suggestions for logo descriptions and tags using the OpenAI API.",
      },
      {
        title: "Payment System Development",
        description:
          "Developed payment flow and processing, including coupons, gift cards, and subscription services, utilizing the PayPal API for secure transactions.",
      },
      {
        title: "WordPress Integration",
        description:
          "Integrated the WordPress API to dynamically embed news items from the company's blog site.",
      },
      {
        title: "Cloud Storage Integration",
        description:
          "Integrated Azure blob storage for uploading and retrieval of logo and avatar images.",
      },
      {
        title: "Comprehensive Feature Development",
        description:
          "Designed and implemented both back-end and front-end features for user interactions, including following users, tracking logo views, searching logos, liking and commenting on logos, and saving logos to collections.",
      },
      {
        title: "Performance Optimization",
        description:
          "Optimized SQL queries and API algorithms, boosting speed and responsiveness by up to 50%.",
      },
    ],
  },
  {
    title: "PK / intelliSPEC",
    images: [
      {
        src: "/images/pk/modelviewer2.jpg",
        text: "3D model viewer using Autodesk. Implemented interactability between outer website and embedded component.",
      },
      {
        src: "/images/pk/modelviewer.jpg",
        text: "Item detail. Wrote queries to pull and link to related information in right side panel.",
      },
      {
        src: "/images/pk/hierarchy.jpg",
        text: "Item list. Added several columns.",
      },
      {
        src: "/images/pk/components.jpg",
        text: "Component list, similar to item list.",
      },
      {
        src: "/images/pk/dashboard.jpg",
        text: "Dashboard showing facilities for organization.",
      },
      {
        src: "/images/pk/formedit.jpg",
        text: "Form editor. Added Anomaly Closeout item.",
      },
      {
        src: "/images/pk/formdetail.jpg",
        text: "Anomaly Closeout form item settings.",
      },
      {
        src: "/images/pk/tasks.jpg",
        text: "Tasks for user.",
      },
      {
        src: "/images/pk/task.jpg",
        text: "Task detail. Implemented display of associated forms and documents.",
      },
    ],
    skills: {
      front: [".NET", "C#", "HTML", "CSS", "JavaScript"],
      back: ["SQLite"],
      other: ["Autodesk"],
    },
    description:
      "intelliSPEC is a comprehensive suite of web and mobile software used to streamline business operations, especially for those that use complex equipment. It can load a 3D model of the facility and display details about anomalies, tasks, components of items, documents, and more. Information can be synced with a mobile application to allow employees to complete tasks and submit forms and anomalies while in the facility.",
    achievements: [
      {
        title: "Comprehensive Feature Development",
        description:
          "Designed and implemented both back-end and front-end features for user interactions, including the anomaly tracking and form submission processes.",
      },
      {
        title: "Autodesk Integration",
        description:
          "Implemented exchange of information between application and embedded Autodesk 3D model viewer, facilitating dynamic highlighting of selected items and associated anomalies in distinct colors.",
      },
      {
        title: "Mobile Application Development",
        description:
          "Project included a mobile application designed to synchronize all information for offline use, including forms that sync back to the main server once online.",
      },
    ],
  },
  {
    title: "ButterMove",
    images: [
      {
        src: "/images/buttermove/main.jpg",
        text: "Main page of ButterMove site.",
      },
      {
        src: "/images/buttermove/map.jpg",
        text: "Users can search movers by location and view on map.",
      },
      {
        src: "/images/buttermove/butterpay.jpg",
        text: "Mover account checklist. Implemented checklist functionality and several items on the checklist to be seen in detail later.",
      },
      {
        src: "/images/buttermove/profile.jpg",
        text: "Mover profile. Implemented functionality for several editable features.",
      },
      {
        src: "/images/buttermove/widget.jpg",
        text: "Implemented functionality to generate widget embed code and display preview.",
      },
      {
        src: "/images/buttermove/estimate.jpg",
        text: "Created page and form with validation, including address autocompletion using the Google Maps API.",
      },
      {
        src: "/images/buttermove/invoices.jpg",
        text: "Created queries for analytics and searchable / filterable table.",
      },
      {
        src: "/images/buttermove/estimatetoinvoice.jpg",
        text: "Created queries and functionality for entire page, including logic to determine process stage, related transactions, and related documents. Added buttons and backend functionality to allow mover to add on charges or issue a refund.",
      },
      {
        src: "/images/buttermove/onboardingops.jpg",
        text: "Implemented connection to Pipedrive API to pull data about leads and calls.",
      },
      {
        src: "/images/buttermove/forecastedrevenue.jpg",
        text: "Created all front and backend functionality and calculations for forecasted revenue page. Sample page does not have recent data, but would have cards with details for each mover that signed up for the ButterMove site, along with their stage in the onboarding process.",
      },
    ],
    skills: {
      front: ["Preact", "HTML", "CSS", "Bootstrap"],
      back: ["Go", "GraphQL"],
      other: ["Stripe API", "Twilio API", "Google Maps API"],
    },
    description:
      'Buttermove is a comprehensive platform that connects movers with moving companies. It features booking, customer feedback, and a unique "ButterScore" reflecting mover trustworthiness.',
    achievements: [
      {
        title: "Payment Processing",
        description:
          "Implemented payment holds and processing using the Stripe API.",
      },
      {
        title: "User Account Registration",
        description:
          "Developed a secure registration system with two-factor authentication (2FA) utilizing the Twilio API.",
      },
      {
        title: "Data Dashboards",
        description:
          "Created detailed data dashboards for ButterMove administrators, featuring extensive statistics, calculations, graphs, and filtering options.",
      },
      {
        title: "Google Maps Integration",
        description:
          "Integrated the Google Maps API for address autocompletion and seamless display of move information within the platform.",
      },
    ],
  },
];
