
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

function dispatch(name, data){
  if(document.body.contains(this.el) === false) {
    throw new Error('View must be mounted before events can be dispatched');
  }
  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true,
    cancelable: true
  });
  this.el.dispatchEvent(event);
}

function listen(name, fn){
  var self = this;
  this.el.addEventListener(name, function(e){
    fn.call(self, e, e.detail);
  });
}

module.exports = function(View) {
  View.prototype.dispatch = dispatch;
  View.prototype.listen = listen;
};