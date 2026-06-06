"use client";
import {AlertDialog, Button} from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

const RequestsDeleteAlert = ({requestId}) => {

    const handleDeleteAdoption = async () =>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/request-delete/${requestId}`,{
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
      <Button variant="outline"><RiDeleteBin6Line /><span>Cencel</span></Button>
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
};

export default RequestsDeleteAlert;