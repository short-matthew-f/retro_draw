function makeGrid() {
  let grid = $('.grid');

  for (let i = 0; i < 64; i++) {
    let cell = $('<div></div>');
    cell.attr('class', 'cell');
    grid.append(cell);
  }
}

makeGrid();

$('.palette').on('click', 'button', function () {
  $('.active').removeClass('active');
  $(this).addClass('active');
});

$('.grid').on('click', '.cell', function () {
  let activeColor = $('.palette .active').css('backgroundColor');
  $(this).css('backgroundColor', activeColor);
});

$('.clear').on('click', function () {
  $('.cell').css('backgroundColor', '')
})

$('.fill').on('click', function () {
  let activeColor = $('.palette .active').css('backgroundColor');
  $('.cell').css('backgroundColor', activeColor)
})

$('.fill-empty').on('click', function () {
  let activeColor = $('.palette .active').css('backgroundColor');

  $('.cell').each(function (index, cell) {
    if ($(cell).css('backgroundColor') == 'rgba(0, 0, 0, 0)') {
      $(cell).css('backgroundColor', activeColor)
    }
  })
})