function exibirRotas() {
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
  
    if (!origem || !destino) {
      alert("Preencha origem e destino.");
      return;
    }
  
    alert(`Simulando rotas de ${origem} para ${destino} (ida e volta).`);
  }
  