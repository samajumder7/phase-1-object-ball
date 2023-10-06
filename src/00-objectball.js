
function gameObject(){
    const game = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: { 
                "Alan Anderson": {
                    number: 0, shoe: 16, points: 22, rebounds: 12, 
                    assists: 12, steals: 3, blocks: 1, "slam dunks": 1
                },
                "Reggie Evans":	{
                    number: 30, shoe: 14, points: 12, rebounds: 12, 
                    assists: 12, steals: 12, blocks: 12, "slam dunks": 7
                },
                "Brook Lopez": {
                    number: 11, shoe: 17, points: 17, rebounds: 19, 
                    assists: 10, steals: 3, blocks: 1, "slam dunks": 15
                },
                "Mason Plumlee": {
                    number: 1, shoe: 19, points: 26, rebounds: 12, 
                    assists: 6, steals: 3, blocks: 8, "slam dunks": 5
                },
                "Jason Terry": {
                    number: 31, shoe: 15, points: 19, rebounds: 2, 
                    assists: 2, steals: 4, blocks: 11, "slam dunks": 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: { 
                "Jeff Adrien": {
                    number: 4, shoe: 18, points: 10, rebounds: 1, 
                    assists: 1, steals: 2, blocks: 7, "slam dunks": 2
                },
                "Bismak Biyombo":	{
                    number: 0, shoe: 16, points: 12, rebounds: 4, 
                    assists: 7, steals:7, blocks: 15, "slam dunks": 10
                },
                "DeSagna Diop": {
                    number: 2, shoe: 14, points: 24, rebounds: 12, 
                    assists: 12, steals: 4, blocks: 5, "slam dunks": 5
                },
                "Ben Gordon": {
                    number: 8, shoe: 15, points: 33, rebounds: 3, 
                    assists: 2, steals: 1, blocks: 1, "slam dunks": 0
                },
                "Brendan Haywood": {
                    number: 33, shoe: 15, points: 6, rebounds: 12, 
                    assists: 12, steals: 22, blocks: 5, "slam dunks": 12
                }
            }
        }
    }
    return game;
}
const gameBknVsCha = gameObject();


console.log(gameBknVsCha);
const allPlayers = {};

function numPointsScored(name, game){
    let players = game.home.players;
    let stat = name;
    for (let key in players){
        if (key === name) stat += " scored " + players[key]["points"]
    }
    if (stat === name){
        players = game.away.players;
        for (let key in players){
            if (key === name) stat += " scored " + players[key]["points"]
        }
    }
    if (stat === name) stat += " not found";
    return stat;
}
console.log(numPointsScored("Jason Terry", gameBknVsCha));

function shoeSize(name, game){
    let players = game.home.players;
    let stat = name;
    for (let key in players){
        if (key === name) stat += " wears shoe size " + players[key]["shoe"]
    }
    if (stat === name){
        players = game.away.players;
        for (let key in players){
            if (key === name) stat += " wears shoe size " + players[key]["shoe"]
        }
    }
    if (stat === name) stat += " not found";
    return stat;
}
console.log(shoeSize("Ben Gordon", gameBknVsCha));

function teamColors(team, game){
    let stat = team;
    if (team === game.home.teamName){
        stat += " team colors: " + game.home.colors;
    } else if (team === game.away.teamName){
        stat += " team colors: " + game.away.colors;
    } else {
        stat += " not found";
    }
    return stat;
}
console.log(teamColors("Charlotte Hornets", gameBknVsCha));

function teamNames(game){
    let teams = [game.home.teamName, game.away.teamName];
    return teams;
}
console.log("Teams [home, away]: ", teamNames(gameBknVsCha));

function playerNumbers(team, game){
    let stat = team + " uniform numbers: ";
    let homeaway = "";
    if (team === game.home.teamName){
        homeaway = "home";
    } else if (team === game.away.teamName){
        homeaway = "away";
    } else {
        stat += " not found";
    }
    for(key in game[homeaway].players){
        stat += game[homeaway].players[key].number + " ";
    }
    return stat;
}
console.log(playerNumbers("Brooklyn Nets", gameBknVsCha));

function playerStats(name, game){
    //let stats = {};
    let team ="";
    let players = game.home.players;
    for (let key in players){
        if (key === name)   team = "home";
          // let stats = {...players[key]};
    }
    players = game.away.players;
    for (let key in players){
        if (key === name) team = "away";
    }
    return {...game[team].players[name]};
}
console.log("Ben Gordon", playerStats("Ben Gordon", gameBknVsCha));
console.log("Jason Terry", playerStats("Jason Terry", gameBknVsCha));

//const thePlayers = [...gameBknVsCha.home.players, ...gameBknVsCha.away.players]; not reiterable?
//const thePlayers = {...gameBknVsCha.home.players, ...gameBknVsCha.away.players}; not reiterable?

function bigShoeRebounds(game){
    let bigShoe = 0;
    let mrBigShoe = "";
    let bigShoeRebs = 0;
  //  let looped = 0;
    const allPlayers = {};
    for (key in game.home.players){
        allPlayers[key] = {...game.home.players[key]};
    }
    for (key in game.away.players){
        allPlayers[key] = {...game.away.players[key]};
    }

for (key in allPlayers){
   // looped++;
    if (allPlayers[key].shoe > bigShoe) {
        bigShoe = allPlayers[key].shoe;
        mrBigShoe = key;
        bigShoeRebs = allPlayers[key].rebounds;
    }
}
return `Mr. Big Shoes, ${mrBigShoe} (size ${bigShoe}) had ${bigShoeRebs} rebounds.`;
}

console.log(bigShoeRebounds(gameBknVsCha));

function mostPointsScored(game){
    const allPlayers = {};
    let topScore = 0;
    let topScorer = 'UNKNOWN';
    for (key in game.home.players){
        allPlayers[key] = {...game.home.players[key]};
        allPlayers[key]["team"] = game.home.teamName;
    }
    for (key in game.away.players){
        allPlayers[key] = {...game.away.players[key]};
        allPlayers[key]["team"] = game.away.teamName;
    }
    for (key in allPlayers){
    // looped++;
        if (allPlayers[key].points > topScore) {
            topScore = allPlayers[key].points;
            topScorer = key + ", " + allPlayers[key].team;
        }
    }
    return `Top scorer: ${topScorer}, ${topScore} points.`;
}
console.log(mostPointsScored(gameBknVsCha));
function winningTeam(game){
    let homePts =0;
    let awayPts =0;
    let result = "";
    for (key in game.home.players){
        homePts += game.home.players[key].points;
    }
    for (key in game.away.players){
        awayPts += game.away.players[key].points;
    }
    if (homePts > awayPts){
        result = `${game.home.teamName} def. ${game.away.teamName}, ${homePts}-${awayPts}.`
    } else {
        result = `${game.away.teamName} def. ${game.home.teamName}, ${awayPts}-${homePts}.`
    }
    return result;
}
console.log(winningTeam(gameBknVsCha));

function playerWithLongestName(game){
    let longName ="";
    let longestName =0;
    const allPlayers = {};
    for (key in game.home.players){
        if(key.length > longestName) {
            longName = key;
            longestName = key.length;
        } else if (key.length === longestName){
            longName += ", " + key;
        }
    }
    for (key in game.away.players){
        if(key.length > longestName) {
            longName = key;
            longestName = key.length;
        } else if (key.length === longestName){
            longName += ", " + key;
        }
    }
    return `Longest name(s) belongs to ${longName}.`;
}
console.log(playerWithLongestName(gameBknVsCha));

