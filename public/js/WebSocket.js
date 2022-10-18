class jVarGlobalWsClass {
    constructor(inWs) {
        inWs.onmessage = this.jVarGlobalWsOnMessage;
        inWs.onopen = this.jVarGlobalWsOnOpen;
        inWs.onclose = this.jVarGlobalWsOnClose;
    };

    jVarGlobalWsOnMessage = (message) => {
        console.log("msg : ", message);
    };

    jVarGlobalWsOnOpen = () => {
        console.log('Connection opened!');
    };

    jVarGlobalWsOnClose = () => {
        this.inWs = null;
    };
};
