
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ranDelay(ms){
    return new Promise(resolve => setTimeout(resolve, ms * Math.random()));    
}

async function typeForward(str, callback){
    for (let i = 0; i < str.length; i++){
        document.getElementById("coolAnimation").innerHTML += str[i];
        await ranDelay(150);
    }

    
    if (callback) callback();
}

async function typeBackward(str, callback){
    for (let i = str.length-1; i >= 0; i--){
        document.getElementById("coolAnimation").innerHTML = str.slice(0,i);
        await ranDelay(50);
    }

    if (callback) callback();
}

async function processString(str){
    await typeForward(str);
    await delay(2000);
    await typeBackward(str);
    
}

async function processStrings(list) {
    for (const str of list) {
        await processString(str);
    }

    processStrings([" Website?", "n Online Store?", " Redesign?", " Portfolio?", "n Admin?"]);
}

window.addEventListener("load", () => {
    processStrings([" Website?", "n Online Store?", " Redesign?", " Portfolio?", "n Admin?"]);;
});