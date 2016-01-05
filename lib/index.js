function Router(routes) {
  this.routes = routes
  window.addEventListener('popstate', function(event) {
    console.log(event)
    this.route()
  }.bind(this))

  document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      if (event.target.href.startsWith(window.location.origin)) {
        event.preventDefault()
        history.pushState(null, '', event.target.attributes.href.value)
        this.route()
      }
    }
  }.bind(this))
}

Router.prototype.route = function() {

  Array.from(document.querySelectorAll('nav a'))
    .forEach((anchor) => {
      anchor.addEventListener('click', (ev) => {
        // Shows all properties of the dom node
        // console.dir(anchor.attributes.href.value);

        Array.from(document.querySelectorAll('section'))
          .forEach(function(section) {
            section.style.display = 'none'
          })

        Object.keys(this.routes).forEach(function(key) {
          console.log(this.routes[key])
          var handler = this.routes[key]
          if (key === window.location.pathname) {
            document.title = handler.title
            document.querySelector(handler.element).style.display = 'block'
          }
        })
      })
    })

  switch (window.location.pathname) {

  }
}

// class Router {
//   constructor() {
//     window.addEventListener('popstate', event => {
//     console.log(event);
//     this.route();
//   });

//   document.addEventListener('click', event => {
//     if (event.target.tagName === 'A') {
//       if (event.target.href.startsWith(window.location.origin)) {
//         event.preventDefault();
//         history.pushState(null, '', event.target.attributes.href.value);
//         this.route();
//       }
//     }
//   });
//   }
// }

module.exports = Router
