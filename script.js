
class Node{

    constructor(val){
        this.value = val
        this.left = null
        this.rigth = null
    
    }

    insert(val){ 
        if(val < this.value){   // valor agregar es menor a nodo actual
            this.insertLeft(val)  // se agrega a la izquierda

        }else{
            this.insertRigth(val) // se agrega a la derecha
        }
    }


    insertLeft(val){
        if(this.left) { //se valida si ya existe  nodo izq
            this.left.insert(val) // se agrega
        }
        else{
            this.left = new Node(val) // se crea
        }

    }

    insertRigth(val){
        if(this.rigth){
            this.rigth.insert(val)
        }else{
            this.rigth = new Node(val)
        }

    }

}

const nodo = new Node(20)

nodo.insert(10)
nodo.insert(5)
nodo.insert(1)
nodo.insert(29)
nodo.insert(50)
nodo.insert(100)
nodo.insert(59)
nodo.insert(25)




console.log(nodo)




//nodo.insert(30)
//nodo.insert(45)