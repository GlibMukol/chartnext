"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link";
import { TLoginFormShema, LoginFormShema } from "@/validations/auth";



const CLogin = ({ handleSubmit }: { handleSubmit: (data: TLoginFormShema) => Promise<any> }) => {
    const form = useForm<TLoginFormShema>({
        resolver: zodResolver(LoginFormShema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const onSubmit = async (data: TLoginFormShema) => {
        const res = await handleSubmit(data);
        console.log('res', res)
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="m@example.com"
                                                data-testid="login"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <>
                                        <div className="flex items-center">
                                            <FormLabel htmlFor="password">Password</FormLabel>
                                            <Link
                                                href="/auth/forgot_password"
                                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                            >
                                                Forgot your password?
                                            </Link>
                                        </div>
                                        <FormControl>
                                            <Input {...field} type="password" data-testid="password" />
                                        </FormControl>
                                    </>
                                )}
                            />
                        </div>
                    </div>
                    <Button type="submit" data-testid="login_submit" className="w-full mt-4">
                        Login
                    </Button>
                </form>
            </Form >
            <Button variant="outline" className="w-full mt-2" onClick={() => alert('todo')}>
                Login with Google
            </Button>
        </>
    )
}


export default CLogin;