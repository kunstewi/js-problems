# How Async JavaScript Works Under the Hood

## Table of Contents
1. [The JavaScript Runtime](#the-javascript-runtime)
2. [The Call Stack](#the-call-stack)
3. [Web APIs](#web-apis)
4. [The Event Loop](#the-event-loop)
5. [Task Queue (Callback Queue)](#task-queue-callback-queue)
6. [Microtask Queue](#microtask-queue)
7. [Execution Order](#execution-order)
8. [Practical Examples](#practical-examples)

---

## The JavaScript Runtime

JavaScript is **single-threaded**, meaning it can only execute one piece of code at a time. However, it can handle asynchronous operations through a sophisticated mechanism involving several components:

```
┌─────────────────────────────────────────────────────────┐
│                   JavaScript Engine                      │
│  ┌──────────────┐         ┌─────────────────────────┐  │
│  │  Call Stack  │         │        Heap             │  │
│  │              │         │   (Memory Allocation)   │  │
│  └──────────────┘         └─────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      Web APIs                            │
│  • setTimeout/setInterval                                │
│  • DOM APIs                                              │
│  • fetch/XMLHttpRequest                                  │
│  • Promises                                              │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                     Event Loop                           │
│  ┌──────────────────┐    ┌──────────────────────────┐  │
│  │ Microtask Queue  │    │   Task Queue (Macrotask) │  │
│  │  • Promises      │    │   • setTimeout           │  │
│  │  • queueMicrotask│    │   • setInterval          │  │
│  │  • MutationObs.  │    │   • I/O operations       │  │
│  └──────────────────┘    └──────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## The Call Stack

The **call stack** is a LIFO (Last In, First Out) data structure that tracks function execution.

### How it works:
1. When a function is called, it's pushed onto the stack
2. When a function returns, it's popped off the stack
3. The stack keeps track of where we are in program execution

### Example:

```javascript
function multiply(a, b) {
    return a * b;
}

function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
    const result = square(n);
    console.log(result);
}

printSquare(4);
```

**Call Stack Visualization:**
```
Step 1: printSquare(4) called
┌──────────────────┐
│  printSquare(4)  │
└──────────────────┘

Step 2: square(4) called inside printSquare
┌──────────────────┐
│    square(4)     │
├──────────────────┤
│  printSquare(4)  │
└──────────────────┘

Step 3: multiply(4, 4) called inside square
┌──────────────────┐
│  multiply(4, 4)  │
├──────────────────┤
│    square(4)     │
├──────────────────┤
│  printSquare(4)  │
└──────────────────┘

Step 4: multiply returns, popped off
┌──────────────────┐
│    square(4)     │
├──────────────────┤
│  printSquare(4)  │
└──────────────────┘

Step 5: square returns, popped off
┌──────────────────┐
│  printSquare(4)  │
└──────────────────┘

Step 6: printSquare completes
┌──────────────────┐
│     (empty)      │
└──────────────────┘
```

---

## Web APIs

Web APIs are provided by the browser (or Node.js runtime) and handle asynchronous operations **outside** the JavaScript engine. This is how JavaScript achieves non-blocking behavior despite being single-threaded.

Common Web APIs:
- `setTimeout` / `setInterval`
- DOM event listeners
- `fetch` / `XMLHttpRequest`
- `Promise` constructor
- `requestAnimationFrame`

### Example:

```javascript
console.log('Start');

setTimeout(() => {
    console.log('Timeout callback');
}, 0);

console.log('End');
```

**What happens:**
1. `console.log('Start')` executes immediately
2. `setTimeout` is called, the callback is sent to the Web API
3. `console.log('End')` executes immediately
4. After 0ms, the Web API places the callback in the Task Queue
5. Event loop moves it to the call stack when empty
6. `console.log('Timeout callback')` executes

**Output:**
```
Start
End
Timeout callback
```

---

## The Event Loop

The **event loop** is the mechanism that coordinates the execution of code, collecting and processing events, and executing queued sub-tasks.

### Event Loop Algorithm:

```javascript
while (true) {
    // 1. Execute all synchronous code on the call stack
    if (callStack.hasWork()) {
        callStack.executeNext();
    }
    
    // 2. When call stack is empty, check microtask queue
    else if (microtaskQueue.hasWork()) {
        microtaskQueue.executeAll(); // Execute ALL microtasks
    }
    
    // 3. When microtask queue is empty, check task queue
    else if (taskQueue.hasWork()) {
        taskQueue.executeOne(); // Execute ONE task
        // Then go back to step 2 (check microtasks again)
    }
    
    // 4. Render if needed (in browsers)
    else if (needsRendering()) {
        render();
    }
}
```

**Key Points:**
- The event loop continuously checks if the call stack is empty
- It prioritizes microtasks over macrotasks
- It executes ALL microtasks before moving to the next macrotask
- It executes ONE macrotask at a time

---

## Task Queue (Callback Queue)

Also called the **Macrotask Queue**, this holds callbacks from:
- `setTimeout`
- `setInterval`
- `setImmediate` (Node.js)
- I/O operations
- UI rendering

### Example:

```javascript
setTimeout(() => console.log('Timeout 1'), 0);
setTimeout(() => console.log('Timeout 2'), 0);
setTimeout(() => console.log('Timeout 3'), 0);

console.log('Synchronous');
```

**Output:**
```
Synchronous
Timeout 1
Timeout 2
Timeout 3
```

---

## Microtask Queue

The **Microtask Queue** has **higher priority** than the Task Queue. It holds:
- Promise callbacks (`.then`, `.catch`, `.finally`)
- `queueMicrotask()`
- `MutationObserver` callbacks
- `process.nextTick()` (Node.js - highest priority)

### Example:

```javascript
console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve()
    .then(() => console.log('Promise 1'))
    .then(() => console.log('Promise 2'));

console.log('End');
```

**Output:**
```
Start
End
Promise 1
Promise 2
Timeout
```

**Why?**
1. Synchronous code runs first: `Start`, `End`
2. Call stack is empty, event loop checks microtask queue
3. All promise callbacks execute: `Promise 1`, `Promise 2`
4. Microtask queue is empty, event loop checks task queue
5. Timeout callback executes: `Timeout`

---

## Execution Order

### Priority (Highest to Lowest):

1. **Synchronous Code** (Call Stack)
2. **Microtasks** (Promise callbacks, queueMicrotask)
3. **Macrotasks** (setTimeout, setInterval)

### Complex Example:

```javascript
console.log('1: Sync');

setTimeout(() => console.log('2: Timeout 1'), 0);

Promise.resolve()
    .then(() => {
        console.log('3: Promise 1');
        setTimeout(() => console.log('4: Timeout 2'), 0);
    })
    .then(() => console.log('5: Promise 2'));

setTimeout(() => console.log('6: Timeout 3'), 0);

Promise.resolve()
    .then(() => console.log('7: Promise 3'));

console.log('8: Sync');
```

**Step-by-step execution:**

```
Call Stack: [console.log('1: Sync')]
Output: "1: Sync"

Call Stack: [setTimeout callback registered]
Task Queue: [Timeout 1 callback]

Call Stack: [Promise.resolve().then() registered]
Microtask Queue: [Promise 1 callback]

Call Stack: [setTimeout callback registered]
Task Queue: [Timeout 1 callback, Timeout 3 callback]

Call Stack: [Promise.resolve().then() registered]
Microtask Queue: [Promise 1 callback, Promise 3 callback]

Call Stack: [console.log('8: Sync')]
Output: "8: Sync"

--- Call Stack Empty, Check Microtasks ---

Microtask Queue: [Promise 1 callback, Promise 3 callback]
Execute: Promise 1 callback
Output: "3: Promise 1"
Task Queue: [Timeout 1 callback, Timeout 3 callback, Timeout 2 callback]
Microtask Queue: [Promise 3 callback, Promise 2 callback]

Execute: Promise 3 callback
Output: "7: Promise 3"

Execute: Promise 2 callback
Output: "5: Promise 2"

--- Microtask Queue Empty, Check Task Queue ---

Task Queue: [Timeout 1 callback, Timeout 3 callback, Timeout 2 callback]
Execute: Timeout 1 callback (ONE task)
Output: "2: Timeout 1"

--- Check Microtasks Again (empty) ---

Execute: Timeout 3 callback
Output: "6: Timeout 3"

Execute: Timeout 2 callback
Output: "4: Timeout 2"
```

**Final Output:**
```
1: Sync
8: Sync
3: Promise 1
7: Promise 3
5: Promise 2
2: Timeout 1
6: Timeout 3
4: Timeout 2
```

---

## Practical Examples

### Example 1: Classic Interview Question

```javascript
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
    Promise.resolve().then(() => console.log('Promise in Timeout 1'));
}, 0);

Promise.resolve()
    .then(() => {
        console.log('Promise 1');
        setTimeout(() => console.log('Timeout in Promise 1'), 0);
    })
    .then(() => console.log('Promise 2'));

setTimeout(() => console.log('Timeout 2'), 0);

console.log('End');
```

**Output:**
```
Start
End
Promise 1
Promise 2
Timeout 1
Promise in Timeout 1
Timeout 2
Timeout in Promise 1
```

**Explanation:**
1. Sync: `Start`, `End`
2. Microtasks: `Promise 1`, `Promise 2`
3. Macrotask: `Timeout 1` (creates microtask)
4. Microtask: `Promise in Timeout 1`
5. Macrotask: `Timeout 2`
6. Macrotask: `Timeout in Promise 1`

---

### Example 2: Async/Await Under the Hood

```javascript
async function asyncFunc() {
    console.log('Async Start');
    await Promise.resolve();
    console.log('After Await');
}

console.log('Script Start');
asyncFunc();
console.log('Script End');
```

**This is equivalent to:**

```javascript
function asyncFunc() {
    console.log('Async Start');
    return Promise.resolve().then(() => {
        console.log('After Await');
    });
}

console.log('Script Start');
asyncFunc();
console.log('Script End');
```

**Output:**
```
Script Start
Async Start
Script End
After Await
```

**Why?**
- `await` pauses the async function and returns control
- The code after `await` is scheduled as a microtask
- Synchronous code continues
- Microtask executes when call stack is empty

---

### Example 3: Event Loop Starvation

```javascript
console.log('Start');

// This will block the event loop!
setTimeout(() => console.log('Timeout'), 0);

Promise.resolve().then(function infiniteMicrotasks() {
    console.log('Microtask');
    Promise.resolve().then(infiniteMicrotasks);
});

console.log('End');
```

**Output:**
```
Start
End
Microtask
Microtask
Microtask
... (infinite)
```

**Problem:** The timeout callback will **never execute** because:
1. Microtasks have higher priority
2. Each microtask creates a new microtask
3. The microtask queue never empties
4. The event loop never reaches the task queue

---

### Example 4: Real-World Fetch Example

```javascript
console.log('1: Start fetching');

fetch('https://api.example.com/data')
    .then(response => {
        console.log('2: Response received');
        return response.json();
    })
    .then(data => {
        console.log('3: Data parsed', data);
    })
    .catch(error => {
        console.log('Error:', error);
    });

console.log('4: Fetch initiated');

setTimeout(() => {
    console.log('5: Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('6: Immediate Promise');
});
```

**Output (assuming successful fetch):**
```
1: Start fetching
4: Fetch initiated
6: Immediate Promise
2: Response received
3: Data parsed [data object]
5: Timeout
```

**What happens:**
1. Sync code: `1`, `4`
2. Immediate microtask: `6`
3. When fetch completes (Web API), response callback is queued as microtask
4. Microtask: `2`, then `3`
5. Macrotask: `5`

---

## Key Takeaways

1. **JavaScript is single-threaded** but achieves concurrency through the event loop
2. **Call Stack** executes synchronous code
3. **Web APIs** handle async operations in the background
4. **Event Loop** coordinates between call stack and queues
5. **Microtasks** (Promises) have higher priority than **Macrotasks** (setTimeout)
6. The event loop executes **ALL microtasks** before moving to the next macrotask
7. `async/await` is syntactic sugar over Promises
8. Understanding this model is crucial for debugging timing issues and avoiding common pitfalls

---

## Visual Summary

```
┌─────────────────────────────────────────────────────────┐
│  1. Execute all synchronous code (Call Stack)           │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  2. Execute ALL microtasks (Promise callbacks)          │
│     - Keep executing until queue is empty               │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  3. Execute ONE macrotask (setTimeout, etc.)            │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  4. Go back to step 2 (check microtasks again)          │
└─────────────────────────────────────────────────────────┘
```

---

## Further Reading

- [MDN: Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [Jake Archibald: In The Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
- [Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
