import { LoginAction } from "@/actions/login";
import CLogin from "@/components/auth/login";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PLogin = () => (
    <Card className="w-full max-w-sm">
        <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
                Enter your email below to login to your account
            </CardDescription>
        </CardHeader>
        <CardContent >
            <CLogin handleSubmit={LoginAction} />
        </CardContent>
        <CardFooter className="flex justify-center items-center">
            <p className="text-sm">Don't have an account? </p>
            <Button variant="link">Sign Up</Button>
        </CardFooter>

    </Card >
)

export default PLogin;