
# dispatch

  Plugin for `ripplejs/view` to emit custom DOM events that bubble up
  the tree so that parent views can listen to them. The benefit of this
  is that a parent view doesn't need to know anything about the child
  views at all, it's just listening to the DOM.

## Installation

  Install with [component(1)](http://component.io):

    $ component install ripplejs/dispatch

## API

```js
var dispatch = require('dispatch');

View.use(dispatch);
```

In a child view:

```
this.dispatch('user updated', user, id);
```

Then in a parent view, you just listen on the DOM:

```
this.listen('user updated', function(user, id){
  // Do things
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