const calculateDate = (dateEntry, dateProcessed) => {

    /* let minutosPedido = parseInt(datePedido.substr(13,2))
    let horasPedido = parseInt(datePedido.substr(10,2))
    let minutosEntrega = parseInt(dateEntrega.substr(13,2))
    let horasEntrega = parseInt(dateEntrega.substr(10,2))
    */
    let minutosPedido = dateEntry.getMinutes()
    let horasPedido = dateEntry.getHours()

    let minutosEntrega = dateProcessed.getMinutes()
    let horasEntrega = dateProcessed.getHours()

    let restaHoras = horasEntrega - horasPedido ;
    let restaMinutos = minutosEntrega - minutosPedido ;

    if(restaMinutos < 0){
        restaHoras--;
        restaMinutos = 60 + restaMinutos
    }

    restaHoras = restaHoras.toString();
    restaMinutos = restaMinutos.toString()

    if(restaHoras.length < 2){
        restaHoras = '0' + restaHoras 
    }

    if(restaMinutos.length < 2){
        restaMinutos = '0' + restaMinutos
    }

    return restaHoras + ':' + restaMinutos;
}

export default calculateDate;