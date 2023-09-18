chrome.contextMenus.create({
    id: "Kryptos",
    title: "Kryptos",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "Kryptos") {
        
        blurry = [];
        for (var sense = 0; sense <= 63; sense++) {
            let badabing = info.selectionText[sense % info.selectionText.length];
            blurry.push(badabing.split("", badabing.length).reduce((acc, char) => acc + char.charCodeAt(), 0).toString());
        };
        mindless = [];
        for (var alert = 0; alert <= 387; alert++) {
            let badaboom = info.selectionText[alert % info.selectionText.length];
            mindless.push(badaboom.split("", badaboom.length).reduce((acc, char) => acc + char.charCodeAt(), 0).toString());
        };
        loveless = [];
        for (var balls = 0; balls <= 341; balls++){
            let bingbong = info.selectionText[balls % info.selectionText.length];
            loveless.push(bingbong.split("", bingbong.length).reduce((acc, char) => acc + char.charCodeAt(), 0).toString());
        };
        soulless = [];
        for (var sol = 0; sol <= 97; sol++) {
            let bahoot = info.selectionText[sol % info.selectionText.length];
            soulless.push(bahoot.split("", bahoot.length).reduce((acc, char) => acc + char.charCodeAt(), 0).toString());
        };
        k = [blurry.join(""), mindless.join(""),  loveless.join(""), soulless.join("")];
        
        const selectedText = info.selectionText.split(" ", info.selectionText.length);
        const test = (arr) => {
            for (let bin = 0; bin <= selectedText.length; bin++) {
                if (bin % 2 === 0){
                    selectedText[bin] += arr;
                } else {
                    selectedText[bin-1] += arr;
                };
            };
            return selectedText.join("");
        };
        const relief = test(k);
        const badum = [];
        for (let bee = 0; bee <= relief.length; bee++) {
            let itbee = relief[bee % relief.length];
            badum.push(itbee.split("", itbee.length).reduce((acc, char) => acc + char.charCodeAt(), 0).toString());
        };
        const reliefs = badum.join("");
        chrome.tabs.create({ url: `data:text/plain,${reliefs}`});
        var data = "";
        const colors = (ar) => {
            for (let i = 0; i <= ar.length; i++) {
                var color = `"rgb(50, 205, 50)"`;
                if (ar[i] == 0){
                    color = `"rgb(135, 206, 250)"`;
                } else if (ar[i] == 1){
                    color = `"rgb(255, 105, 180)"`;
                } else if (ar[i] == 2) {
                    color = `"rgb(240, 248, 255)"`;
                } else if (ar[i] == 3) {
                    color = `"rgb(255, 250, 205)"`;
                } else if (ar[i] == 4) {
                    color = `"rgb(189, 183, 107)"`;
                } else if (ar[i] == 5) {
                    color = `"rgb(143, 188, 143)"`;
                } else if (ar[i] == 6) {
                    color = `"rgb(0, 206, 209)"`;
                } else if (ar[i] == 7) {
                    color = `"rgb(255, 215, 0)"`;
                } else if (ar[i] == 8) {
                    color = `"rgb(255, 69, 0)"`;
                } else {
                    color = `"rgb(124, 252, 0)"`;
                }
                data += ` var square = document.createElement("div"); square.style.width = "10px"; square.style.float="left"; square.style.width = "10px"; square.style.height = "10px"; square.style.backgroundColor = ${color}; document.body.appendChild(square);`;  
            }
        }
        colors(reliefs.split(""));
        console.log(data);
    }
});