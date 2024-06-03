import Button from "../../ui/Button";
import { useChekout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingout } = useChekout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => {
        checkout(bookingId);
      }}
      disabled={isCheckingout}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
