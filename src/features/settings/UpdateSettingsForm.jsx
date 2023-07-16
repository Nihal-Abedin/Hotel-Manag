import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import Form from "../../ui/Form";
import { useUpdateSettings } from "./useUpdateSettings";

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

  const { isUpdating, updateSetting } = useUpdateSettings();

  const handleUpdate = (e, fieldName) => {
    const { value } = e.target;
    if (!value) return;

    updateSetting({ [fieldName]: value });
    // console.log(value, fieldName);
  };

  if (isGeting) return <Spinner />;
  // This time we are using UNCONTROLLED fields, so we will NOT store state
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min_booking_length"
          defaultValue={min_booking_length}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "min_booking_length")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max_booking_length"
          defaultValue={max_booking_length}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "max_booking_length")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max_guests_per_booking"
          defaultValue={max_guests_per_booking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "max_guests_per_booking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast_price"
          defaultValue={breakfast_price}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfast_price")}
        />
      </FormRow>
      {/* <FormRow>
        <Button disabled={isEditing} type="submit">
          Update
        </Button>
      </FormRow> */}
    </Form>
  );
}

export default UpdateSettingsForm;
