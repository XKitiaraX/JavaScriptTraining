class Vue {
  constructor(props) {
    const app = document.querySelector(props.el);

    for (let key in props.data) {
      app.innerHTML = app.innerHTML.replace(`{{${key}}}`, props.data[key])
    }
  }
}
