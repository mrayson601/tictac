var boxes = [];
var startBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var xScore = [];
var oScore = [];
var xPlayer = true;
var xChoice;
var gameOver = false;

$(".col-xs-4").click(function() {
  $(this).addClass("marked");
  if (boxes.indexOf(parseInt($(this).attr("id"))) == -1) {
    boxes.push(parseInt($(this).attr("id")));
    startBoxes.splice(parseInt($(this).attr("id")) - 1, 1, "Z");

    if (xPlayer == true) {
      $(this).addClass("xMark");
      xScore.push(parseInt($(this).attr("id")));
      xPlayer = false;
    } else if (xPlayer == false) {
      $(this).addClass("oMark");
      oScore.push(parseInt($(this).attr("id")));
      xPlayer = true;

    }

  }

  checkScore(xScore);
  checkScore(oScore);
  checkDraw();
  if (gameOver == false) {
    setTimeout(AI, 200);
  }
});

function AI() {
  var rand = startBoxes[Math.floor(Math.random() * startBoxes.length)];
  if (rand == "Z") {
    AI();
  } else {

    $("#" + rand).addClass("marked");
    if (boxes.indexOf(parseInt($("#" + rand).attr("id"))) == -1) {
      boxes.push(parseInt($("#" + rand).attr("id")));
      startBoxes.splice(parseInt($("#" + rand).attr("id")) - 1, 1, "Z");

      if (xPlayer == true) {
        $("#" + rand).addClass("xMark");
        xScore.push(parseInt($("#" + rand).attr("id")));
        xPlayer = false;
      } else if (xPlayer == false) {
        $("#" + rand).addClass("oMark");
        oScore.push(parseInt($("#" + rand).attr("id")));
        xPlayer = true;
      }

    }

    checkScore(xScore);
    checkScore(oScore);
    checkDraw();

  }

}

function checkScore(arr) {

  if (arr.indexOf(1) != -1 && arr.indexOf(2) != -1 && arr.indexOf(3) != -1) {
    gameOver = true;

    displayWinner();
    setTimeout(clearGame, 2000);
  }

  if (arr.indexOf(4) != -1 && arr.indexOf(5) != -1 && arr.indexOf(6) != -1) {
    gameOver = true;

    displayWinner();
    setTimeout(clearGame, 2000);
  }

  if (arr.indexOf(7) != -1 && arr.indexOf(8) != -1 && arr.indexOf(9) != -1) {
    gameOver = true;

    displayWinner();
    setTimeout(clearGame, 2000);
  }

  if (arr.indexOf(1) != -1 && arr.indexOf(4) != -1 && arr.indexOf(7) != -1) {
    gameOver = true;

    displayWinner();
    setTimeout(clearGame, 2000);
  }

  if (arr.indexOf(2) != -1 && arr.indexOf(5) != -1 && arr.indexOf(8) != -1) {
    gameOver = true;

    displayWinner();
    setTimeout(clearGame, 2000);
  }

  if (arr.indexOf(3) != -1 && arr.indexOf(6) != -1 && arr.indexOf(9) != -1) {
    gameOver = true;

    displayWinner();
    setTimeout(clearGame, 2000);
  }

  if (arr.indexOf(1) != -1 && arr.indexOf(5) != -1 && arr.indexOf(9) != -1) {
    gameOver = true;

    displayWinner();
    setTimeout(clearGame, 2000);
  }

  if (arr.indexOf(3) != -1 && arr.indexOf(5) != -1 && arr.indexOf(7) != -1) {
    gameOver = true;

    displayWinner();
    setTimeout(clearGame, 2000);
  }

}

function checkDraw() {
  if (boxes.length == 9 && gameOver == false) {
    $("#status").html("<img  src='http://fontmeme.com/freefonts/img.php?f=58127&s=50&t=Draw&c=BF55EC'>");
    $("#status").fadeIn(800);

    $("#status").fadeOut(1500);
    setTimeout(clearGame, 2000);

  }
}

function displayWinner() {
  if (xPlayer == true) {
    $("#status").html("<img  src='http://fontmeme.com/freefonts/img.php?f=58127&s=50&t=O%20Wins&c=2ECC71'>");
    $("#status").fadeIn(800);

    $("#status").fadeOut(1500);
  } else if (xPlayer == false) {
    $("#status").html("<img  src='http://fontmeme.com/freefonts/img.php?f=58127&s=50&t=X%20Wins&c=2ECC71'>");
    $("#status").fadeIn(800);

    $("#status").fadeOut(1500);

  }
}

function clearGame() {
  boxes = [];
  xScore = [];
  oScore = [];
  startBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  gameOver = false;
  $("[class]").removeClass("marked");
  $("[class]").removeClass("xMark");
  $("[class]").removeClass("oMark");
  if (xChoice == true) {
    xPlayer = true;
  } else {
    xPlayer = false;
  }

}

$(document).ready(function() {
  $("#gameBox").hide();
  $("#x").click(function() {
    $("#prompt").hide();
    $("#gameBox").show();
    xChoice = true;
  })

  $("#o").click(function() {
    $("#prompt").hide();
    $("#gameBox").show();
    xPlayer = false;
    xChoice = false;
  })

});
