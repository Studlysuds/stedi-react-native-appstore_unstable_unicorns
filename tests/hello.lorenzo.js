import hello from '../utils/hello.lorenzo.js';
import assert from 'assert';

it ("Should say hello", ()=>{
    const hi = hello();
    // console.log("This is the value of " + hi)
    assert.equal(hi,"hello");

});