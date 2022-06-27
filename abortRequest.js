const controller = new AbortController();

function abortRequest(){
    controller.abort();
}

const abortSignal = controller.signal;

//Abort with Fetch
fetch('api-goes-here', {signal: abortSignal})
    .then(() => {
        //bogy
    });


//abort with Axios
axios
    .get('aí-gpes-here', {signal: abortSignal})
    .then(()=>{
        //Body
    })