///////////////////// 01 ///////////////////////////////////
import {TMovie} from "@/app/types/movie";

export type TArray = {
    numbers?: number[],
    strings?: string[],
    objects?: {id: string, name: string}[],
    stringsAndNumber?: [number, string],
}

// hazf felan type ha maslana: 'numbers | 'strings
const testArray: Omit<TArray, 'stringsAndNumber'> = {
    numbers: [1,2],
    strings: ['asd'],
    objects: [{id: 'asda', name: 'defz'}]
}

// entekhab type haye moredenazar
const testArray2: Pick<TArray, 'numbers' | 'strings'>  = {
    numbers: [1,2],
    strings: ['asd'],
}

// ekhtiary kardan tamam item haye yek type
const testArray3: Partial<TArray> = {
    numbers: [1, 2]
}

//  ejbari kardan tamam item haye yek type
const testArray4: Required<TArray> = {
    numbers: [1,2],
    strings: ['asd'],
    objects: [{id: 'asda', name: 'defz'}],
    stringsAndNumber: [2, '22']
}

// ejbary kardan faghat yek field az type
const testArray5: Omit<TArray, 'strings'> & Pick<Required<TArray>, 'strings'>  = {
    strings: ['asd']
}


//////////////////////////////////  02  ////////////////////////////////////////////
export type TMyFunc = (test: string) => number | string


const testMyFunc: TMyFunc = (test) => {
    return test.trim()
    // return 2222
}

//  ekhtesas type be vorodie function va khoroji function (type khoroji bad as (): type)
const testMyFunc2 = (test: string): string | number => {
    return test.trim();
}



///////////////////////////////  03: literal types  ////////////////////////////////////////////

// moshakhas kardan meghdar sabet be variable
let test: 'hello' | 'word' = 'hello';
test = 'hello'


export type literalTest = {
    id: string,
    title: string,
    author: 'admin' | 'user'
}

const myNews: literalTest = {
    id: 'asdads',
    title: 'test',
    author: 'user'
}

////////////////////////////  04: Enums   ///////////////////////////////

export enum ERequestType {
    'GET'= 'GET',
    'POST' = 'POST',
    'PUT' = 'PUT',
}

export type TUseEnum = {
    url: string,
    type: ERequestType
}

export type TRequest = {
    url: string,
    type: 'GET' | 'POST' | 'PUT'
}


const sendRequest = () => {
    const config: TRequest = {
        url: 'https://google.com',
        type: 'GET'
    }
}

// generic type ha baraye vaghtie ke type yek vorofi ya khoroji dar sharayeti mokhtalefe (masalan body alan generice momkene to ye request arraye bayad befrestim ya object)
export type TUseGeneric <T> = {
    url: string,
    type: 'GET' | 'POST' | 'PUT',
    body?: T
}

export const sendRequest2 = () => {
    const config:TUseGeneric<{id: string, name: string}> = {
        url: 'asdasd',
        type: 'GET',
        body: {
            id: 'asdasd',
            name: 'asda'
        }
    }
}