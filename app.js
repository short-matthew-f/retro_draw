// 1
const PALETTE = [
  "red", "orange", "yellow", "green", "blue", "rebeccapurple", "pink", "white", "black"
];

// 1
function makePalette() {
  let palette = $('.palette');

  for (let i = 0; i < PALETTE.length; i++) {
    let button = $('<button>')
    button.css('backgroundColor', PALETTE[i])
    palette.append(button)
  }
}

makePalette()

// 1
function makeGrid() {
  let grid = $('.grid');

  for (let i = 0; i < 64; i++) {
    let cell = $('<div class="cell"></div>');
    grid.append(cell);
  }
}

makeGrid();

// 2
$('.palette button').click(function () {
  $('.active').removeClass('active');
  $(this).addClass('active');
});

// 2
$('.cell').click(function () {
  let activeColor = $('.palette .active').css('backgroundColor');
  let cellColor = $(this).css('backgroundColor');

  if (cellColor === activeColor) {
    //3
    $(this).css('backgroundColor', '');
  } else {
    // 2
    $(this).css('backgroundColor', activeColor);
  }
});

// 2
$('.clear').click(function () {
  $('.cell').css('backgroundColor', '');
});

// 2
$('.fill').click(function () {
  let activeColor = $('.palette .active').css('backgroundColor');
  $('.cell').css('backgroundColor', activeColor);
})

// 3
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