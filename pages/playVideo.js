function getURL(nameVideo) {
    const urlPara = new URLSearchParams(window.location.search);
    return urlPara.get(nameVideo);
}

const videoSrc = getURL('videoSrc');

const videoTitles = {
    "lateNights": {
        title: "Late Nights: Bad for Health? BBC News Review",
        img: "/channelPic/bbcLearningEnglish.png",
        author: `BBC Learning English
                7.79 million subscribers`,
        tags: "#learningenglish #sleep #health",
        description: "Staying up late into the night. For some people, it is just the way they prefer to live. But it could be affecting their health. New research from the US found that 'night owls' may be more likely to develop heart disease and diabetes. It is because people who get up early burn fat for energy more easily."
    },

    "deepSeek": {
        title: "DeepSeek, TikTok, Temu: How China is taking the lead in tech - BBC World Service",
        img: "/channelPic/bbcWorldService.png",
        author: `BBC World Service
                1.27 million subscribers`,
        tags: "#WorldService #chinatechnology #deepseek",
        description: "DeepSeek, TikTok, CapCut, Shein, Temu, BYD, DJI, Huawei - Chinese technology is everywhere and in many areas the country is challenging the former high-tech powerhouses."
    },

    "americanAndEuropean": {
        title: "Why American and European Trucks Are So Different",
        img: "/channelPic/truckTropia.png",
        author: `Truck Tropia
                131N subscribers`,
        tags: "",
        description: `Why American and European Trucks Are So Different.
                
                American and European semi-trucks are very different, in America you see all the trucks with a long nose, and wheelbase, with the cabin behind the engine, whereas trucks in Europe are cab-over trucks where the cabin is above the engine.
                
                But why are they so different, and what are the advantages and disadvantages? Let's take a look at it.
                
                Share down in the comment section which you like the most and why.`
    },

    "findHope": {
        title: "How to find hope - BBC Dars, BBC World Service",
        img: "/channelPic/bbcWorldService.png",
        author: `BBC World Service
                1.27 million subscribers`,
        tags: "#WorldService #findinghope #BBCWorldService",
        description: `Hope is a powerful feeling but when you are overwhelmed with negative emotions or events it can be hard to think that anything is positive. 
                    
                    We will help you with some tools to feel hopeful about the future.
                    
                    This video is a story about finding hope, especially if you’re a young person growing up in a conflict zone - from Dars, the BBC World Service educational programme for children and young people.
                    
                    Warning: other content on this channel may include distressing footage and depictions of conflict`
    },

    "greatestAirplane": {
        title: "ALL TIME GREATEST AIRPLANE SEAT - Emirates First Class Suite",
        img: "/channelPic/caseyNeistat.png",
        author: `CaseyNeistat
                12.6 million subscribers`,
        tags: "",
        description: ""
    },

    "kimJongUn": {
        title: "How Kim Jong Un Travles",
        img: "/channelPic/fern.png",
        author: `fern
                3.07 million subscribers`,
        tags: "",
        description: `How does the North Korean leader travel?

            Music:
            Bonnie Grace - Riot in the Capital
            DaniHaDani - The Labyrinth
            Flint - Fly up High
            Wendel Scherer - Close Encounter
            Jimmy Svensson - My Darkest Hour
            Rand Aldo - Saga Melodies
            Searching Within - No Melody
            Amir Marcus - Mammoth
            Matthias Förster - Prophecy
            Inflection - No Piano
            Marco Martini - The Madrigal
            Out of Flux - Surrendered
            Jeremy Chontow - Wildfire
            Jon Bjork - Diamond Lense`
    },


    "morningRoutineTED": {
        title: "How a 10-Minute Morning Routine Can Change Your Entire Day | 🎧 Podcast and Chill | TED Talk Dailted",
        img: "/channelPic/tedTalkDaily.png",
        author: `TED Talk Daily
                3.95N subscribers`,
        tags: `#learnenglishpodcast #englishspeakingpractice #podcastandchill #jessicapodcast #englishpodcast

                #MindsetShift #VictimMentality #PodcastAndChill #SelfImprovement #TakeControl #Motivation #StopBlaming #BreakFree #Podcas`,
        description: `How a 10-Minute Morning Routine Can Change Your Entire Day | 🎧 Podcast and Chill | TED Talk Daily
                    Welcome back to Podcast and Chill on the Learn English Podcast! 🎙️ Today’s episode is all about positive thinking—what it really means, how it benefits your health, and practical ways to develop this life-changing mindset.`
    },

    "nameACountry": {
        title: "Can You Name a Country?",
        img: "/channelPic/jimmyKimmelLive.png",
        author: `Jimmy Kimmel Live
                20.3 million subscribers`,
        tags: "#KIMMEL",
        description: "Donald Trump is overseas visiting Belgium, England, Scotland and then his pal Putin in Russia. It is imperative that America has strong relationships with and knowledge about other nations, and that responsibility extends to all of us. So we came up with a test and went out on the street to ask people passing by, to name any country on a map. It didn't go well."
    },


    "nukesTransport": {
        title: "How Nukes Are Transported",
        img: "/channelPic/neo.png",
        author: `neo
                2.46 million subscribers`,
        tags: "",
        description: `A close look at how the US transports nukes across the country.

            Images via Getty, AP Newsroom
            Map source by MapTiler / OpenStreetMap Contributors via Geolayers 3

            Produced by Leon Herres
            Script by Kane Sillifant, Leon Herres
            3D Animations by @cinematiccookie`,
    },

    "rollsRoyce": {
        title: "Why Rolls-Royce Cars Are So Expensive | So Expensive",
        img: "/channelPic/businessInsider.png",
        author: `Business Insider
                9.95 million subscribers`,
        tags: "#SoExpensive #RollsRoyce #BusinessInsider",
        description: `Rolls-Royce makes some of the world's most luxurious and expensive cars. Known for producing hand-crafted automobiles that promise a seamless "magical carpet ride" for its customers, Rolls-Royce's cars do not come cheap. With virtually unlimited optional extras, upgrades, and customizations, the true cost of a bespoke Rolls-Royce has no limits. So what are some of those bespoke extras? And is that what makes Rolls-Royces so expensive?`
    },

    "streamingWars": {
        title: "The Streaming Wars",
        img: "/channelPic/companyMan.png",
        author: `Company Man
                1.77 million subscribers`,
        tags: "",
        description: `There are so many streaming services. This video focuses on some of the biggest ones and their evolution in the competitive industry.
        
        A very special thanks to this wonderful group of Patrons: 
        Library of Scars, Craig Mews, Jon Sturtz, Gabriela Martinez Celaya, Jennifer Yugo, Checkered Omega, Caitlin Kenney, Jandel, John Briscoe, Laura Floyd, John & Becki Johnston, Kib Bibens-LeFebvre, Andrew Jeeves, aziz alfozan, Audria Richmond, Adamant, Moriah Krawec, Dandaley, Tyrone Cowan, NoChance13, Ronnie Cheng, Astra, Ahmad, milkshake, Jon, Christian & Penny Gray, Emerald Computers – Jason Dragon, Brett Walton, Peter Wesselius, Meow Wolf, MyNameIsKir, Sirpoptart.`
    },

    "taylorSwift": {
        title: "Taylor Swift Reacts to Embarrassing Footage of Herself After Laser Eye Surgery",
        img: "/channelPic/jimmyFallon.png",
        author: `The Tonight Show Starring Jimmy Fallon
                32.4 million subscribers`,
        tags: "#JimmyFallon #TaylorSwift #FallonTonight",
        description: "Taylor Swift reacts to some never-before-seen footage of her acting loopy after laser eye surgery and she teases what songs she’ll perform on Saturday Night Live. "
    },

    "trumpVideo": {
        title: "Trump’s Trade War Created This Boomtown in Vietnam. Now Tariffs Could Topple It. | WSJ Center Point",
        img: "/channelPic/theWallStreetJournal.png",
        author: `The Wall Street Journal
                6.08 million subscribers`,
        tags: "#Vietnam #Tariffs #WSJ",
        description: `Haiphong, Vietnam’s northern port city, saw a manufacturing boom after President Trump’s 2018 tariffs on China, becoming a key export hub that helped boost the country’s economy. Today, Vietnam is one of the fastest-growing economies in the region with a number of key infrastructure projects underway. But now, Hanoi has to learn how to navigate new trade challenges under Trump’s second term to weather the coming storm.

                    WSJ explores how Haiphong became the center of Vietnam’s growth and how Trump’s new trade war could stall it. `
    },

    "worldLargestCruise": {
        title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
        img: "/channelPic/businessInsider.png",
        author:  `Business Insider
                9.95 million subscribers`,
        tags: "#RoyalCaribbean #BusinessInsider #Cruise",
        description: "Every week, Royal Caribbean has a $1 million shopping budget to feed its hungry passengers onboard Symphony of the Seas. To cook up every snack, meal, and dessert, the culinary team works 24/7 in compact kitchens on a moving ship."
    },

    "singaporeRich": {
        title: "How Singapore Got So Crazy Rich",
        img: "/channelPic/bloombergOriginals.png",
        author: `Bloomberg Originals
                4.53 million subscribers`,
        tags: "#Bloomberg #Singapore #Wealth",
        description: "Singapore has transformed itself from a colonial trading port to a buzzing financial center in just a matter of decades. It’s been held up as an example of how small countries can seek a pathway to rapid growth and development. So what’s the city-state’s formula for success? And as Lawrence Wong takes over from Lee Hsien Loong as prime minister, what must he do to maintain it?"
    }
}

function changeTitle(videoSrc) {
    const videoTitleElement = document.querySelector('.videoTitle');
    const videoCaptionElement = document.querySelector('.videoCaption');
    const channelImgElement = document.querySelector('.channelImg');
    const authorVideoElement = document.querySelector('.authorVideo');
    const videoTagsElement = document.querySelector('.videoTags');

    let videoName = decodeURIComponent(videoSrc.split('/').pop().split('.')[0]);

    if (videoTitles[videoName]) {
        videoTitleElement.innerText = videoTitles[videoName].title;
        document.title = videoTitles[videoName].title;

        videoCaptionElement.innerText = videoTitles[videoName].description;
        channelImgElement.src = videoTitles[videoName].img;
        authorVideoElement.innerText = videoTitles[videoName].author;
        videoTagsElement.innerText = videoTitles[videoName].tags;
    }
}

function hideVideo(videoSrc) {
    let videoName = decodeURIComponent(videoSrc.split('/').pop().split('.')[0]);
    const sideVideos = document.querySelectorAll('.side-video-list');

    sideVideos.forEach(videoItem => {
        const thumbNail = videoItem.querySelector('.smallThumbnail');

        if (thumbNail.getAttribute('href').includes(videoName)) {
            videoItem.style.display = "none";
        }
    });
}

window.onload = function () {

    if (videoSrc) {
        const videoElement = document.getElementById('videoPlayer');
        const sourceElement = document.getElementById('videoSource');

        sourceElement.src = videoSrc;
        videoElement.load();

        changeTitle(videoSrc);
        hideVideo(videoSrc);
    } else {
        alert('This video does not exist!');
    }
}
