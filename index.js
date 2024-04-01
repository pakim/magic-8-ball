let side8 = true;
const rotateDuration = 3000;
const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

$(".ball").on("click", () => {
  if(!$(".rotate-div").hasClass("disabled")) {
    if(side8) {
      $(".rotate-div").addClass("active");
      $(".rotate-div").addClass("disabled");
      side8 = false;
      const currentIndex = Math.floor(Math.random() * 20);
      $(".message p").text(responses[currentIndex].toUpperCase());
  
      setTimeout(() => {
        $(".rotate-div").removeClass("disabled");
        $(".message").addClass("active");
        $(".triangle").addClass("active");
      }, rotateDuration);
    }
    else {
      $(".rotate-div").removeClass("active");
      $(".rotate-div").addClass("disabled");
      $(".message").removeClass("active");
      $(".triangle").removeClass("active");
      side8 = true;
  
      setTimeout(() => {
        $(".rotate-div").removeClass("disabled");
      }, rotateDuration);
    }
  }
});