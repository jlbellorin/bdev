const render = function (template, selector) {
  const node = document.querySelector(selector);
  if (!node) return;
  node.insertAdjacentHTML('afterbegin', template);
}

export default render;