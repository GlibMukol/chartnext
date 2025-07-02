"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ForgotPasswordFormShema, TCForgotPAssordEmail } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

type TSForgotPasswordResponseStatus = 'sussess' | 'error'
const CForgotPassword = ({ submitHandler }: { submitHandler: any }) => {
    const [sussess, setSuccess] = useState<TSForgotPasswordResponseStatus>()
    const form = useForm<TCForgotPAssordEmail>({
        resolver: zodResolver(ForgotPasswordFormShema),
        defaultValues: {
            email: ''
        }
    });

    const onSubmit = async (data: TCForgotPAssordEmail) => {
        // TODO finish after adding mailer
        const result = await submitHandler(data);
    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="m@example.com" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit"> Send </Button>
                </div>
            </form>
        </Form>
    )
}

export default CForgotPassword;