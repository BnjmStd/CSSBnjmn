function addMessage(text, sender) {
  console.log(text);
  // clonamos el template
  const clonedTemplate = $template.content.cloneNode(true);

  const $newMessage = clonedTemplate.querySelector(".message");
  const $who = $newMessage.querySelector("span");
  const $text = $newMessage.querySelector("p");

  $text.textContent = text;
  $who.textContent = sender == "bot" ? "GPT" : "Tú";

  $newMessage.classList.add(sender);
  $messages.appendChild($newMessage);
}

const $ = (x) => document.querySelector(x);

const $modal = $(".dialog");
const $btnOpen = $(".btn-open");
const $btnClose = $(".btn-close");
const $submitButton = $(".submit-button");
const $form = $(".addMessage");
const $input = $(".input");

const $template = $("#message-template");
const $messages = $("ul");

$btnOpen.addEventListener("click", () => {
  $modal.showModal();
});

$btnClose.addEventListener("click", () => {
  $modal.close();
});

$form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const messageText = $input.value.trim();

  if (messageText === "") return;

  if (messageText !== "") {
    $input.value = "";
  }

  addMessage(messageText, "user");
  $modal.close();
});
