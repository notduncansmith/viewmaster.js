# ViewMaster

A tiny library for managing front-end views


## How it works

ViewMaster takes a single DOM element, (the *context*), and transitions pieces of markup (*views*) in and out of that context.  ViewMaster uses user-defined functions (called *transitions*) to manage the moving of views in and out.  It also comes with a few ready-made transitions.


## Usage

ViewMaster exposes a global object, `View`. ViewMaster needs a context to operate on, so let's give it one. You can pass any valid jQuery selector to `View.context()`.

```javascript
  
  View.context('#main');

```


Next we'll need some views.  The most effective way to store the views in the DOM is in a `<script>` tag, since these are not parsed by the browser.

```html
  
  <script id="hello">
    <h1>Hello, world!</h1>
  </script>

```

Now that we have a view, let's tell ViewMaster about it.  We do this with a call to `View.view()`, which takes the view name and a jQuery selector.  ViewMaster will query that selector, and take the HTML contents of the first matching element.

```javascript

  View.view('hello', '#hello');

```

Finally, it's time to go to a view!  We use `View.go()` to navigate the context to a view, passing in the view name (which we defined earlier), and optionally a transition name.  ViewMaster ships with a transition called `slideLeft`, so we'll use that.

```javascript

  View.go('hello', 'slideLeft');

```

Note that we didn't actually have to pass in `slideLeft`, since it's the default transition.  That line could have been written simply as: 

```

  View.go('hello');

```

That's it!  Go build something cool.
