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
  method.onmouseup = () => {
    document.onmousemove = null;
    method.onmouseup = null;
  };

  // отменяем браузерный drag
  method.ondragstart = () => {
    return false;
  };
};