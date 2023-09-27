// import library yang dibutuhkan
import { useDisclosure, IconButton } from "@chakra-ui/react";
import { Check } from "react-feather";
import ModalBayar from "../ModalBayar";

// buat komponen Delete
export default function Bayar({ payload, reload }) {
  // buat state untuk menampilkan modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* set payload dan onClose ke komponen ModalDelete */}
      <ModalBayar
        isOpen={isOpen}
        onClose={onClose}
        payload={payload}
        reload={reload}
      />
      {/* set onOpen ke komponen IconButton */}
      <IconButton
        onClick={onOpen}
        aria-label="delete"
        icon={<Check />}
        colorScheme="green"
      />
    </>
  );
}
