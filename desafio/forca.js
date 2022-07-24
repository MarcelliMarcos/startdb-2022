class Forca {

  constructor(palavraSecreta) {
    this.vidas = 6;
    this.estado = "Aguardando chute...";
    this.letrasChutadas = [];
    this.palavra = [];
    this.palavraSecreta = palavraSecreta;
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      this.palavra.push('_');
    }
  }

  chutar(letra) {

    if (letra.length > 1) {
      return console.log("Você só pode digitar uma letra por vez.");
    }

    if (this.letrasChutadas.find(letraChutada => letra === letraChutada)) {
      return console.log("Você já usou esta letra.");
    }

    this.letrasChutadas.push(letra);

    if (this.palavraSecreta.indexOf(letra) < 0) {
      console.log('Errou');
      this.vidas -= 1;
    }

    if (this.vidas === 0) {
      return this.estado = "Perdeu";
    }

    let i = 0
    var index = 0
    for(i in this.palavraSecreta){
      if(letra === this.palavraSecreta[i]){
        this.palavra[index] = letra;
      }
      index ++;
    }
    if (!this.palavra.find(element => element === "_")) {
      return this.estado = "Ganhou";
    }
  }

  buscarEstado() {
    return this.estado;
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, 
      vidas: this.vidas, 
      palavra: this.palavra 
    }
  }
}

module.exports = Forca;