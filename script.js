const $bttrlyArray = [];
var bttrlyInterval = null;

$(document).ready(function () {
  $('#bttrly-animation').hide();
  startBttrlyAnimation();
});

function startBttrlyAnimation() {
  bttrlyInterval = setInterval(function () {
    const $newBttrly = $('#bttrly-animation').clone().removeAttr('id').fadeIn();
    const randX = Math.floor(Math.random() * ($(window).width() - 100));
    const randY = Math.floor(Math.random() * ($(window).height() - 100));
    $newBttrly.css({
      position: 'absolute',
      top: randY + 'px',
      left: randX + 'px',
      transform: Math.random() <= 0.5 ? 'scaleX(-1)' : 'scaleX(1)'
    });
    setInterval(function () {
      $newBttrly.find('img').toggle();
    }, 300);
    $newBttrly.hover(function () {
      $(this).fadeToggle();
    });
    $('body').append($newBttrly);
    $bttrlyArray.push($newBttrly);
    $('#remove-bttrly-btn').show();
    $('#stop-bttrly-btn').show();
    $('#start-bttrly-btn').hide();
    $('#start-bttrly-btn').text('let them breed!');
  }, 3000);
}
function toggleRemoveBtn() {
  $bttrlyArray.forEach($el => $el.remove());
  $bttrlyArray.length = 0;
  $('#remove-bttrly-btn').hide();
}
function stopBttrlyAnimation() {
  clearInterval(bttrlyInterval);
  $('#stop-bttrly-btn').hide();
  $('#start-bttrly-btn').show();
}
$('#start-bttrly-btn').on('click', function () {
  const $btn = $(this);
  $btn.text('wait ...');
  startBttrlyAnimation();
});



const buttons = ['Home', 'About', 'Projects', 'Experiments'];
var active = 'Home';
$(`#${active.toLowerCase()}`).show();
$(`#btn${active}`)
      .addClass('bg-purple-300 translate-x-4 shadow-xl');

buttons.forEach((name) => {
  $(`#btn${name}`).click(function () {
    $(`#${active.toLowerCase()}`).hide();
    $(`#btn${active}`)
      .removeClass('bg-purple-300 translate-x-4 shadow-xl')
      .addClass('bg-purple-200');

    active = name;
    $(`#${active.toLowerCase()}`).show();
    $(`#btn${active}`)
      .removeClass('bg-purple-200')
      .addClass('bg-purple-300 translate-x-4 shadow-xl');
  });
});