import React from 'react';
import useServices from '../../Hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices()
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure Want To Delete This Service ?')
        if (proceed) {
            const url = `http://localhost:4000/service/${id}`
            fetch(url, {
                method: 'DELETE'

            })
            .then(res => res.json())
            .then (data => {
                console.log(data)
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            })
        }
    }
    return (
        <div className='mx-auto w-50'>
            <h2>Manage your Services</h2>
            {
                services.map( service => <div key={service._id}>
                    <h4>{service.name} <button onClick={()=> handleDelete(service._id)}>x</button></h4>
                    
                </div>)
            }
        </div>
    );
};

export default ManageServices;