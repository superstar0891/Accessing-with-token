const web3 = new Web3(Web3.givenProvider);

// const contractAddr = '0x6464B8DBF4b6296A32edA4c536B0cB4F2b6ff08b';//test BSC net
const contractAddr = '0xBb4D40DdfF17f1E6D0f033e48cFC8D410F3f893C';// ganache net
// console.log('debug->abi', 1);
console.log('debug->abi', UKPCabi);
const TestContract = new web3.eth.Contract(UKPCabi, contractAddr);

function myfunction(path) {
    console.log("path", path);
    if (typeof window.ethereum !== 'undefined') {
        // console.log('Metamask is installed');
        ethereum.request({
            method: 'eth_requestAccounts'
        }).then((resp) => {
            const result = TestContract.methods.balanceOf(resp[0]).call().then((response) => {
                console.log('debug->response', response)
                if (response == 0) {
                    window.history.back();
                    alert("There are no UKPC tokens  in your wallet. Therefore you can't access to this website. Please purchases tokens.")
                    // window.open("https://pancakeswap.finance/");
                    window.stop();
                } else {
                    // window.open("https://laravel.com/docs");
                    // window.open(path + "/dashboard");
                    // console.log("path", path)
                    // console.log(resp)
                    return ;
                }
            })
        }).catch((err) => {
            console.log(err);
        });
    } else {
        // console.log('Metamask is not installed');
        window.location.reload();
    }
}