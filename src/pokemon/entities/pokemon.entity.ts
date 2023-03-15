import { Document } from "mongoose";
import {Schema, SchemaFactory, Prop} from '@nestjs/mongoose'


// entity para base de datos mongoDB


@Schema()
export class Pokemon extends Document{

    //id: string //Mongo nos la da
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;

}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon )