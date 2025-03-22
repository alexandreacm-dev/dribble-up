import NoPhoto from "../assets/images/no-photos.png";
import Pischer from "../assets/images/dog-pischer.png";
import Cat from "../assets/images/cat.png";
import Dog from "../assets/images/dog.png";


export interface IDog {
    _id: string;
    name: string;
    breed: string;
    color: string;
    weight: number;
}

export type Dog = {
    data: Array<IDog>
}

export enum ImageBreed {
    dog = Dog,
    cat = Cat,
    pischer = Pischer,
    noimage = NoPhoto
}

export const ImageBreeds = {
    dog: Dog,
    cat: Cat,
    pischer: Pischer,
    noimage: NoPhoto
}

