// ViewMaster - A tiny library for managing client-side views 
// Copyright Duncan Smith 2014
window.View = (function($){
  function View() {
    // Hold context, views, and transitions
    this._c = document; 
    this._v = {};
    this._t = {
      slideLeft: slideLeft,
      slideRight: slideRight
    };
    
    this._currentView = '';
    this.defaultTransition = 'slideLeft';
      
    this.context = context.bind(this);
    this.view = view.bind(this);
    this.go = go.bind(this);
    this.transition = transition.bind(this);

    function context (selector) {
      this._c = selector;
    }
    
    function transition (name, func) {
      this._t[name] = func;
    }

    function go (viewName, transitionName) {
      if (viewName === this._currentView) {
        return false;
      }
      
      this._currentView = viewName;
      
      var v = this._v[viewName]
        , c = this._c
        , transition = transitionName || this.defaultTransition
        , t = this._t[transition];
      
      t(c, v.html);
    }

    function view (viewName, selector, opts) {
      var defaults = {
        html: $(selector).html()
      };
      
      var options = opts || {};
      
      var newView = $.extend({}, defaults, options);
      this._v[viewName] = newView;
    }
    
    return this;
  }

  function slideLeft (c, v) {
    var newView = $('<div class="inTransitionContainer">' + v + '</div>');
    
    $(c).wrapInner('<div class="outTransitionContainer"></div>');
    $(c).append(newView);

    $('.inTransitionContainer').css({
      position: 'absolute',
      left: $(c).width(),
      transition: 'all 0.3s ease-in-out',
      width: '100%'
    });

    $('.outTransitionContainer').css({
      position: 'absolute',
      left: 0,
      transition: 'all 0.3s ease-in-out',
      width: '100%'
    })
    .css({
      left: $('.outTransitionContainer').width() * -1
    });

    $('.inTransitionContainer').css({
      left: 0
    });

    setTimeout(function(){
      $('.outTransitionContainer').remove();
      $('.inTransitionContainer').children().unwrap();
    }, 300);
  }

  function slideRight (c, v) {
    var newView = $('<div class="inTransitionContainer">' + v + '</div>');
    
    $(c).wrapInner('<div class="outTransitionContainer"></div>');
    $(c).append(newView);

    $('.inTransitionContainer').css({
      position: 'absolute',
      left: $('.inTransitionContainer').width() * -1,
      transition: 'all 0.3s ease-in-out',
      width: '100%'
    });

    $('.outTransitionContainer').css({
      position: 'absolute',
      left: 0,
      transition: 'all 0.3s ease-in-out',
      width: '100%'
    })
    .css({
      left: $(c).width()
    });

    $('.inTransitionContainer').css({
      left: 0
    });

    setTimeout(function(){
      $('.outTransitionContainer').remove();
      $('.inTransitionContainer').children().unwrap();
    }, 300);
  }

  return new View();
})(jQuery);
