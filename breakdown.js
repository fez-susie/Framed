function bijou(){
    document.getElementById('bijouTab').style.backgroundColor='var(--red)';
    document.getElementById('standardTab').style.backgroundColor='var(--pineGreen)';
    document.getElementById('substantialTab').style.backgroundColor='var(--pineGreen)';

    document.getElementById('bijouTab').style.order='2';
    document.getElementById('standardTab').style.order='3';
    document.getElementById('substantialTab').style.order='4';

    document.getElementById('bijouDisp').style.display='grid';
    document.getElementById('standardDisp').style.display='none';
    document.getElementById('substantialDisp').style.display='none';
}

function standard(){
    document.getElementById('bijouTab').style.backgroundColor='var(--pineGreen)';
    document.getElementById('standardTab').style.backgroundColor='var(--red)';
    document.getElementById('substantialTab').style.backgroundColor='var(--pineGreen)';

    document.getElementById('bijouTab').style.order='4';
    document.getElementById('standardTab').style.order='2';
    document.getElementById('substantialTab').style.order='3';
    
    document.getElementById('bijouDisp').style.display='none';
    document.getElementById('standardDisp').style.display='grid';
    document.getElementById('substantialDisp').style.display='none';
}

function substantial(){
    document.getElementById('bijouTab').style.backgroundColor='var(--pineGreen)';
    document.getElementById('standardTab').style.backgroundColor='var(--pineGreen)';
    document.getElementById('substantialTab').style.backgroundColor='var(--red)';

    document.getElementById('bijouTab').style.order='4';
    document.getElementById('standardTab').style.order='3';
    document.getElementById('substantialTab').style.order='2';

    document.getElementById('bijouDisp').style.display='none';
    document.getElementById('standardDisp').style.display='none';
    document.getElementById('substantialDisp').style.display='grid';
}