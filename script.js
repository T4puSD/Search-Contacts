let input = document.getElementById("input");

input.addEventListener("keyup", () => {
  //   console.log(input.value);
  let inputVal = input.value;
  let list = document.querySelectorAll(".container-list ul li");
  for (let i = 0; i < list.length; i++) {
    //console.log(list[i].textContent);
    if (
      list[i].textContent.toUpperCase().indexOf(inputVal.toUpperCase()) > -1
    ) {
      console.log("match");
      console.log(list[i]);

      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
});
