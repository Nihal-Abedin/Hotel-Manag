import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import Form from "../../ui/Form";

function UpdateSettingsForm() {
  const {
    isGeting,
    settings: {
      breakfast_price,
      max_booking_length,
      max_guests_per_booking,
      min_booking_length,
    } = {},
  } = useSettings();

  if (isGeting) return <Spinner />;
  // This time we are using UNCONTROLLED fields, so we will NOT store state
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={min_booking_length}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={max_booking_length}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={max_guests_per_booking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfast_price}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
