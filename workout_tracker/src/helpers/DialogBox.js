import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const AlertBox = (title, subtitle, buttons) => {
    return confirmAlert({
        title: title,
        message: subtitle,
        buttons: buttons
      })
}
