"use client";

import {AlertDialog, Button} from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

export function ListingDeleteAlert({listingId}) {

    const handleDeleteAdoption = async () =>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/pet/${listingId}`,{
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        const data = await res.json()
        // console.log(data)
        window.location.reload();
    }
  return (
    <AlertDialog>
      <Button variant="outline" className={"w-full"}><RiDeleteBin6Line /><span>Delete</span></Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog >
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete card permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDeleteAdoption} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}