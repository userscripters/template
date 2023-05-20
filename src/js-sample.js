/**
 * @fileoverview default source file
 */

window.addEventListener(
    "load",
    () => {
        StackExchange?.ready(async () => {
            const main = () => Promise.resolve("Hello world!");

            const hello = await main();
            console.log(hello);
        });
    },
    { once: true }
);
