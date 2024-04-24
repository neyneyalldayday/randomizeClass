const names = [
  "Ryan",
  "James ",
  "Whitney ",
  "Valentina ",
  "Cory",
  "Matthew W",
  "Ashley",
  "Kendra",
  "Michael",
  "irina",
  "Cody",
  "Bezawit",
  "Danny",
  "Brad",
  "Alexander",
  "Brian",
  "Elijah",
  "Caliph",
  "Michael Ny",
  "Matt K",
  "Hakim",
  "Gabby",
  "Caleb",
]; // Add more names as needed

const randomStudent = document.getElementById("random-stud");
const randomButton = document.getElementById("stud-but");
function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

randomButton.addEventListener("click", function (event) {
  event.preventDefault();
  const studName = document.createElement("h1");
  studName.textContent = getRandomName();
  randomStudent.appendChild(studName);
  setTimeout(() => {
    randomStudent.innerHTML = "";
  }, 3000);
});
