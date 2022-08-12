import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { Form } from "./styles";
import * as Yup from "yup";
import { PostNoteRequest } from "../../../store/ducks/notes/notes.types";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../../store";
import { useEffect, useRef } from "react";

// interface FormNoteProps {
//   handleSubmit: (
//     payload: PostNoteRequest,
//     actions: FormikHelpers<PostNoteRequest>
//   ) => void;
// }

function FormNote() {
  const dispatch = useDispatch();

  const { isSuccessPostNote } = useSelector(
    (state: ApplicationState) => state.noteState
  );

  const formikRef = useRef(null) as any;

  const initialValues: PostNoteRequest = {
    text: "",
    urgent: false,
  };

  const handleSubmit = (values: PostNoteRequest) => {
    // !!! TODO
  };

  useEffect(() => {
    !isSuccessPostNote &&
      isSuccessPostNote !== undefined &&
      formikRef?.current?.setSubmitting(false);
  }, [isSuccessPostNote]);

  return (
    <Formik
      initialValues={initialValues}
      innerRef={formikRef}
      validationSchema={Yup.object({
        text: Yup.string()
          .min(5, "Deve ter pelo menos 5 caracteres")
          .required("Campo obrigatório"),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <Field
              as="textarea"
              name="text"
              autoFocus
              placeholder="Insira o texto da nota"
            />
            <ErrorMessage name="text" />
            <Checkbox name="urgent" label="Urgente?" />
            <Button handleClick={() => {}} disabled={isSubmitting}>
              {isSubmitting ? "Salvando..." : "Salvar"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormNote;
