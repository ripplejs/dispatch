# dispatch

  Plugin for `ripplejs/view` to emit custom DOM events that bubble up
  the tree so that parent views can listen to them. The benefit of this
  is that a parent view doesn't need to know anything about the child
  views at all, it's just listening to the DOM.

## Installation

  Install with [component(1)](http://component.io):

    $ component install ripplejs/dispatch

## CustomEvent Shim

This plugin uses the `CustomEvent` API. This isn't available in IE9
but you can add it with this shim:

```js
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
if(typeof CustomEvent === "undefined") {
  function CustomEvent (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.CustomEvent.prototype;
  window.CustomEvent = CustomEvent;
}
```

## API

This is a plugin for [ripple](https://github.com/ripplejs/ripple). So look at
the [documentation](https://github.com/ripplejs/ripple) to get a better understanding of what's happening below.

You'll use it as a plugin:

```js
var View = ripple(template);
View.use(dispatch);
```

In a child view:

```js
var ripple = require('ripple');

var View = ripple(template)
  .use(dispatch);

View.ready(function(){
  this.dispatch('user updated', user, id);
});
```

Then in a parent view, you just listen on the DOM:

```js
var ripple = require('ripple');

var View = ripple(template)
  .use(dispatch);

View.ready(function(){
  this.dispatchListener('user updated', function(event, user, id){
    console.log(user);
  });
});
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
