var assert = require('assert');
var dispatch = require('dispatch');
var createView = require('view');

describe('dispatch', function(){
  var View;

  beforeEach(function(){
    View = createView('<div></div>');
  });

  it('should mixin to a view', function(done){
    View.use(dispatch);
    var view = new View();
    document.body.appendChild(view.el);
    view.listen('test', function(){
      done();
    });
    view.dispatch('test');
  });

  it('should emit data', function(done){
    View.use(dispatch);
    var view = new View();
    document.body.appendChild(view.el);
    view.listen('test', function(e, data){
      assert(data.name === "fred");
      done();
    });
    view.dispatch('test', {
      name: "fred"
    });
  });

  it('should bubble', function(done){
    View.use(dispatch);
    var parent = new View();
    var child = new View();
    parent.el.appendChild(child.el);
    document.body.appendChild(parent.el);
    parent.listen('test', function(){
      done();
    });
    child.dispatch('test');
  });

  it('should throw an error if not mounted', function (done) {
    View.use(dispatch);
    var parent = new View();

    try {
      parent.dispatch('test');
    }
    catch(e) {
      assert(e.message = "View must be mounted before events can be dispatched");
      done();
    }
  });

});