(function(){
// ###1
    QUnit.test( "Our First Test", function( assert ) {
      var value = "hello tests";
      var some_number = 484;
  
      //                     ┌ Change this to what it should be
      assert.equal( value, "hello tests");
      //                           ┌ Change this to what it should be
      assert.equal( some_number, 484);
    });
  
    // ###2
    QUnit.test("Functions can access/modify variables in parent scope.", function(assert){
      var outside_the_function = null; // global scoped

      function yay(){
        var inside_the_function = "can you see me?"; //function scoped
        outside_the_function = inside_the_function; 
      }
  
      yay();
  
      assert.equal(outside_the_function, "can you see me?");
    });
  
    // ###3
    QUnit.test("Function Parameters become scoped to the function.", function(assert){
  
      function yay(param){
        assert.equal(param, "a fine kettle of fish");
      }
  
      yay("a fine kettle of fish");
    });
  
    //###4
    QUnit.test("A functions local scope is not available in an outer scope.", function(assert){
      function yay(){
        var kix = "kid tested mother approved";
        assert.equal(kix, "kid tested mother approved");
      }
      yay();
      
      var has_kix;
      // NOTE:
      // "this" is a special object that by default represents the global scope.
      // variables declared globally are stored as a property on the object: this.<variable>
      // if the variable is not global then this.<variable> will be undefined
      // 
      // SO
      // 
      // if the global kix is undefined (not present) has_kix is assigned the value of kix 
      // "kid tested mother approved"
      if(this.kix !== undefined){
        has_kix = kix;
      } else {
        has_kix = "i prefer cheerios";
      }
      assert.equal(has_kix, "i prefer cheerios");
    });
  
    // ###5
    QUnit.test("Functions don't have access to eachothers scope", function(assert){
      function yay(){
        // Var declared in yay is function scoped...
        var from_yay = "i'm inside yay;";
      }
  
      function foo(){
        // Same here for foo...
        var in_foo = "i'm in foo";

        // if the global scope "from_yay" DOES NOT equal undefined 
        // (meaning it DOES have it, because then it is its string value NOT undefined.)
        if(this.from_yay !== undefined){
          // we change in_foo to "i'm inside yay."
          // So if we can access it to change it we do so. 
          in_foo = this.from_yay;
        }
        // now the tests
        // Testing the original in_foo value?
        assert.equal(in_foo, "i'm in foo");
        // checking the global value of from yay...
        // which I guess would be undefined because it is function scoped from above?
        assert.equal(this.from_yay, undefined);
      }
      yay();
      foo();
    });
  
    // ##6
    QUnit.test("Inner scope variables override outter scope variables.", function(assert){
  // global peanuts assigned 300
      var peanuts = 300;
  
      //  the func completely overrides the datatype
      function yay(){
        var peanuts = "roasted";
  
        // checks the value inside the function
        assert.equal(peanuts, "roasted");
      }
      // calls the function
      yay();
  
      // checks the value outside the function, I don't understand...the function was called so it
      // seems like it should be reset...?
      assert.equal(peanuts, 300);
    });
  
  
    // ##7
    QUnit.test("Variables created with var in a funtion are re-created each time", function(assert){
      function yay(){
        // if a global .counter exists...
        if(this.counter !== undefined){
          // increment counter (if it exists on each yay() call...)
          counter = counter + 1;
          // if it DOES NOT exist, set it to 10 (NOT increment by 10)
        } else {
          var counter = 10;
        }
      }
  
      yay();
      assert.equal(this.counter, "10");
      yay();
      assert.equal(this.counter, "10");
      yay();
      assert.equal(this.counter, "10");
    });
  
  
    // ### 8
    QUnit.test("Inner scope can access outer scope", function(assert){
      var im_outside = "alpha";
      function yay(){
        var im_inside = "omega";
        return im_outside + im_inside;
      }
  
      assert.equal(yay(), "???");
    });
  
    QUnit.test("Functions retain outer scope references between calls.", function(assert){
      var im_outside = 13;
      function yay(){
        im_outside += 1;
      }
  
      yay();
      assert.equal(im_outside, "???");
      yay();
      assert.equal(im_outside, "???");
    });
  
    QUnit.test("We can do goofy stuff with outer scope", function(assert){
  
      var hello = "greg";
      var name = "";
  
      function yay(){
        name += hello;
      }
  
      yay();
      assert.equal(name, "???");
      yay();
      assert.equal(name, "???");
      yay();
      assert.equal(name, "???");
    });
  
    QUnit.test("We can pass functions to other functions and then run them.", function(assert){
      var im_outter = 10;
      function yay(){
        im_outter /= 5;
      }
      function something(whatever){
        im_outter *= 20;
        whatever();
      }
      something(yay);
      assert.equal(im_outter, "???");
  
    });
  
    QUnit.test("We can get crazy with returns.", function(assert){
      function yay(){
        return " is dog";
      }
      function foo(whatever){
        return "hello, this" + whatever();
      }
      assert.equal(foo(yay), "???");
    });
  
  })();