"use client";
import { Button, Description, FieldError, Fieldset, Form, Input, Label, Surface, TextArea, TextField, ListBox, Select, Modal } from "@heroui/react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

const UpdateListing = ({ listing }) => {

    const {_id, petName, species, breed, age, gender, imageUrl, healthStatus, vaccinationStatus, location, adoptionFee, Description, email} = listing;

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const updateDetails = Object.fromEntries(formData.entries())


        const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/pet/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDetails)
        })
        const data = await res.json()
        console.log(data)
        window.location.reload();
    }



    return (
        <Modal>
            <Button variant="outline" className={"w-full"}><FaRegEdit /><span>Edit</span></Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Update {breed} Listing</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <div className="flex items-center justify-center rounded-3xl bg-surface p-6 border">
                                    <Surface className="w-full">
                                        <Form onSubmit={onSubmit}>
                                            <Fieldset className="w-full">
                                                <Fieldset.Group className="space-y-5">
                                                    <TextField defaultValue={petName} name="petName" type="text">
                                                        <Label>Pet Name</Label>
                                                        <Input placeholder="Enter pet name" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                    <Select defaultValue={species} name="species" placeholder="Select species" variant="secondary">
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

                                                    <TextField defaultValue={breed} name="breed" type="text">
                                                        <Label>Breed</Label>
                                                        <Input placeholder="Enter breed" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                    <TextField defaultValue={age} name="age" type="number">
                                                        <Label>Age</Label>
                                                        <Input placeholder="Enter age" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                    <Select defaultValue={gender} name="gender" placeholder="Select gender" variant="secondary">
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

                                                    <TextField defaultValue={imageUrl} name="imageUrl" type="url">
                                                        <Label>Image URL</Label>
                                                        <Input placeholder="Enter imageURL" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                    <Select defaultValue={healthStatus} name="healthStatus" placeholder="Select health status" variant="secondary">
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

                                                    <Select defaultValue={vaccinationStatus} name="vaccinationStatus" placeholder="Select vaccination status" variant="secondary">
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

                                                    <TextField defaultValue={location} name="location" type="text">
                                                        <Label>Location</Label>
                                                        <Input placeholder="Enter location" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                    <TextField defaultValue={adoptionFee} name="adoptionFee" type="text">
                                                        <Label>Adoption Fee</Label>
                                                        <Input placeholder="Enter adoption fee" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                    <TextField defaultValue={Description} name="Description" type="text">
                                                        <Label>Description</Label>
                                                        <TextArea placeholder="Describe the per personality, habit, and any special need.." variant="secondary" />
                                                        {/* <Description>Minimum 10 characters</Description> */}
                                                        <FieldError />
                                                    </TextField>

                                                    <TextField defaultValue={email} name="email" type="email">
                                                        <Label>Owner Email</Label>
                                                        <Input placeholder="Enter email" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                </Fieldset.Group>
                                                <Fieldset.Actions className="flex justify-end">
                                                    <Button type="reset" variant="tertiary" className='rounded-md'>
                                                        Reset
                                                    </Button>
                                                    <Button type="submit" className='bg-amber-700 rounded-md flex gap-3'>
                                                        Update Pet <MdOutlinePets />
                                                    </Button>
                                                </Fieldset.Actions>
                                            </Fieldset>
                                        </Form>
                                    </Surface>
                                </div>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>

    );
};

export default UpdateListing;