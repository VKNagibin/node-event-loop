console.log('[line 1] Start point (1) sync');

new Promise((res) => {
    console.log('[line 4] Promise executor (2) async');
    setTimeout(() => {
        console.log('[line 6] SetTimeout call in promiseExecutor (6) webAPI');
        res();
    });
}).then(() => {
    console.log('[line 10] Promise.then call (7) async');
});

setTimeout(() => {
    console.log('[line 14] SetTimeout in global scope (9) webAPI');
}, 1000);

setImmediate(() => {
    console.log('[line 18] setImmediate in global scope (8) NodeAPI');
});

process.nextTick(() => {
    console.log('[line 22] process.nextTick (4) NodeAPI');
});

queueMicrotask(() => {
    console.log('[line 26] queueMicrotask (5) webAPI');
});

console.log('[line 25] End point (3) sync');