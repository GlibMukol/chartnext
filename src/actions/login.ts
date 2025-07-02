"use server"

import { TLoginFormShema } from "@/validations/auth"

export const LoginAction = async (data: TLoginFormShema) => {
    return await new Promise((res, _) => {
        setTimeout(() => {
            res({
                "data": data
            })
        }, 500)
    })
}