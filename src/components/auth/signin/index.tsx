"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const CSignIn = () => {
    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    return <Form {...form}>
        <form data-testid="signin">
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
                                        data-testid="signin_email"
                                        placeholder="m@example.com"
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
                            <FormItem>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        data-testid="signin_pwd"
                                        type="password"
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
                            <FormItem>
                                <FormLabel htmlFor="password_reapeat">Reapeat  Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        data-testid="signin_pwd_reapeat"
                                        type="password"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
            </div>
            <Button type="submit" data-testid="signin_signin_btn" className="w-full mt-4">
                Login
            </Button>
        </form>
    </Form>
}

export default CSignIn;