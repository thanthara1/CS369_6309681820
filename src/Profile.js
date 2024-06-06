import{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Profile() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    const MySwal = withReactContent(Swal)

    useEffect(() => {
    const token = localStorage.getItem('token')
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearrer" + token);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch("https://www.melivecode.com/api/auth/user", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if(result.status === 'ok'){
                setUser(result.user)
            }else if(result.status === 'forbidden'){
            }
            console.log(result)
        })
        .catch((error) => console.error(error));
      }, [])

  return (
    <div>Profile</div>
  )
}

export default Profile