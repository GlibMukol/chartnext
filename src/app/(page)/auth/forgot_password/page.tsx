import CForgotPassword from "@/components/auth/forgot_password";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { sendForgotPassword } from "@/actions/forgot_password"

const PForgotPassword = () => {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>
                    Enter you email
                </CardTitle>
                <CardDescription>
                    We send email for recover password
                </CardDescription>
            </CardHeader>
            <CardContent>
                <CForgotPassword submitHandler={sendForgotPassword} />
            </CardContent>
            <CardFooter>
                <p className="text-sm">Return to login form</p>
                <Link
                    href="/auth/login"
                >
                    <Button variant="link">
                        LogIn
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default PForgotPassword;