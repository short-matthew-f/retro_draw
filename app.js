const COLORS = [
  "red", "orange", "yellow", "green", "blue", "rebeccapurple", "pink", "white", "black"
];

function makePalette() {
  let palette = $('.palette');

  for (let i = 0; i < COLORS.length; i++) {
    let button = $('<button>')
    button.css('backgroundColor', COLORS[i])
    palette.append(button)
  }
}

makePalette()

function makeGrid() {
  let grid = $('.grid');

  for (let i = 0; i < 64; i++) {
    let cell = $('<div class="cell"></div>');
    grid.append(cell);
  }
}

makeGrid();

$('.palette button').click(function () {
  $('.active').removeClass('active');
  $(this).addClass('active');
});

$('.cell').click(function () {
  let activeColor = $('.palette .active').css('backgroundColor');
  let cellColor = $(this).css('backgroundColor');

  if (cellColor === activeColor) {
    $(this).css('backgroundColor', '');
  } else {
    $(this).css('backgroundColor', activeColor);
  }
});

$('.clear').click(function () {
  $('.cell').css('backgroundColor', '');
});

$('.fill').click(function () {
  let activeColor = $('.palette .active').css('backgroundColor');
  $('.cell').css('backgroundColor', activeColor);
})

$('.fill-empty').click(function () {
  let activeColor = $('.palette .active').css('backgroundColor');
  let cells = $('.cell');

  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];

    if ($(cell).css('backgroundColor') == 'rgba(0, 0, 0, 0)') {
      $(cell).css('backgroundColor', activeColor);
    }
  }
});