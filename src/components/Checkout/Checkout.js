import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';
import { CartContext } from '../../context/CartContext';
import { createOrder } from '../../firebase/createOrder';
import './Checkout.scss';

export const Checkout = () => {

    const {cart, cartTotal, emptyCart} = useContext(CartContext);

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: 0
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.name.length > 3 && values.email.length > 3) {
            createOrder(values, cart, cartTotal())
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your booking has been registered!',
                        text: `Your ID is ${res}. Thank you very much for trusting us.`,
                        confirmButtonText: 'Done'
                    })
                    emptyCart()
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please check your information.',
            })
        }
    };

    return (
        <section className="checkout-box">
            <h2 className="checkout-title">Checkout</h2>

            <hr/>

            {!cart.length 
                ? <Redirect to="/"/>
                :
                <div>
                    <form className="form-box" onSubmit={handleSubmit}>
                        <input
                            className="input"
                            type="text"
                            value={values.name}
                            onChange={handleInputChange}
                            name="name"
                            placeholder="Name"
                            required
                        />
                        <input
                            className="input"
                            type="email"
                            value={values.email}
                            onChange={handleInputChange}
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            className="input"
                            type="phone"
                            value={values.phone}
                            onChange={handleInputChange}
                            name="phone"
                            placeholder="Phone"
                            required
                        />
                        <button className="btn btn-danger form-btn" type="submit">Submit</button>
                    </form>
                </div>
            }

        </section>
    );
};
