/**
 * Interactive Examples for Understanding Async JavaScript
 * Run each example separately to see the output
 */

// ============================================
// Example 1: Basic Event Loop
// ============================================
console.log('\n=== Example 1: Basic Event Loop ===\n');

function example1() {
    console.log('1: Synchronous start');
    
    setTimeout(() => {
        console.log('2: setTimeout callback');
    }, 0);
    
    Promise.resolve().then(() => {
        console.log('3: Promise callback');
    });
    
    console.log('4: Synchronous end');
}

// Uncomment to run:
// example1();

// Expected Output:
// 1: Synchronous start
// 4: Synchronous end
// 3: Promise callback
// 2: setTimeout callback


// ============================================
// Example 2: Microtask vs Macrotask Priority
// ============================================
console.log('\n=== Example 2: Microtask vs Macrotask Priority ===\n');

function example2() {
    console.log('Start');
    
    setTimeout(() => console.log('Timeout 1'), 0);
    
    Promise.resolve()
        .then(() => console.log('Promise 1'))
        .then(() => console.log('Promise 2'));
    
    setTimeout(() => console.log('Timeout 2'), 0);
    
    Promise.resolve().then(() => console.log('Promise 3'));
    
    console.log('End');
}

// Uncomment to run:
// example2();

// Expected Output:
// Start
// End
// Promise 1
// Promise 3
// Promise 2
// Timeout 1
// Timeout 2


// ============================================
// Example 3: Complex Execution Order
// ============================================
console.log('\n=== Example 3: Complex Execution Order ===\n');

function example3() {
    console.log('1: Sync');
    
    setTimeout(() => {
        console.log('2: Timeout 1');
        Promise.resolve().then(() => console.log('3: Promise in Timeout 1'));
    }, 0);
    
    Promise.resolve()
        .then(() => {
            console.log('4: Promise 1');
            setTimeout(() => console.log('5: Timeout in Promise 1'), 0);
        })
        .then(() => console.log('6: Promise 2'));
    
    setTimeout(() => console.log('7: Timeout 2'), 0);
    
    console.log('8: Sync');
}

// Uncomment to run:
// example3();

// Expected Output:
// 1: Sync
// 8: Sync
// 4: Promise 1
// 6: Promise 2
// 2: Timeout 1
// 3: Promise in Timeout 1
// 7: Timeout 2
// 5: Timeout in Promise 1


// ============================================
// Example 4: Async/Await Under the Hood
// ============================================
console.log('\n=== Example 4: Async/Await ===\n');

async function asyncFunction() {
    console.log('2: Inside async function (sync)');
    await Promise.resolve();
    console.log('5: After await (microtask)');
}

function example4() {
    console.log('1: Start');
    asyncFunction();
    console.log('3: After calling async function');
    
    Promise.resolve().then(() => console.log('4: Direct promise'));
}

// Uncomment to run:
// example4();

// Expected Output:
// 1: Start
// 2: Inside async function (sync)
// 3: After calling async function
// 4: Direct promise
// 5: After await (microtask)


// ============================================
// Example 5: Multiple Awaits
// ============================================
console.log('\n=== Example 5: Multiple Awaits ===\n');

async function example5() {
    console.log('1: Start');
    
    await Promise.resolve();
    console.log('2: After first await');
    
    await Promise.resolve();
    console.log('3: After second await');
    
    console.log('4: End of async function');
}

// Uncomment to run:
// example5();

// Expected Output:
// 1: Start
// 2: After first await
// 3: After second await
// 4: End of async function


// ============================================
// Example 6: Promise Chain vs Async/Await
// ============================================
console.log('\n=== Example 6: Promise Chain vs Async/Await ===\n');

function withPromiseChain() {
    console.log('Promise Chain: Start');
    
    return Promise.resolve()
        .then(() => {
            console.log('Promise Chain: Step 1');
            return 'data1';
        })
        .then((data) => {
            console.log('Promise Chain: Step 2 with', data);
            return 'data2';
        })
        .then((data) => {
            console.log('Promise Chain: Step 3 with', data);
        });
}

async function withAsyncAwait() {
    console.log('Async/Await: Start');
    
    await Promise.resolve();
    console.log('Async/Await: Step 1');
    const data1 = 'data1';
    
    await Promise.resolve();
    console.log('Async/Await: Step 2 with', data1);
    const data2 = 'data2';
    
    await Promise.resolve();
    console.log('Async/Await: Step 3 with', data2);
}

function example6() {
    console.log('=== Running Promise Chain ===');
    withPromiseChain().then(() => {
        console.log('\n=== Running Async/Await ===');
        return withAsyncAwait();
    });
}

// Uncomment to run:
// example6();


// ============================================
// Example 7: Nested Timers and Promises
// ============================================
console.log('\n=== Example 7: Nested Timers and Promises ===\n');

function example7() {
    console.log('1: Start');
    
    setTimeout(() => {
        console.log('2: Outer timeout');
        
        Promise.resolve().then(() => {
            console.log('3: Promise in outer timeout');
            
            setTimeout(() => {
                console.log('4: Inner timeout');
            }, 0);
        });
        
        setTimeout(() => {
            console.log('5: Sibling timeout');
        }, 0);
    }, 0);
    
    Promise.resolve().then(() => {
        console.log('6: Outer promise');
    });
    
    console.log('7: End');
}

// Uncomment to run:
// example7();

// Expected Output:
// 1: Start
// 7: End
// 6: Outer promise
// 2: Outer timeout
// 3: Promise in outer timeout
// 5: Sibling timeout
// 4: Inner timeout


// ============================================
// Example 8: Error Handling in Async Code
// ============================================
console.log('\n=== Example 8: Error Handling ===\n');

async function example8() {
    console.log('1: Start');
    
    try {
        await Promise.reject('Error in promise');
    } catch (error) {
        console.log('2: Caught error:', error);
    }
    
    console.log('3: After error handling');
    
    // This will be uncaught if not handled
    Promise.reject('Unhandled rejection').catch(err => {
        console.log('4: Caught unhandled rejection:', err);
    });
    
    console.log('5: End');
}

// Uncomment to run:
// example8();


// ============================================
// Example 9: Race Conditions
// ============================================
console.log('\n=== Example 9: Race Conditions ===\n');

function example9() {
    let counter = 0;
    
    // These will all execute in the same microtask checkpoint
    Promise.resolve().then(() => {
        counter++;
        console.log('Promise 1:', counter);
    });
    
    Promise.resolve().then(() => {
        counter++;
        console.log('Promise 2:', counter);
    });
    
    Promise.resolve().then(() => {
        counter++;
        console.log('Promise 3:', counter);
    });
    
    console.log('Synchronous counter:', counter);
}

// Uncomment to run:
// example9();

// Expected Output:
// Synchronous counter: 0
// Promise 1: 1
// Promise 2: 2
// Promise 3: 3


// ============================================
// Example 10: Visualizing the Event Loop
// ============================================
console.log('\n=== Example 10: Event Loop Visualization ===\n');

function visualizeEventLoop() {
    const log = (msg, type) => {
        const timestamp = Date.now();
        console.log(`[${type.padEnd(10)}] ${msg}`);
    };
    
    log('Script starts', 'SYNC');
    
    setTimeout(() => {
        log('Timeout 1 (0ms)', 'MACRO');
    }, 0);
    
    setTimeout(() => {
        log('Timeout 2 (10ms)', 'MACRO');
    }, 10);
    
    Promise.resolve().then(() => {
        log('Promise 1', 'MICRO');
        
        Promise.resolve().then(() => {
            log('Promise 1.1 (nested)', 'MICRO');
        });
    });
    
    Promise.resolve().then(() => {
        log('Promise 2', 'MICRO');
    });
    
    queueMicrotask(() => {
        log('queueMicrotask', 'MICRO');
    });
    
    log('Script ends', 'SYNC');
}

// Uncomment to run:
// visualizeEventLoop();


// ============================================
// Example 11: Simulating Async Operations
// ============================================
console.log('\n=== Example 11: Simulating Async Operations ===\n');

function simulateAsyncOperation(name, delay) {
    return new Promise((resolve) => {
        console.log(`${name}: Started`);
        setTimeout(() => {
            console.log(`${name}: Completed after ${delay}ms`);
            resolve(name);
        }, delay);
    });
}

async function example11() {
    console.log('Starting async operations...\n');
    
    // Sequential execution
    console.log('=== Sequential ===');
    await simulateAsyncOperation('Task 1', 100);
    await simulateAsyncOperation('Task 2', 100);
    await simulateAsyncOperation('Task 3', 100);
    
    console.log('\n=== Parallel ===');
    // Parallel execution
    await Promise.all([
        simulateAsyncOperation('Task A', 100),
        simulateAsyncOperation('Task B', 100),
        simulateAsyncOperation('Task C', 100)
    ]);
    
    console.log('\nAll operations completed!');
}

// Uncomment to run:
// example11();


// ============================================
// Example 12: The Microtask Queue Never Empties
// ============================================
console.log('\n=== Example 12: Infinite Microtasks (WARNING: This will hang!) ===\n');

function example12Dangerous() {
    console.log('Start');
    
    setTimeout(() => {
        console.log('This will NEVER execute!');
    }, 0);
    
    let count = 0;
    function infiniteMicrotask() {
        if (count < 5) { // Limited to 5 for demonstration
            count++;
            console.log('Microtask', count);
            Promise.resolve().then(infiniteMicrotask);
        } else {
            console.log('Stopped infinite microtasks');
        }
    }
    
    Promise.resolve().then(infiniteMicrotask);
    
    console.log('End');
}

// Uncomment to run (safe version with limit):
// example12Dangerous();


// ============================================
// RUN ALL EXAMPLES
// ============================================

function runAllExamples() {
    const examples = [
        { name: 'Example 1: Basic Event Loop', fn: example1 },
        { name: 'Example 2: Microtask vs Macrotask', fn: example2 },
        { name: 'Example 3: Complex Execution Order', fn: example3 },
        { name: 'Example 4: Async/Await', fn: example4 },
        { name: 'Example 5: Multiple Awaits', fn: example5 },
        { name: 'Example 6: Promise Chain vs Async/Await', fn: example6 },
        { name: 'Example 7: Nested Timers and Promises', fn: example7 },
        { name: 'Example 8: Error Handling', fn: example8 },
        { name: 'Example 9: Race Conditions', fn: example9 },
        { name: 'Example 10: Event Loop Visualization', fn: visualizeEventLoop },
        { name: 'Example 11: Simulating Async Operations', fn: example11 },
        { name: 'Example 12: Infinite Microtasks', fn: example12Dangerous }
    ];
    
    let index = 0;
    
    function runNext() {
        if (index >= examples.length) {
            console.log('\n=== All examples completed! ===');
            return;
        }
        
        const example = examples[index];
        console.log(`\n${'='.repeat(50)}`);
        console.log(example.name);
        console.log('='.repeat(50));
        
        index++;
        
        // Run the example
        const result = example.fn();
        
        // If it returns a promise, wait for it
        if (result instanceof Promise) {
            result.then(() => {
                setTimeout(runNext, 500);
            });
        } else {
            setTimeout(runNext, 500);
        }
    }
    
    runNext();
}

// Uncomment to run all examples sequentially:
// runAllExamples();

// Or run individual examples by uncommenting the example function calls above

console.log('\n=== Async JavaScript Examples Ready ===');
console.log('Uncomment any example function call to run it');
console.log('Or uncomment runAllExamples() to run all examples\n');
