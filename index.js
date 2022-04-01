// function boom() {
//   document.querySelector("#message").textContent = "BOOM"
// }

const button = document.querySelector("button")
// button.addEventListener("click", boom)
button.addEventListener("click", () => {
  document.querySelector("#message").textContent = "BOOM"
})