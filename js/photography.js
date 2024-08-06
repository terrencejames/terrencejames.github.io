function getPortfolioImgSrc(filenumber) {
    return `assets/images/portfolio/portfolio (${filenumber}).jpg`;
}
let portfolioCount = 48;

let template = document.getElementById("portfolio-cell");
let templateContent = template.content;

let col1 = document.getElementById("portfolio-col-1")
let col2 = document.getElementById("portfolio-col-2")
let col3 = document.getElementById("portfolio-col-3")

var df = document.createDocumentFragment();
var df2 = document.createDocumentFragment();
var df3 = document.createDocumentFragment();

function createPortfolioCell(filenumber) {
    let clone = templateContent.cloneNode(true);
    let cloneImgs = clone.querySelectorAll("img");
    for (const imgElement of cloneImgs) {
        imgElement.src = getPortfolioImgSrc(filenumber);
    }
    return clone;
}

for (let index = 1; index < portfolioCount+1; index+=3) {
    df.appendChild(createPortfolioCell(index)); 
    df2.appendChild(createPortfolioCell(index+1)); 
    df3.appendChild(createPortfolioCell(index+2)); 
}

col1.appendChild(df);
col2.appendChild(df2);
col3.appendChild(df3);

