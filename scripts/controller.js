function encounterGenerator() {
  if (kulOMeter >= 100 || kulOMeter <= 0) {
    checkWinLoss();
  } else {
    let rng = Math.floor(Math.random() * 4);

    if (rng === 0) {
      oldBuddyEvent = buddyEvent;
      while (oldBuddyEvent === buddyEvent) {
        buddyEvent = Math.floor(Math.random() * 3);
      }
      buddyView();
      answerRNG = Math.ceil(Math.random() * 3);
    } else {
      oldRandomEvent = randomEvent;
      while (oldRandomEvent === randomEvent) {
        randomEvent = Math.floor(Math.random() * events.length);
      }
      eventView();
    }
  }
}

function checkAnswer(tall) {
  if (tall === answerRNG) {
    if (kulOMeter >= 50) {
      buddyText = buddies[buddyEvent].svar[0];
      buddyViewDone();
      buddyText = '';
    } else {
      buddyText = buddies[buddyEvent].svar[1];
      buddyViewDone();
      buddyText = '';
    }
  } else {
    buddyText = buddies[buddyEvent].svar[2];
    kulOMeter--;
    buddyView();
    checkWinLoss();
    buddyText = '';
  }
}

function checkWinLoss() {
  if (kulOMeter >= 100) {
    winscreen();
    return;
  } else if (kulOMeter <= 0) {
    gameOver();
    return;
  }
}

function restart() {
  kulOMeter = 10;
  updateView();
}
