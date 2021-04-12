var username = "giveMeA5";
var password = "please101";
var reminder = [];
var i = 0;
var current;

onEvent("logIn", "click", function( ) {
  setScreen("loginInScreen");
});


onEvent("go1", "click", function( ) {
  var authUser = getText("loginInUser");
  var authPass = getText("loginInPass");
  if (username == authUser && password == authPass) {
    setScreen("home");
  } else {
    showElement("auth");
  }
});
onEvent("go2", "click", function( ) {
addReminder();
});

function addReminder() {
 appendItem(reminder, getText("remindersInput"));
 i = i + 1;
 current = reminder[i];
 setText("remindersOutput",reminder[i]);

}
