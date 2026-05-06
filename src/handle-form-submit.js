import { findCharacterPositions } from "./string";
export function handleSubmit() {
  const mainStr = document.getElementById("mainInput").value;
  const char = document.getElementById("charInput").value;
  const errorEl = document.getElementById("errorMsg");

  if (!mainStr || !char) {
    errorEl.innerText = "Both fields are required";
    errorEl.style.display = "block";
    return;
  }

  if (char.length > 1) {
    errorEl.innerText = "Only enter one characher";
    errorEl.style.display = "block";
    return;
  }

  errorEl.style.display = "none";

  const positions = findCharacterPositions(mainStr, char);

  const result = `Found ${positions.count} times at positions: ${positions.positions.join(",")}`;

  localStorage.setItem("result", result);

  window.location.href = "/result.html";
}
