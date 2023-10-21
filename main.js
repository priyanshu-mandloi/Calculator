const keyboard = document.querySelector(".keyboard");

keyboard.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.keyCode === 187) {
    alert("Sorry! You cant use" + e.key); // Agar '+' press karoge toh ye alert message de dega.
  }
});
