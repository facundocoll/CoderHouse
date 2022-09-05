let nombre = prompt("Ingrese su nombre:")

let saldo = 0

let val = " "

let total = 0

let productos = prompt(`Bienvenido/a a la quimica ${nombre}.
Elija los productos a llevar o escriba END para ver total.
1. Cloro $200
2. Detergente $60
3. Quita sarro $120
4. Escoba $50
5. Desodorante piso $40
0. Recargar saldo.          
                        Saldo Actual: $${saldo}
`)

while(productos != "end" && productos != "END"){
    
    switch(productos){

        case "1":
            val = 200
            break;
            
        case "2":
            val = 60
            break;

        case "3":
            val = 120
            break;

        case "4":
            val = 50
            break;

        case "5":
            val = 40
            break;

        case "0":
                saldo = Number(prompt("Ingrese monto a recargar:"))

            default:
                val = 0
                break;
    }

    total += val

    productos = prompt(`Bienvenido/a a la quimica ${nombre}.
    Elija los productos a llevar o escriba END para ver total.
    1. Cloro $200
    2. Detergente $60
    3. Quita sarro $120
    4. Escoba $50
    5. Desodorante piso $40
    0. Recargar saldo.          
                        Saldo Actual: $${saldo}
    `)
}
alert(`${nombre} su pedido suma un total de $${total}`)

if (saldo > total){
    alert("gracias, vuelva prontos...")
} else {
    alert(`se excedio de su saldo: $${saldo}`)
}