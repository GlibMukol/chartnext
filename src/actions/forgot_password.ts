"use server"

import { TCForgotPAssordEmail } from "@/validations/auth"

export const sendForgotPassword = async (data: TCForgotPAssordEmail) => {
    console.log('data', data)
    const mockFetch = new Promise((res, _) => {
        setTimeout(() => {
            res({
                "data": data
            })
        }, 500)
    })
    return await mockFetch
}

