import Swal from 'sweetalert2';

const sAlert = (status, msg) => {
    Swal.fire({
        icon: status,
        title: status,
        text: msg,
    });
}

export default sAlert;
