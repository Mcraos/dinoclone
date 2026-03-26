# 🏃‍♂️ Sonic Jump Game

Um jogo de corrida infinita inspirado no clássico "Dino Run", desenvolvido com tecnologias web fundamentais. O objetivo é ajudar o Sonic a desviar de obstáculos (espinhos) saltando no momento certo.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando:

* **HTML5**: Estruturação dos elementos do jogo, incluindo o container principal, textos de Game Over e as camadas de imagens.
* **CSS3**: 
    * Criação do cenário com gradientes lineares.
    * Animações de movimento dos obstáculos (`spike-animation`) e salto do personagem (`jump`) usando `@keyframes`.
    * Gerenciamento de posicionamento absoluto para sobreposição de elementos.
* **JavaScript**:
    * Lógica de detecção de colisão baseada na posição dos elementos no DOM.
    * Controle de estados do jogo ("run" e "gameOver").
    * Manipulação de classes CSS para disparar animações de salto via eventos de teclado.

---

## 🎮 Como Jogar

1.  Abra o arquivo `index.html` em seu navegador.
2.  Pressione **qualquer tecla** para fazer o Sonic pular e desviar dos espinhos.
3.  Se o Sonic encostar no espinho, o jogo termina com uma animação de explosão.
4.  Após o **Game Over**, pressione qualquer tecla novamente para recomeçar a partida.

---

## 🛠️ Funcionalidades Detalhadas

* **Detecção de Colisão Dinâmica**: O script monitora constantemente a posição horizontal do espinho e a altura do Sonic. Se ambos ocuparem o mesmo espaço, o loop de jogo é interrompido.
* **Sistema de Reset**: Implementação da função `document.location.reload()`, permitindo que o jogador reinicie a experiência instantaneamente após perder.
* **Feedback Visual**: 
    * O jogo alterna entre o GIF do Sonic correndo e uma animação de explosão no momento da colisão.
    * Exibição de mensagens de "GAME OVER" e instruções de reinício.

---

## 📂 Estrutura do Projeto

* `index.html`: Estrutura base e carregamento dos assets.
* `style.css`: Estilização do cenário, animações e regras de exibição.
* `script.js`: Motor do jogo e lógica de colisão.
* `/assets`: Imagens e GIFs (Sonic, Espinhos, Explosão).

---

## 🔧 Possíveis Melhorias Futuras

* Adição de um sistema de pontuação (score).
* Aumento progressivo da velocidade dos obstáculos.
* Inclusão de efeitos sonoros e música de fundo.