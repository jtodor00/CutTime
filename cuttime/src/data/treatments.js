import skare from '../images/icons/skare.png';
import britva from '../images/icons/britva.png';
import brk from '../images/icons/brk.png';
import cesalj from '../images/icons/cesalj.png';
import fen from '../images/icons/fen.png'; 

class treatment {
    constructor(id,image,name,price,duration)
    {
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
        this.duration = duration;
    }
}

export let list_of_treatments = [
    new treatment(1,skare,"ŠIŠANJE",40,30),
    new treatment(2,britva,"BRIJANJE",40,30),
    new treatment(3,cesalj,"PRANJE",10,15),
    new treatment(6,brk,"BRKOVI",30,30),
    new treatment(11,fen,"FENIRANJE",30,15)
];