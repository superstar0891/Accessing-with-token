const web3 = new Web3(Web3.givenProvider);

// const contractAddr = '0x6464B8DBF4b6296A32edA4c536B0cB4F2b6ff08b'; // Token address that is deployed BSC test net
const contractAddr = '0xBb4D40DdfF17f1E6D0f033e48cFC8D410F3f893C';// Token address that is deployed Ganache net
const TestContract = new web3.eth.Contract(UKPCabi, contractAddr);

async function connectMetamask(path) {
    console.log("path", path);
    const chainid = await web3.eth.getChainId();
    if (chainid == 1337) {
        if (typeof window.ethereum !== 'undefined') {
            // console.log('Metamask is installed');
            ethereum.request({
                method: 'eth_requestAccounts'
            }).then((resp) => {
                const result = TestContract.methods.balanceOf(resp[0]).call().then((response) => {
                    console.log('debug->response', response)
                    if (response == 0) {
                        alert("Unfortunately there are no UKPC token  in your wallet,  you can't access to this website. Please purchases token.")
                        window.history.back();
                        // window.open("https://pancakeswap.finance/");
                    } else {
                        window.location.href = path + '/auth/metamask?address=' + resp;
                        console.log(resp);
                    }
                })
            }).catch((err) => {
                console.log(err);
            });
        } else {
            console.log('Metamask is not installed');
            window.location.reload();
             }
    }
    else {

        alert("Please switch current chain to Ganache Network.")
        window.stop();

    }
}
async function connectrevolut(path) {
    console.log("path", path);
    const chainid = await web3.eth.getChainId();
    if (chainid == 1337) {
        if (typeof window.ethereum !== 'undefined') {
            // console.log('Metamask is installed');
            ethereum.request({
                method: 'eth_requestAccounts'
            }).then((resp) => {
                const result = TestContract.methods.balanceOf(resp[0]).call().then((response) => {
                    console.log('debug->response', response)
                    if (response == 0) {
                        alert("Unfortunately there are no UKPC token  in your wallet,  you can't access to this website. Please purchases token.")
                        window.history.back();
                        // window.open("https://pancakeswap.finance/");
                    } else {
                        window.open("https://auth/revolut" ,"_self" )
                    }
                })
            }).catch((err) => {
                console.log(err);
            });
        } else {
            console.log('Metamask is not installed');
            window.location.reload();
             }
    }
    else {

        alert("Please switch current chain to Ganache Network.")
        window.stop();

    }
}
async function connectfacebook(path) {
    console.log("path", path);
    const chainid = await web3.eth.getChainId();
    if (chainid == 1337) {
        if (typeof window.ethereum !== 'undefined') {
            // console.log('Metamask is installed');
            ethereum.request({
                method: 'eth_requestAccounts'
            }).then((resp) => {
                const result = TestContract.methods.balanceOf(resp[0]).call().then((response) => {
                    console.log('debug->response', response)
                    if (response == 0) {
                        alert("Unfortunately there are no UKPC token  in your wallet,  you can't access to this website. Please purchases token.")
                        window.history.back();
                        // window.open("https://pancakeswap.finance/");
                    } else {
                        window.open("https://auth/facebook" ,"_self" )
                    }
                })
            }).catch((err) => {
                console.log(err);
            });
        } else {
            console.log('Metamask is not installed');
            window.location.reload();
             }
    }
    else {

        alert("Please switch current chain to Ganache Network.")
        window.stop();

    }
}
async function loginfunction(path) {
    console.log("path", path);
    const chainid = await web3.eth.getChainId();
    if (chainid == 1337) {
        if (typeof window.ethereum !== 'undefined') {
            // console.log('Metamask is installed');
            ethereum.request({
                method: 'eth_requestAccounts'
            }).then((resp) => {
                const result = TestContract.methods.balanceOf(resp[0]).call().then((response) => {
                    console.log('debug->response', response)
                    if (response == 0) {
                        alert("Unfortunately there are no UKPC token  in your wallet, you can't access to this website. Please purchases token.")
                        window.history.back();
                    } else {
                        // window.location.href = '/auth/metamask?address=' + resp;
                        // console.log(resp);
                        // console.log(path);
                        return;
                    }
                })
            }).catch((err) => {
                console.log(err);
            });
        } else {
            console.log('Metamask is not installed');
            window.location.reload();
        }
    }
    else {

        alert("Please switch current chain to Ganache Network.")
        window.stop();

    }
}
async function registerfunction(path) {
    console.log("path", path);
    const chainid = await web3.eth.getChainId();
    if (chainid == 1337) {
        if (typeof window.ethereum !== 'undefined') {
            // console.log('Metamask is installed');
            ethereum.request({
                method: 'eth_requestAccounts'
            }).then((resp) => {
                const result = TestContract.methods.balanceOf(resp[0]).call().then((response) => {
                    console.log('debug->response', response)
                    if (response == 0) {
                        alert("Unfortunately there are no UKPC token  in your wallet, you can't register to this website. Please purchases token.")
                        window.stop();
                        // window.open("https://pancakeswap.finance/");
                    } else {
                        // window.location.href = path + '/auth/metamask?address=' + resp;
                        // console.log(resp);
                        return;
                    }
                })
            }).catch((err) => {
                console.log(err);
            });
        } else {
            console.log('Metamask is not installed');
            window.location.reload();
        }
    }
    else {

        alert("Please switch current chain to Ganache Network.")
        window.stop();

    }
}
async function Already(path) {
    console.log("path", path);
    const chainid = await web3.eth.getChainId();
    if (chainid == 1337) {
        if (typeof window.ethereum !== 'undefined') {
            // console.log('Metamask is installed');
            ethereum.request({
                method: 'eth_requestAccounts'
            }).then((resp) => {
                const result = TestContract.methods.balanceOf(resp[0]).call().then((response) => {
                    console.log('debug->response', response)
                    if (response == 0) {
                        alert("Unfortunately there are no UKPC token  in your wallet, you can't register to this website. Please purchases token.")
                        window.stop();
                        // window.open("https://pancakeswap.finance/");
                    } else {
                        // window.location.href = path + '/auth/metamask?address=' + resp;
                        // console.log(resp);
                        return;
                    }
                })
            }).catch((err) => {
                console.log(err);
            });
        } else {
            console.log('Metamask is not installed');
            window.location.reload();
        }
    }
    else {

        alert("Please switch current chain to Ganache Network.")
        window.stop();

    }
}
// async function Connect(path) {
//     console.log("path", path);
//     if (typeof window.ethereum !== 'undefined') {
//         console.log('Metamask is installed');
//         ethereum.request({ method: 'eth_requestAccounts'})
//         // }).then((resp) => {
//         //         window.location.href = path + '/auth/metamask?address=' + resp;
//         //             console.log(resp);


//         // }).catch((err) => {
//         //     console.log(err);
//         // });
//     } else {
//         console.log('Metamask is not installed');
//         window.location.reload();
//     }
// }