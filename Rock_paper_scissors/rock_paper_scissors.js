// 1.사용자가 가위바위보를 클릭하면 게임이 시작된다.
// 2.사용자가 선택한 가위바위보 이미지를 보여준다.
// 3.컴퓨터가 가위바위보를 랜덤으로 선택한다.
// 4.컴퓨터가 선택한 가위바위보 이미지를 보여준다.
// 5.승패 여부를 구분하여 보여준다.

//#scissors
document.querySelector("#scissors").onclick = function () {
  playGame("scissors");
};

//#rock
document.querySelector("#rock").onclick = function () {
  playGame("rock");
};

//#paper>
document.querySelector("#paper").onclick = function () {
  playGame("paper");
};

let user_score = 0;
let computer_score = 0;

function playGame(user_choice) {
  //사용자가 선택한 가위바위보
  console.log("사용자:" + user_choice);
  //.you>div:nth-child(2)  -->여기에 이미지 넣기
  let user_choice_image = `<img src="images/${user_choice}.png" width=70 height=70>`;
  document.querySelector(".you>div:nth-child(2)").innerHTML = user_choice_image;
  console.log(user_choice_image);

  //컴퓨터가 선택한 가위바위보
  let choice_list = ["scissors", "rock", "paper"];
  let idx = Math.floor(Math.random() * 3);
  let computer_choice = choice_list[idx];
  console.log("컴퓨터:" + computer_choice);
  console.log(choice_list[idx]);

  //math.random() 랜덤 숫자
  console.log(Math.floor(Math.random() * 3));
  console.log(idx);

  //".computer>div:nth-child(2)" --> 여기에 이미지 넣기
  let computer_choice_image = `<img src="images/${computer_choice}.png" width=70 height=70>`;
  document.querySelector(".computer>div:nth-child(2)").innerHTML =
    computer_choice_image;

  //승패구분하기

  let user_win1 = user_choice === "rock" && computer_choice === "scissors";
  let user_win2 = user_choice === "scissors" && computer_choice === "paper";
  let user_win3 = user_choice === "paper" && computer_choice === "rock";
  let message;
  let text_color;
  if (user_choice === computer_choice) {
    console.log("비겼습니다.");
    message = "비겼습니다.";
    text_color = "black";
  } else if (user_win1 || user_win2 | user_win3) {
    console.log("당신이 이겼습니다.");
    message = "당신이 이겼습니다.";
    text_color = "red";
    user_score++;
  } else {
    console.log("컴퓨터가 이겼습니다.");
    message = "컴퓨터가 이겼습니다.";
    text_color = "blue";
    computer_score++;
  }
  //result-message --> 여기에 승패 보여주기
  console.log(text_color);
  document.querySelector(".result-message").innerText = message;
  document.querySelector(".result-message").style.color = text_color;

  //.score>div:nth-child(1)-->사용자점수
  document.querySelector(".score>div:nth-child(1)").innerText = user_score;
  //.score>div:nth-child(3)-->컴퓨터점수
  document.querySelector(".score>div:nth-child(3)").innerText = computer_score;
}
