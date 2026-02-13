function adicionar() {
    const texto = document.getElementById("tarefa").value;

    const li = document.createElement("li");
    li.textContent = texto;

    li.onclick = () => li.remove();

    document.getElementById("lista").appendChild(li);
}
