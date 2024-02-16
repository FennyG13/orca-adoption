function startAdoptionProcess() {
  let gift = prompt("Is this an adoption a gift?");
  let name = prompt("What name should we print on the Adoption Certificate?");
  let donate = prompt("OPTIONAL donation amount");
  if (donate <= 0) {
    alert(`Thank you ${name} for the adoption! 💖`);
  } else {
    alert(`Thank you ${name}! We whaley love you 🥰`);
  }
}

let adoptAnOrca = document.querySelector("button");
adoptAnOrca.addEventListener("click", startAdoptionProcess);
