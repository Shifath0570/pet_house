"use client"
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Fieldset, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const LogInPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())


        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password
        })

        console.log({ data, error })

        if (data) {
            redirect("/")
        }
        if (error) {
            alert('error')
        }

    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="max-w-7xl mx-auto flex justify-center items-center my-20">
            <div className="border rounded-2xl p-5 w-96 space-y-2">
                <h2 className="text-center text-2xl font-semibold">Login</h2>
                <p className="text-center text-xl font-medium">Welcome back!</p>
                <p className="text-center text-lg">Please login to your account</p>
                <Form onSubmit={onSubmit}>
                    <Fieldset className="mt-5">
                        <Fieldset.Group className="space-y-5">
                            <TextField isRequired name="email" type="email">
                                <Label>Your Email</Label>
                                <Input placeholder="Enter Your Email" variant="secondary" />
                                <FieldError />
                            </TextField>

                            <TextField isRequired name="password" type="password">
                                <Label>Password</Label>
                                <Input placeholder="Enter Your Password" variant="secondary" />
                                <FieldError />
                            </TextField>
                        </Fieldset.Group>
                        <Fieldset.Actions>
                            <Button type="submit" className='bg-amber-700 rounded-md flex gap-3 py-5 w-full'>
                                Login
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>

                <div className="flex justify-center items-center">
                    Or
                </div>

                <div>
                    <Button onClick={handleGoogleSignIn} variant="outline" className={'w-full rounded-lg'}>
                        <FcGoogle /> Sign in With Google
                    </Button>
                </div>

                <div className="flex justify-center items-center gap-2 mt-7">
                    <p className="text-sm">Dont have an account?</p>
                    <Link href={"/register"} className="text-blue-600">Register here</Link>
                </div>
            </div>
        </div>
    );
};

export default LogInPage;