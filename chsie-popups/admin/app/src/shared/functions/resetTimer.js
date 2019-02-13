// A reusable timer that resets when called again.
// It is a curried function.  Yay closures!

/**
 *  TO USE (Class Component):
 *
 *  1. Call the function and save to a variable, as in:
 *        resetTimer = resetTimer()
 *     This doesn't have to be done in the constructor, and you don't need to .bind( this ).
 *
 *  2. In your event handler, call:
 *        this.resetTimer( callback.bind(this), 1000 )
 *
 *     A common mistake is to invoke the callback--don't.  It needs to be called
 *     by reference in setTimeout(), so if you're calling it with parameters...
 *
 *        a. wrap it in a function definition
 *           - or -
 *        b. utilize the setTimeout param syntax after the time param, like so:
 *            this.resetTimer( callback.bind(this), 1000, param1, [param2...] )
 *
 *  3. Profit!
 */

const resetTimer = () => {
  let timer = undefined

  return ( callback, ms, ...params ) => {
    if ( typeof timer === 'number') {
      clearTimeout( timer )
      console.log("timer " + timer + " cleared.");
    }
    timer = setTimeout( callback, ms, ...params )
    console.log("timer " + timer + " set.");
  }
}

export default resetTimer
