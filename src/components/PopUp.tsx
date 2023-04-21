import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { SaveEmployee } from "../lb/controller";
import { generarIdAleatorio } from "../helps/setId";

interface Props {
  isOpen: boolean;
  setIsOpen: (bo: boolean) => void;
}

const PopUp = ({ isOpen, setIsOpen }: Props) => {
  const [person, setPerson] = useState({
    codigo: "",
    id: "",
    nit: "",
    nombre: "",
    razon_social: "",
    telefono: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    SaveEmployee({ ...person, id: generarIdAleatorio(8) });
    alert("submitedd");
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalCloseButton />
            </ModalHeader>

            <ModalBody>
              <form id="new-form" onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    onChange={(event) =>
                      setPerson({ ...person, nombre: event.target.value })
                    }
                  />

                  <FormLabel>Razon Social</FormLabel>
                  <Input
                    onChange={(event) =>
                      setPerson({ ...person, razon_social: event.target.value })
                    }
                  />

                  <FormLabel>Telefono</FormLabel>
                  <Input
                    type="number"
                    onChange={(event) =>
                      setPerson({ ...person, telefono: event.target.value })
                    }
                  />

                  <FormLabel>NIT</FormLabel>
                  <Input
                    type="number"
                    onChange={(event) =>
                      setPerson({ ...person, nit: event.target.value })
                    }
                  />

                  <FormLabel>Codigo</FormLabel>
                  <Input
                    type="number"
                    onChange={(event) =>
                      setPerson({ ...person, codigo: event.target.value })
                    }
                  />
                </FormControl>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" form="new-form">
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};
export default PopUp;
