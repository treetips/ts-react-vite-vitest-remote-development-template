import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { FormPagePresenter } from ".";
import { Layout } from "../../components/layout/Layout";
import { formSchema, FormType } from "./schema";

export const FormPage = () => {
  const { formState, handleSubmit, register, reset } = useForm<FormType>({
    mode: "onChange",
    resolver: valibotResolver(formSchema),
  });

  const handleOnSubmit = handleSubmit((formType) => {
    alert(JSON.stringify(formType, undefined, 2));
  });

  const handleCancel = () => reset();

  const validator = {
    lastName: register("lastName"),
    firstName: register("firstName"),
    age: register("age"),
  };

  return (
    <Layout
      pageTitle="Form Example"
      breadcrumbs={[{ label: "Form Example", href: "/form" }]}
    >
      <FormPagePresenter
        validator={validator}
        formState={formState}
        onSubmit={handleOnSubmit}
        onCancel={handleCancel}
      />
    </Layout>
  );
};
