//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Colisão da bolinha
let raio = diametro /2;

//Variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//Variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar jogo
let meusPontos = 0;
let pontosDoOponente = 0;


let colidiu = false;

//Sons do jogo
let raquetada;
let ponto;
let trilha;

//Probrabilidade de erro 
chanceDeErrar = 0;
    
function preload() {
    raquetada = loadSound("raquetada.mp3");
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBolinha();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente , yRaqueteOponente);
  //movimentoRaqueteOponenteMultiplayer();
  verificaColisaoRaquete(xRaqueteOponente , yRaqueteOponente);
  marcaPonto();
  incluirPlacas();
  movimentaRaqueteOponente();
  calculaChanceDeErrar();
  bolinhaPresa();
  
}

function mostraBolinha() {
      circle(xBolinha, yBolinha, diametro);
      
 }
  
function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
 }
  
function verificaColisaoBolinha() {
      if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  
 }

if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  
   }
   
  }

function mostraRaquete(x ,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
  
 }

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  
  }  
  
}  

function colisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento && 
        yBolinha - raio < yRaquete + raqueteAltura && 
        yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
      
    }
}

function verificaColisaoRaquete (x,y) {
      colidiu = collideRectCircle(x, y, 
      raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
         
  
  if (colidiu) {
      velocidadeXBolinha *= -1;
      raquetada.play();
  
  }
  
}

function movimentoRaqueteOponenteMultiplayer() {
   if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  
  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
  
  }  
  
}

function incluirPlacas(nome, x, y) {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
  
   
}
   
function marcaPonto() {
    if(xBolinha < 10) {
         pontosDoOponente += 1;
         ponto.play();
       }
  
    if(xBolinha > 590 ) {
        meusPontos += 1;
        ponto.play();
    }
  
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhaPresa(){
    if (xBolinha - raio < 0){
    XBolinha = 23
    }
}
