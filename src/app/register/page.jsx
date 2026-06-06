"use client"
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Fieldset, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

const RegisterPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())

        const password = user.password;
        const confirmPassword = user.confirmPassword;

        if (password.length < 6) {
            return alert("Password must be at least 6 characters")
        }

        if (!/[A-Z]/.test(password)) {
            return alert("Password must contain one uppercase letter")
        }

        if (!/[a-z]/.test(password)) {
            return alert("Password must contain one lowercase letter")
        }

        if (password !== confirmPassword) {
            return alert("Passwords do not match")
        }

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            image: user.image,
            password: user.password
        })

        if(data){
            redirect("/login")
        }
         if(error){
            alert('error')
        }

    }
    return (
        <div className="max-w-7xl mx-auto flex justify-center items-center my-20">
            <div className="border rounded-2xl p-5 w-96 space-y-2">
                <h2 className="text-center text-2xl font-semibold">Register</h2>
                <p className="text-center text-xl font-medium">Create your account</p>
                <p className="text-center text-lg">Join our community of pet lovers</p>
                <Form onSubmit={onSubmit}>
                    <Fieldset className="mt-5">
                        <Fieldset.Group className="space-y-5">
                            <TextField isRequired name="name" type="text">
                                <Label>Name</Label>
                                <Input placeholder="Enter Your Name" variant="secondary" />
                                <FieldError />
                            </TextField>

                            <TextField isRequired name="email" type="email">
                                <Label>Your Email</Label>
                                <Input placeholder="Enter Your Email" variant="secondary" />
                                <FieldError />
                            </TextField>

                            <TextField isRequired name="image" type="url">
                                <Label>ImageUrl</Label>
                                <Input placeholder="Enter Your Image" variant="secondary" />
                                <FieldError />
                            </TextField>

                            <TextField isRequired name="password" type="password">
                                <Label>Password</Label>
                                <Input placeholder="Enter Your Password" variant="secondary" />
                                <FieldError />
                            </TextField>

                            <TextField isRequired name="confirmPassword" type="password">
                                <Label>Confirm Password</Label>
                                <Input placeholder="Enter Your Confirm Password" variant="secondary" />
                                <FieldError />
                            </TextField>
                        </Fieldset.Group>
                        <Fieldset.Actions>
                            <Button type="submit" className='bg-amber-700 rounded-md flex gap-3 py-5 w-full'>
                                Register
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
                <div className="flex justify-center items-center gap-2 mt-7">
                    <p className="text-sm">Already have an account?</p>
                    <Link href={"/login"} className="text-blue-600">Login here</Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;