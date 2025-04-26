function mostrar(tipo) {
    const disciplinas = ['matematica', 'fisica', 'quimica'];
    disciplinas.forEach(disciplina => {
      const atividades = document.getElementById(`${disciplina}-atividades`);
      const provas = document.getElementById(`${disciplina}-provas`);

      if (atividades) atividades.classList.add('hidden');
      if (provas) provas.classList.add('hidden');

      if (tipo === 'atividades' && atividades) {
        atividades.classList.remove('hidden');
      } else if (tipo === 'provas' && provas) {
        provas.classList.remove('hidden');
      }
    });
  }