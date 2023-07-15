import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";
import FormRow from "../../ui/FormRow";
import Textarea from "../../ui/Textarea";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  console.log(errors);
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created!");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  const onSubmit = (data) => {
    // console.log(data);
    mutate(data);
  };
  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label={"Cabin name"} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required!",
          })}
        />
      </FormRow>
      <FormRow label={"Maximum capacity"} error={errors?.max_capacity?.message}>
        <Input
          type="number"
          id="max_capacity"
          {...register("max_capacity", {
            required: "This field is required!",
            min: {
              value: 1,
              message: "Capacity shoud be atleast for 1 person.",
            },
          })}
        />
      </FormRow>

      <FormRow label={"Regular price"} error={errors?.regular_price?.message}>
        <Input
          type="number"
          id="regular_price"
          {...register("regular_price", {
            required: "This field is required!",
          })}
        />
      </FormRow>

      <FormRow label={"Discount"} error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required!",
            validate: (value) =>
              +value <= +getValues().regular_price ||
              "Discount price must be less than regular price.",
          })}
        />
      </FormRow>

      <FormRow
        label={"Description for website"}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required!",
          })}
        />
      </FormRow>
      <FormRow label={"Cabin photo"} error={errors?.description?.message}>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
