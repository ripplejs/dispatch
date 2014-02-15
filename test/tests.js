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
    view.dispatchListener('test', function(){
      done();
    });
    view.dispatch('test');
  });

  it('should emit data', function(done){
    View.use(dispatch);
    var view = new View();
    document.body.appendChild(view.el);
    view.dispatchListener('test', function(e, data){
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
    parent.dispatchListener('test', function(){
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

  it('should pass in all args in sequence', function(done){
    View.use(dispatch);
    var view = new View();
    document.body.appendChild(view.el);
    view.dispatchListener('test', function(e, one, two, three){
      assert(one === "one");
      assert(two === "two");
      assert(three === "three");
      done();
    });
    view.dispatch('test', "one", "two", "three");
  })

});