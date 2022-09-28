# Desafio com 16 projetos:
Assim que me formei na faculdade, percebi que havia **muitas tecnolgias, métodos e técnicas** que deveria conhecer e me aprofundar, muito além do que me foi ensinado na faculdade. Por conta disto, me desafiei a melhorar meus conhecimentos em programação (especificamente, em desenvolvimento web) para que, com a prática, eu compreenda onde, como e porquê usarei as tecnologias. Esses 16 desafios irão ocorrer entre 2022 e 2023, e irei upar todos eles no meu perfil no GitHub.

Com tudo isso explicado, gostaria de mostrar todos os meus passos rumo a me tornar um excelente desenvolvedor e profissional. E com isso, espero que, para quem esteja lendo esse meu manifesto, possa encontrar em mim alguém que irá agregar em sua equipe, empresa ou mesmo em um trabalho freelancer, ou ainda, alguém que possa te ajudar a chegar aonde gostaria de estar.

Atenciosamente,
**Anderson H. Queiroz - 21 de setembro de 2022**

---

# 1º Projeto - WebCalculator.

## Sobre:

A WebCalculator conta com duas entradas para números (sem vírgulas, na versão atual, pois mesmo colocando vírgula, o resulta irá sair inteiro), uma saída com o resultado e sete botões para o processamento dos valores e troca de temas. Os botões são os seguintes:

- **Limpar os Campos:**
Limpa todos os campos de entrada e saída.

- **Somar:**
Faz a soma entre o primeiro número e o segundo número.

- **Subtrair:**
Faz a subtração entre o primeiro número e o segundo número.

- **Multiplicar:**
Faz a multiplicação entre o primeiro número e o segundo número.

- **Dividir:**
Faz a divisão entre o primeiro número e o segundo número.

- **Dark Theme:**
Altera o tema para o modo escuro.

- **Light Theme:**
Recarrega a página de volta ao tema claro (padrão).

**Atenção:**
> ***Nessa versão (1.0) ainda não coloquei uma função em JS para salvar a preferência de tema escolhido pelo usuário, essa opção será colocada futuramente, portanto quando recarregar a página ela voltará para o tema padrão.***

> ***Ao escolher o tema escuro e depois selecionar o tema claro devolta, a página será RECARREGADA, portanto se possuir algum valor nas entradas ou na saída, eles serão resetados.***

---

## Cores e Fontes:

As cores foram alocadas dentro de varíaveis, tornando mais fácil a troca de cores entre os temas (escuro e claro).

### Light Theme:

- **Cor de fundo da página:**
--color-background: linear-gradient(to right,#02AAB0,#00CDAC);

- **Cor de fundo da janela:**
--color-window-background: #09857D3F;

- **Cor das fontes:**
--color-font: #F1F1F1;

- **Cor dos inputs (entradas):**
--color-input: #66E5DE;

- **Sombra dentro dos inputs:**
--color-input-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.5);

- **Cor dos inputs quando o mouse estiver sobre o input (:hover):**
--color-input-select: #77F6EF;

- **Cor das fontes internas dos inputs e do output:**
--color-input-font: #444444;

- **Cor dos botões:**
--color-button: #09857D;

- **Cor dos botões quando o mouse estiver sobre o botão (:hover):**
--color-button-select: #10968E;

- **Sombra dentro dos botões (Light Theme e Dark Theme) quando selecionados:**

--btn-select-lightmode: inset 4px 4px 4px rgba(0, 0, 0, 0.5);
> ***Aqui acima, é colocada a sombra dentro do botão com o Sol (referente ao Light Theme***

--btn-select-darkmode: none;
> ***Já aqui é colocado none para retirar a sombra de dentro do botão com a Lua (referente ao Dark Theme)***

---

### Dark Theme:

- **Cor de fundo da página:**
--color-background: #000000;

- **Cor de fundo da janela:**
--color-window-background: #181818;

- **Cor das fontes:**
--color-font: #F1F1F1;
> ***ACIMA - Continua a mesma do Light Theme***

- **Cor dos inputs (entradas):**
--color-input: #232222;

- **Sombra dentro dos inputs:**
--color-input-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.5);
> ***ACIMA - Continua a mesma do Light Theme***

- **Cor dos inputs quando o mouse estiver sobre o input (:hover):**
--color-input-select: #343333;

- **Cor das fontes internas dos inputs e do output:**
--color-input-font: #F1F1F1;

- **Cor dos botões:**
--color-button: #444444;

- **Cor dos botões quando o mouse estiver sobre o botão (:hover):**
--color-button-select: #555555;

- **Sombra dentro dos botões (Light Theme e Dark Theme) quando selecionados:**

--btn-select-darkmode: inset 4px 4px 4px rgba(0, 0, 0, 0.5);
> ***Aqui acima, é colocada a sombra dentro do botão com a Lua (referente ao Dark Theme)***

--btn-select-lightmode: none;
> ***Já aqui é colocado none para retirar a sombra de dentro do botão com o Sol (referente ao Light Theme)***

---

### Fontes:

- **Link:**
  - @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&family=Righteous&display=swap');

 

- **Righteous:**
font-family: 'Righteous', cursive;
  - 400 (regular)
  - 700 (bold)

 

- **Exo 2:**
font-family: 'Exo 2', sans-serif;
  - 400 (regular)
  - 700 (bold)


---
- **Autor:** Anderson H. Queiroz;
- **Mês e Ano:** Setembro, 2022;
- **Última versão:** 1.0 (28 de setembro de 2022);
- **Ferramentas e Linguagens:** Figma (Protótipo), HTML, CSS e JavaScript.
