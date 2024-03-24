let side8 = true;
const rotateDuration = 3000;

$(".ball").on("click", () => {
  if(!$(".rotate-div").hasClass("disabled")) {
    if(side8) {
      $(".rotate-div").addClass("active");
      $(".rotate-div").addClass("disabled");
      side8 = false;
  
      setTimeout(() => {
        $(".rotate-div").removeClass("disabled");
      }, rotateDuration);
    }
    else {
      $(".rotate-div").removeClass("active");
      $(".rotate-div").addClass("disabled");
      side8 = true;
  
      setTimeout(() => {
        $(".rotate-div").removeClass("disabled");
      }, rotateDuration);
    }
  }
});