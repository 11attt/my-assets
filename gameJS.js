function launchWebsite(link) {document.open();

document.write(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Unblocked Games</title>

<style>
* {
    box-sizing: border-box;
}

#bbutton {
    width: 100px;
    height: 50px;
    color: white;
    background-color: #9696ff;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    position: absolute;
    top: 0%;
}

#bbutton:hover {
    background-color: #0056b3;
}

body {
    margin: 0;
    height: 100vh;
    overflow: hidden;
    background: rgb(18, 18, 18);
    font-family: 'Source Sans 3', sans-serif;
}

#H_d {
    background-color: rgb(150, 150, 255);
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}

h1 {
    color: rgb(223, 238, 255);
    position: fixed;
    top: 0;
    left: 100px;
    margin: 0;
    padding: 10px;
    font-weight: bold;
    font-size: 26px;
    z-index: 12;
}

.Float {
    position: fixed;
    top: 3.5%;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    background-color: white;
    animation: floatUpDown 2.95s ease-in-out infinite;
    z-index: 12;
}

#t { left: 49%; }
#th { left: 51%; }

#fl {
    position: absolute;
    top: -20px;
    left: 4px;
    font-weight: bold;
    color: rgb(150, 150, 175);
}

@keyframes floatUpDown {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

#game-container {
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 1100px;
    height: calc(100vh - 90px);
    background: #000;
    border: 3px solid rgb(150, 150, 255);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 25px rgba(150, 150, 255, 0.25);
}

#game {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
}

@media (max-width: 600px) {
    h1 { font-size: 20px; }

    #game-container {
        width: 96%;
        height: calc(100vh - 75px);
        top: 60px;
    }
}
</style>
</head>

<body>
<div id="H_d">
    <button id="bbutton">Go Back</button>
</div>

<div class="Float" id="t">
    <h2 id="fl">U</h2>
</div>

<div class="Float" id="th">
    <h2 id="fl">G</h2>
</div>

<h1>Unblocked Games</h1>

<div id="game-container">
    <iframe id="game" src="`+link+`" title="gameFrame"
    allow="fullscreen; autoplay; gamepad" allowfullscreen>
    </iframe>
</div>

</body>
</html>`);

document.close();}
