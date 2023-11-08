function bijou(){
    document.getElementById('bijouTab').style.backgroundColor='var(--red)';
    document.getElementById('standardTab').style.backgroundColor='var(--pineGreen)';
    document.getElementById('substantialTab').style.backgroundColor='var(--pineGreen)';

    document.getElementById('bijou').style.display='grid';
    document.getElementById('standard').style.display='none';
    document.getElementById('substantial').style.display='none';
}

function standard(){
    document.getElementById('bijouTab').style.backgroundColor='var(--pineGreen)';
    document.getElementById('standardTab').style.backgroundColor='var(--red)';
    document.getElementById('substantialTab').style.backgroundColor='var(--pineGreen)';
    
    document.getElementById('bijou').style.display='none';
    document.getElementById('standard').style.display='grid';
    document.getElementById('substantial').style.display='none';
}

function substantial(){
    document.getElementById('bijouTab').style.backgroundColor='var(--pineGreen)';
    document.getElementById('standardTab').style.backgroundColor='var(--pineGreen)';
    document.getElementById('substantialTab').style.backgroundColor='var(--red)';
    
    document.getElementById('bijou').style.display='none';
    document.getElementById('standard').style.display='none';
    document.getElementById('substantial').style.display='grid';
}