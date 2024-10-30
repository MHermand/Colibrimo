import { db } from "@/lib/db";
import { Prisma } from '@prisma/client'
import { NextResponse } from "next/server";


export async function POST (req : Request, ) 
{
    try 
    {
        const { email } = await req.json();
        const contact = await db.contact.create({data: {email}})
        return NextResponse.json(contact);
    } 

    catch (error) 
    {
        if (error instanceof Prisma.PrismaClientKnownRequestError) 
        {
            console.log("[CONTACT]", "Email déjà existant");
            return NextResponse.json({message: "Email déjà existant" }, {status : 520});
        }
        else { 
            console.log("[CONTACT]", error);
            return NextResponse.json({message: "Erreur de serveur" }, {status : 500});
        }
    }
}