"use client"
import "../globals.css";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";


import Image from "next/image";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const mySchema = z.object({
    email: z.string().email().min(5, {
    message: "Veuillez entrer une adresse email valide",}),
});


export const Newsletter = () => {

    const router = useRouter();
    const form = useForm<z.infer<typeof mySchema>>({resolver: zodResolver(mySchema),defaultValues: {email: ""}});
    const {isSubmitting, isValid} = form.formState;
    
    const onSubmit = async (value: z.infer<typeof mySchema>) => 
    {
        try 
        {
            const response = await axios.post("/../api/username", value);
            toast.success("Adresse email enregistrée avec succès");

        } catch (error){
            console.log("L'erreur suivante a été détectée :");
            console.log(error);
            if (!axios.isAxiosError(error)) return
            
            if (error.status == 520)
            {
                toast.error("Adresse email déjà enregistrée")
            }
            else
            {
                toast.error("Erreur de serveur, veuillez réessayer"); 
            }
        }
    }

    return (
        <div id="contact" className="newsletter-style">
            <Image height={2000} width={2000} alt='Newsletter' src="/newsletter/newsletter.png" />
            <div className="newsletter-item" >
                <h2 className="newsletter-title">Envie d'en savoir plus?</h2>
                <p className="newsletter-text">Renseigne ton adresse email pour suivre l'actualité du projet</p>
                <div className="newsletter-email">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField 
                                control={form.control}
                                name= "email"
                                render = {({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input className="newsletter-input" disabled={isSubmitting} placeholder="Entre ton adresse email" {...field}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }/>
                            <Button type="submit" className="newsletter-button" disabled={!isValid || isSubmitting}>Envoyer <Mail /></Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>       
    )
}