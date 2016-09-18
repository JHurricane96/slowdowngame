

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Loginpage extends Phaser.State {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);
    this.div = document.getElementById("loginpage");
    this.loginSubmitHandler = this.loginSubmit.bind(this);
    document.getElementById("loginform").addEventListener("submit", this.loginSubmitHandler);
    document.getElementById("leaderboardlink").addEventListener("click", () => {
      this.game.state.start("leaderboard");
    });
  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {
    this.div.style.display = "block";
    this.game.stage.backgroundColor = "#FFF";
  }

  loginSubmit(event) {
    event.preventDefault();
    const submitData = {
      user_email: document.getElementById("loginname").value,
      user_pass: document.getElementById("loginpassword").value
    }

    const errormsgElt = document.getElementById("wrongusernamemsg");
    const loginButton = document.querySelector("#loginpage input[type=\"submit\"]");
    errormsgElt.classList.remove("show");
    loginButton.value = "please wait...";

    const loginRequest = new XMLHttpRequest();
    loginRequest.onreadystatechange = () => {
      if (loginRequest.readyState === XMLHttpRequest.DONE) {
        loginButton.value = "log in";
        if (loginRequest.status === 200) {
          const loginResponse = JSON.parse(loginRequest.responseText);
          if (loginResponse.status_code === 200) {
            console.log(loginResponse);
            this.game.global.user_id = loginResponse.user_id;
            this.game.global.token = loginResponse.message;

            const getProgressStatus = new XMLHttpRequest();
            getProgressStatus.onreadystatechange = () => {
              if (getProgressStatus.readyState === XMLHttpRequest.DONE) {
                console.log(getProgressStatus.responseText);
                if (getProgressStatus.status === 200) {
                  const progressResponse = JSON.parse(getProgressStatus.responseText);
                  if (progressResponse.status_code === 200) {
                    console.log(progressResponse);
                    this.game.global.level = parseInt(progressResponse.message.latest_level, 10);
                    this.game.global.score = this.game.global.beginScore = parseInt(progressResponse.message.latest_score, 10);
                    this.game.state.start("resumepage");
                  }
                }
              }
            }

            getProgressStatus.open("POST", this.game.global.apiBaseUrl + "/user/getgamedetails");
            getProgressStatus.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            getProgressStatus.send("user_id=" + loginResponse.user_id + "&token=" + loginResponse.message);
          }
          else {
            errormsgElt.classList.add("show");
          }
        }
      }
    };
    loginRequest.open("POST", this.game.global.apiBaseUrl + "/auth/app");
    loginRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    loginRequest.send("user_email=" + submitData.user_email + "&user_pass=" + submitData.user_pass);
  }

  //Code ran on each frame of game
  update() {

  }

  //Called when game is paused
  paused() {

  }

  //You're able to do any final post-processing style effects here.
  render() {

  }

  //Called when switching to a new state
  shutdown() {
    //this.div.removeChild(this.div.getElementsByTagName("table")[0]);
    this.div.style.display = "none";
    this.game.stage.backgroundColor = "#000";
  }

}

export default Loginpage;
