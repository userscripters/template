/**
 * @fileoverview default source file
 */

window.addEventListener("load", async () => {

    const main = () => Promise.resolve("Hello world!");

    const hello = await main();
    console.log(hello);

}, { once: true });