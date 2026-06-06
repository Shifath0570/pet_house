"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Fieldset, Form, Input, Label, Surface, TextArea, TextField, ListBox, Select } from "@heroui/react";
import { router } from "better-auth/api";
import toast from "react-hot-toast";
import { MdOutlinePets } from "react-icons/md";


const AddPetPage = () => {

    const {data: session,} = authClient.useSession();
        const user = session?.user;
        // console.log(user)

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const petDetails = Object.fromEntries(formData.entries())
        // console.log(petDetails);

        const petData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            petName: petDetails.petName,
            species: petDetails?.species,
            breed: petDetails?.breed,
            age: petDetails?.age,
            gender: petDetails?.gender,
            imageUrl: petDetails?.imageUrl,
            healthStatus: petDetails?.healthStatus,
            vaccinationStatus: petDetails?.vaccinationStatus,
            location: petDetails?.location,
            adoptionFee: petDetails?.adoptionFee,
            Description: petDetails?.Description,
            email: petDetails?.email,  
            status: "Available" 
        }

        console.log(petData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/pet`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(petData)
        })

        const data = await res.json()
        console.log(data)


        if (data.insertedId || data.success) {
        toast.success("Pet added successfully!");
        router.push("/dashboard/mylistings");
      } else {
        toast.error(data.message || "Failed to add pet");
      }
    }
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="space-y-5 my-10">
                <h2 className="text-3xl font-semibold">Add New Pet</h2>
                <p className="text-md">Fill in the details below to add a new pet for adoption</p>
            </div>

            <div className="flex items-center justify-center rounded-3xl bg-surface p-6 border">
                <Surface className="w-full min-w-[380px]">
                    <Form onSubmit={onSubmit}>
                        <Fieldset className="w-full">
                            <Fieldset.Group className="space-y-10">
                                <div className="grid grid-cols-3 gap-10">
                                    <TextField isRequired name="petName" type="text">
                                        <Label>Pet Name</Label>
                                        <Input placeholder="Enter pet name" variant="secondary" />
                                        <FieldError />
                                    </TextField>

                                    <Select name="species" placeholder="Select species" variant="secondary">
                                        <Label>Species</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="Dog" textValue="Dog">
                                                    Dog
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Cat" textValue="Cat">
                                                    Cat
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Bird" textValue="Bird">
                                                    Bird
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Rabbit" textValue="Rabbit">
                                                    Rabbit
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>

                                    <TextField isRequired name="breed" type="text">
                                        <Label>Breed</Label>
                                        <Input placeholder="Enter breed" variant="secondary" />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div className="grid grid-cols-3 gap-10">
                                    <TextField isRequired name="age" type="number">
                                        <Label>Age</Label>
                                        <Input placeholder="Enter age" variant="secondary" />
                                        <FieldError />
                                    </TextField>

                                    <Select name="gender" placeholder="Select gender" variant="secondary">
                                        <Label>Gender</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="Male" textValue="Male">
                                                    Male
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Female" textValue="Female">
                                                    Female
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>

                                    <TextField isRequired name="imageUrl" type="url">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Enter imageURL" variant="secondary" />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div className="grid grid-cols-3 gap-10">
                                    <Select name="healthStatus" placeholder="Select health status" variant="secondary">
                                        <Label>Health Status</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="Healthy" textValue="Healthy">
                                                    Healthy
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Unhealthy" textValue="Unhealthy">
                                                    Unhealthy
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>

                                    <Select name="vaccinationStatus" placeholder="Select vaccination status" variant="secondary">
                                        <Label>Vaccination Status</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="Yes" textValue="Yes">
                                                    Yes
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="No" textValue="No">
                                                    No
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>

                                    <TextField isRequired name="location" type="text">
                                        <Label>Location</Label>
                                        <Input placeholder="Enter location" variant="secondary" />
                                        <FieldError />
                                    </TextField>
                                </div>

                                <div className="grid grid-cols-3 gap-10">
                                    <TextField isRequired name="adoptionFee" type="text">
                                        <Label>Adoption Fee</Label>
                                        <Input placeholder="Enter adoption fee" variant="secondary" />
                                        <FieldError />
                                    </TextField>

                                    <TextField isRequired name="Description" type="text">
                                        <Label>Description</Label>
                                        <TextArea placeholder="Describe the per personality, habit, and any special need.." variant="secondary" />
                                        <Description>Minimum 10 characters</Description>
                                        <FieldError />
                                    </TextField>

                                    <TextField value={user?.email} isRequired name="email" type="email">
                                        <Label>Owner Email</Label>
                                        <Input placeholder="Enter email" variant="secondary" />
                                        <FieldError />
                                    </TextField>
                                </div>

                            </Fieldset.Group>
                            <Fieldset.Actions className="flex justify-end">
                                <Button type="reset" variant="tertiary" className='rounded-md'>
                                    Reset
                                </Button>
                                <Button type="submit" className='bg-green-600 rounded-md flex gap-3'>
                                    Add Pet <MdOutlinePets />
                                </Button>
                            </Fieldset.Actions>
                        </Fieldset>
                    </Form>
                </Surface>
            </div>
        </div>
    );
};

export default AddPetPage;