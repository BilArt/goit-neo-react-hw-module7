import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number must be less than 50 characters")
    .required("Number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const duplicate = contacts.find(contact => contact.name === values.name);
    if (duplicate) {
      alert("Contact already exists!");
      return;
    }
    dispatch(addContact(values.name, values.number));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="div" className={styles.error} />

          <button className={styles.contactBtn} type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
