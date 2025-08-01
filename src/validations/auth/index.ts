import z from "zod";

export const ForgotPasswordFormShema = z.object({
    email: z.string().email()
});

export type TCForgotPAssordEmail = z.infer<typeof ForgotPasswordFormShema>


export const LoginFormShema = z.object({
    email: z.string().email(),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
})
export type TLoginFormShema = z.infer<typeof LoginFormShema>;



export const SignInFormShema = LoginFormShema.extend({
    password_reapeat: z.string()
}).refine((data) => data.password === data.password_reapeat, {
    message: "Password not match",
    path: ["password_reapeat"]
});

export type TSignINFormShema = z.infer<typeof SignInFormShema>;

