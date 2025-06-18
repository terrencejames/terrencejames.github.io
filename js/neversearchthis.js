function getPokemonImageSrc(name) {
    return `https://img.pokemondb.net/sprites/scarlet-violet/normal/${name}.png`;
}

function throwInvalidPokemon(name){
    alert(`Invalid pokemon: ${name}`);
    throw(`Invalid pokemon: ${name}`);
}

async function getPokemonData(name) {
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return fetch(apiUrl)
        .then((response) => {
            return response.json()
        })
        .catch(err => throwInvalidPokemon(name));
}

function calculateBST(stats){
    var total = 0;
    for (const stat of stats){
        total += stat["base_stat"];
    }
    return total;
}

const statsMap = {
    "hp": 0,
    "attack": 1,
    "defense": 2,
    "special-attack": 3,
    "special-defense": 4,
    "speed": 5,
    "bst": 6
}
const statsMapStrings = {
    "hp": "HP",
    "attack": "Attack",
    "defense": "Defense",
    "special-attack": "Special Attack",
    "special-defense": "Special Defense",
    "speed": "Speed",
    "bst": "Base Stat Total"
}
let pokemonValues = [];
// let pokemonValues = [
//     "bulbasaur",
//     "ivysaur",
//     "venusaur",
//     "squirtle",
//     "wartortle",
//     "blastoise",
//     "charmander",
//     "charmeleon",
//     "charizard",
//     "pikachu",
//     "milotic",
//     "rotom",
//     "whimsicott",
//     "staravia", 
//     "blissey",
//     "miraidon"
// ];
var pokemonValuesWithStats = {};
document.querySelector("#pkmnForm").addEventListener("submit", async function(e){
        e.preventDefault(); 
        let textAreaValue = e.target.elements[0].value;
        pokemonValues = textAreaValue.split("\n");
        await Promise.all(pokemonValues.map(async pokemon => {
            var pkmnData = await getPokemonData(pokemon);

            const pkmnDataString = JSON.stringify(pkmnData);
            if (!pkmnDataString.includes("scarlet-violet")){
                throwInvalidPokemon(pokemon);
            }

            const bst = calculateBST(pkmnData.stats);
            pkmnData.stats.push({"base_stat": bst,
                "stat": {
                    "name": "bst"
                }
            });
            pkmnData.stats.imgSrc = getPokemonImageSrc(pokemon);

            pokemonValuesWithStats[pokemon] = pkmnData.stats;
            
        }))

        createPokemonList();

});

// let portfolioCount = 48;

let template = document.getElementById("pkmnCell");
let templateContent = template.content;

let templateStat = document.getElementById("pkmnStatsBar");

// let templateRow = document.getElementById("pkmnRow");

// let col1 = document.getElementById("portfolio-col-1")
// let col2 = document.getElementById("portfolio-col-2")
// let col3 = document.getElementById("portfolio-col-3")

// let row = document.getElementsByClassName("row")[0];

let container = document.getElementById("pkmnContainer");


const MAX_BST = 780;
const MAX_STAT = 255;

function createPkmnCell(name, stat = -1) {
    let clone = templateContent.cloneNode(true);
    let cloneImgs = clone.querySelectorAll("img");
    for (const imgElement of cloneImgs) {
        imgElement.src = pokemonValuesWithStats[name]['imgSrc'];
    }
    if (stat == -1) { 
        var col = clone.querySelector("div");
        col.className = "col-1";
        return clone;
    }
    if (stat == statsMap["bst"]){
        var statNum = pokemonValuesWithStats[name][stat].base_stat;
        let statPercent = statNum/MAX_BST*100;
        var cloneStats = templateStat.content.cloneNode(true);
        var statsBar = cloneStats.getElementById('statsBar');
        statsBar.setAttribute('aria-valuenow', statNum);
        statsBar.setAttribute('aria-valuemax', MAX_BST);
        statsBar.setAttribute('style', `width: ${statPercent}%`);
        statsBar.innerText = statNum;
    
        if (statNum >= 500) {
            statsBar.classList.add('bg-success');
        } else if (statNum >= 400) {
            statsBar.classList.add('bg-warning');
        } else statsBar.classList.add('bg-danger');
    } else {
        var statNum = pokemonValuesWithStats[name][stat].base_stat;
        let statPercent = statNum/MAX_STAT*100;
        var cloneStats = templateStat.content.cloneNode(true);
        var statsBar = cloneStats.getElementById('statsBar');
        statsBar.setAttribute('aria-valuenow', statNum);
        statsBar.setAttribute('style', `width: ${statPercent}%`);
        statsBar.innerText = statNum;

        if (statNum >= 100) {
            statsBar.classList.add('bg-success');
        } else if (statNum >= 60) {
            statsBar.classList.add('bg-warning');
        } else statsBar.classList.add('bg-danger');
    }

    clone.appendChild(cloneStats);


    return clone;
}

function createPkmnRow() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'row align-items-center');
    newDiv.setAttribute('style', 'margin-top: -1rem !important');
    return newDiv;
}

function createStatsCol(statName) {
    const stat = statsMap[statName];
    const pokemonStatsSorted = Object.keys(pokemonValuesWithStats).sort((a,b) => {
        return pokemonValuesWithStats[a][stat].base_stat - pokemonValuesWithStats[b][stat].base_stat;
    });
    var container = document.getElementById(statName+"Col");
    container.classList.add("mb-5");
    container.classList.add("mt-5");

    const header = document.createElement("h1");
    header.innerText = statsMapStrings[statName];
    container.appendChild(header);
    while (pokemonStatsSorted.length != 0) {
        let pkmnRow = createPkmnRow();
        container.appendChild(pkmnRow);

        // for (let index = 0; index < numCols; index++) {
            var pkmnCell = createPkmnCell(pokemonStatsSorted.pop(), stat);

            pkmnRow.appendChild(pkmnCell);
        //}
    }

    return pkmnRow;
}
function createPokemonList() {
    const numCols = 5;
    const numRows = 3;

    var container = document.getElementById("pkmnList");
    container.classList.add("mb-5");
    container.classList.add("mt-5");

    const header = document.createElement("h1");
    header.innerText = "Pokemon List";
    header.className =" text-center";
    container.appendChild(header);

    var pokemonList = [...pokemonValues];
    while (pokemonList.length != 0) {
        var pkmnCell = createPkmnCell(pokemonList.pop());

        container.appendChild(pkmnCell);
    }
    // for (i = 0; i < numRows; i++) {
    //     let pkmnRow = createPkmnRow();
    //     container.appendChild(pkmnRow);

    //     for (let j = 0; j< numCols; j++) {
    //         if (pokemonList.length != 0){
    //             var pkmnCell = createPkmnCell(pokemonList.pop());

    //             pkmnRow.appendChild(pkmnCell);
    //         }
    //     }
    // }

    // Create the stats columns
    for (const stat of Object.keys(statsMap)){
        createStatsCol(stat);
    }
}

