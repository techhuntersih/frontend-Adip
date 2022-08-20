import { useEffect } from "react"
import axiosInstance from "../../axiosInstance"


export default function ZonalCoordinator() {
    useEffect(() => {
        axiosInstance.get('/get-applciation-details')
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        })
    })
    return (
        <div>
            I am ZonalCoordinator
        </div>
    )
}