import { ObjectId } from "mongodb";

export type autorModel={
    _id: ObjectId,
    Nombre: String,
    Bibliografia:String
}

export type libroModel={
    _id: ObjectId,
    Titulo: String,
    Autores: ObjectId[]
    Copias: Number
}

export type libro={
    id: number,
    Titulo: String,
    Autores: number[]
    Copias: Number
}

export type autor={
    id: number,
    Nombre: String,
    Bibliografia: string
}