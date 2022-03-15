export class Connection {
    constructor() {
        console.log("Connection ctor");
    }

    testIt() {
        window["hello"] = "indexeddb";
    }
}