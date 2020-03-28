var btn = document.getElementById('btn');
var form = document.getElementById('form');

btn.addEventListener('click', function(event){
    event.preventDefault();

    let binary = document.getElementById('binary').value;
    let decimal = document.getElementById('decimal').value;
    let diverror = document.getElementById('error');

    let error = false;
    let c=0, r=0;

    for(let i=binary.length-1; i>=0; --i){
        let n = parseInt(binary.charAt(i));
        if(n>1){
            error=true;
            break;
        }
        r+=n*(2**c);
        c++;
    }

    if(!error){
        document.getElementById('decimal').value = r;
    }else{
        diverror.classList.remove('d-none');
        diverror.classList.add('d-block');
    }
});