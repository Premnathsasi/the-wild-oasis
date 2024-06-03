import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

//this is advanced pattern
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

//Below is the version 1

// function AddCabin() {
//   const [isOpenModal, setisOpenModal] = useState(false);

//   return (
//     <div>
//       <Button
//         onClick={() => {
//           setisOpenModal((prev) => !prev);
//         }}
//       >
//         Add New Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setisOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setisOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
