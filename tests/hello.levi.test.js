import hello from '../utils/hello.levi.js';
import assert from 'assert';

it ("Should say hello", ()=>{
    const hi = hello();
    // console.log("This is the value of " + hi)
    assert.equal(hi,"hello");

});