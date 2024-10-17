import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./Contact.module.css";

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactBlock}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>

      <button
        className={styles.contactBlock_button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
