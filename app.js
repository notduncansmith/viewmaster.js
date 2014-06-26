function View() {
  this._c = {};
  this._v: {};
  this._t = {};
  this.context = context.bind(this);
  this.view = view.bind(this);
  this.go = go.bind(this);
  this.options = {
    defaultTransition: 'slideLeft'
  };



  function context (name, selector) {
    this._c[name] = $(selector);
  }


  function go (contextName, viewName, transitionName) {
    var c = this._c[contextName]
      , v = this._v[viewName]
      , t = this._t[transitionName] || this.options.defaultTransition;
    // TODO: change views
  }


  function view (viewName, selector, options) {
    var defaults = {
      markup: $(selector).html(),
      transition: this.defaultTransition
    };

    this._v[viewName] = $.extend({}, defaults, options);
  }

}
