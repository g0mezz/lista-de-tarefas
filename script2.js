  let num = 0;
  const tarefaInput = document.getElementById("tarefa");
  const adicionarBotao = document.getElementById("btn-new-task");
  const listaTarefas = document.getElementById("to-do-list");

  adicionarBotao.addEventListener("click", adicionarTarefa);

  function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value;
    if (tarefaTexto.trim() !== "") {
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `${tarefaTexto}<button class="excluir" onclick="deletar()">Excluir</button>`;
        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = "";
    }
  }

  function contador()  {
    num++
    tarefasNum.innerHTML = `${num}`;
  }

  function deletar() {
    num = num - 1;
    tarefasNum.innerHTML = `${num}`;
  }
  
  
  listaTarefas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.parentElement.remove();
    }
  });


