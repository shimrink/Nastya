// method - блок с горизонтальным скроллом
method.onmousedown = () => {
  let pageX = 0;

  document.onmousemove = e => {
    if (pageX !== 0) {
      method.scrollLeft = method.scrollLeft + (pageX - e.pageX);
    }
    pageX = e.pageX;
  };

  // заканчиваем выполнение событий
  document.onmouseup = () => {
    document.onmousemove = null;
    method.onmouseup = null;
  };

  // отменяем браузерный drag
  method.ondragstart = () => {
    return false;
  };
};
/*import ScrollBooster from 'scrollbooster';

new ScrollBooster({
  viewport: document.querySelector('.example1-viewport'),
  content: document.querySelector('.example1-content'),
  scrollMode: 'transform', // use CSS 'transform' property
  direction: 'horizontal', // allow only horizontal scrolling
  emulateScroll: true, // scroll on wheel events
});
//import ScrollBooster from 'scrollbooster';
import ScrollBooster from 'D:/Kirill/Web_Dev/Nastya/dev/static/js/scrollBooster';
//const viewport = document.querySelector('.example1-viewport');
//const content = document.querySelector('.example1-content');

new ScrollBooster({
  viewport: $('.example1-viewport'),
  content: $('.example1-content'),
  bounce: false,
  scrollMode: 'native',
  textSelection: false,
});*/