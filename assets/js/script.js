/* TODO 1
 *  A função em cada botão altera a cor do box
 */

const color_box = document.getElementById('color_box');

const gray_button = document.getElementById('gray_button');

gray_button.addEventListener('click', () => {
  color_box.className = 'gray';
});

const blue_button = document.getElementById('blue_button');
blue_button.addEventListener('click', () => {
  color_box.className = 'blue';
});

const pink_button = document.getElementById('pink_button');
pink_button.addEventListener('click', () => {
  color_box.className = 'pink';
});

/* TODO 2
 *  A função incrementa 1 em um contador "count",
 *  atualiza o conteúdo de texto do "countspan"
 *  e mostra o valor atual de "count".
 */
let count = 0;
const countspan = document.getElementById('countspan');

const counter_button = document.getElementById('counter_button');
counter_button.addEventListener('click', () => {
  count += 1;
  countspan.innerText = count;
});

/* TODO 3
 * A função mostra um "alert dialog" mostrando se o contador
 * (da segunda tarefa (TODO 2)) é par ou impar.
 */

const even_or_odd_button = document.getElementById('even_or_odd_button');
even_or_odd_button.addEventListener('click', () => {
  if (count % 2 === 0) {
    alert('Par');
  } else {
    alert('Impar');
  }
});
