

//Documentation for Phaser's (2.5.0) states:: phaser.io/docs/2.5.0/Phaser.State.html
class Loginpage extends Phaser.State {

  //initialization code in the constructor
  constructor(game, parent) {
    super(game,parent);
    this.div = document.getElementById("loginpage");
  }

  //Load operations (uses Loader), method called first
  preload() {

  }

  //Setup code, method called after preload
  create() {
    this.div.style.display = "block";
    this.game.stage.backgroundColor = "#FFF";

    this.loginSubmitHandler = this.loginSubmit.bind(this);
    document.getElementById("loginform").addEventListener("submit", this.loginSubmitHandler);
  }

  loginSubmit(event) {
    event.preventDefault();
    const submitData = {
      user_email: document.getElementById("loginname").value,
      user_pass: document.getElementById("loginpassword").value
    }

    const loginRequest = new XMLHttpRequest();
    loginRequest.onreadystatechange = () => {
      if (loginRequest.readyState === XMLHttpRequest.DONE) {
        if (loginRequest.status === 200) {
          const response = JSON.parse(loginRequest.responseText);
          if (response.status_code === 200) {
            this.game.state.start("dialogIntro");
          }
        }
      }
    };
    loginRequest.open('POST', this.game.global.apiBaseUrl + "/auth/app");
    loginRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
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
