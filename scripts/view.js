updateView();

function updateView() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="kuloMeter" style="width:${kulOMeter * 2}px">${kulOMeter}</div>
    <img src="img/start.png" /> 
    <div id="mainText">Du kjeder deg en dag og bestemmer deg for og dra ut og råne</div>
    <button id="drive" onclick="encounterGenerator()">Start</button>
    `;
}

function buddyView() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  <div id="kuloMeter" style="width:${kulOMeter * 2}px">${kulOMeter}</div>
    <img src="${buddies[buddyEvent].bilde}"/>
    <div>du møter på ${buddies[buddyEvent].name}</div>
    <div id="mainText">${buddyText}</div>
    <button onclick="checkAnswer(1)">${greetings[0]}</button>
    <button onclick="checkAnswer(2)">${greetings[1]}</button>
    <button onclick="checkAnswer(3)">${greetings[2]}</button>
    `;
}

function buddyViewDone() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  <div id="kuloMeter" style="width:${kulOMeter * 2}px">${kulOMeter}</div>
    <img src="${buddies[buddyEvent].bilde}"/>
    <div id="mainText">${buddyText}</div>
    <button  onclick="encounterGenerator()">kjør vidre</button>
    `;
}

function eventView() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="kuloMeter" style="width:${kulOMeter * 2}px">${kulOMeter}</div>
    <img src="${events[randomEvent].bilde}"/>
    <div id="mainText">${events[randomEvent].mainText}</div>
    <button onclick="events[randomEvent].option1()">${
      events[randomEvent].button1text
    }</button>
    <button onclick="events[randomEvent].option2()">${
      events[randomEvent].button2text
    }</button>
    `;
}

function eventViewDone() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  <div id="kuloMeter" style="width:${kulOMeter * 2}px">${kulOMeter}</div>
  <img src="${events[randomEvent].bilde}"/>
    <div id="mainText">${events[randomEvent].mainText}</div>
    <button onclick="encounterGenerator()">kjør vidre</button>
    `;
}

function winscreen() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="kuloMeter" style="width:${kulOMeter * 2}px">${kulOMeter}</div>
    <img src="img/winride.png" />
    <div>gratuler du feteste duden i bygda</div>
    <button onclick="restart()">start på nytt i ny bygd</button>
  `;
}

function gameOver() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  <img src="img/gameover.png" />
  <div>du er så ukul at du flytter fra bygda</div>
  <button onclick="restart()">start på nytt i ny bygd</button>
  `;
}
