const actions = ["inject", "cs-inject", "bg-inject", "bg-function", "change",
  "check", "click", "click-update", "update", "timer",
  "redirect", "copy", "copy-html", "pause"];

const secondaryDisabled = ["inject", "cs-inject", "bg-inject", "bg-function",
  "check", "click", "click-update", "update",
  "redirect", "copy", "copy-html", "pause"];

for (const example of document.querySelectorAll("[data-example]"))
{
  const action = example.dataset.example;
  if (!actions.includes(action))
    continue;

  const div = document.createElement("div");
  const select = document.createElement("select");
  const option = document.createElement("option");
  option.value = action;
  option.textContent = action;
  select.appendChild(option);
  div.appendChild(select);
  example.insertBefore(div, example.querySelector("pre:nth-of-type(2)"));

  if (secondaryDisabled.includes(action))
  {
    const input = document.createElement("input");
    input.type = "text";
    input.disabled = true;
    example.appendChild(input);
  }
}
