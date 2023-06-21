
export default function useFazerLogoff() {

    return () => {
        sessionStorage.removeItem('token');
        window.location.reload();
    }
}