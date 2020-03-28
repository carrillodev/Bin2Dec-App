var btn = document.getElementById('btn');

btn.addEventListener('click', function(e){
    e.preventDefault();
    let binary = document.getElementById('binary').value;
    let decimal = document.getElementById('decimal').value;
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

    if(f)
});