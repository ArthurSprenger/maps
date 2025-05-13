function exibirRotas() {
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
  
    if (!origem || !destino) {
      alert("Preencha origem e destino.");
      return;
    }
  
    alert(`Simulando rotas de ${origem} para ${destino} (ida e volta).`);
    // Aqui, você pode integrar futuramente com a API do Google Maps para gerar rotas reais
  }
  