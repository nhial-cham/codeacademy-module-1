const cristianoRonaldo = {
    fullName: "Cristiano Ronaldo dos Santos Aveiro",
    nickname: "CR7",
    nationality: "Portuguese",
    birthDate: "1985-02-05",
    age: 41,
    birthplace: "Funchal, Madeira, Portugal",
    profession: "Professional Footballer",
    currentClub: "Al Nassr",
    jerseyNumber: 7,
    heightCm: 187,
    weightKg: 85,
    preferredFoot: "Right",
    playingPosition: "Forward",
    captain: true,
    marketValueMillionEuro: 15,
    netWorthMillionUsd: 800,

    languagesSpoken: [
        "Portuguese",
        "English",
        "Spanish"
    ],

    achievements: [
        "5 Ballon d'Or Awards",
        "5 UEFA Champions League Titles",
        "UEFA Euro 2016 Winner",
        "Top International Goal Scorer",
        "Multiple League Titles"
    ],

    careerStats: {
        totalGoals: 900,
        totalAssists: 250,
        internationalGoals: 130,
        clubsPlayedFor: [
            "Sporting CP",
            "Manchester United",
            "Real Madrid",
            "Juventus",
            "Al Nassr"
        ]
    },

    socialMedia: {
        instagramFollowersMillion: 650,
        twitterFollowersMillion: 115,
        facebookFollowersMillion: 170
    },

    awards: {
        ballonDor: 5,
        goldenBoots: 4,
        fifaBestPlayerAwards: 3
    },

    trainingRoutine: {
        gymHoursPerDay: 3,
        dietType: "High Protein",
        sleepsPerDay: 5
    },

    getPlayerSummary: function () {
        return `${this.fullName} is a ${this.nationality} footballer currently playing for ${this.currentClub}.`;
    }
};

console.log(cristianoRonaldo.getPlayerSummary());