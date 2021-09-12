import { getFirestore } from './config';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const createOrder = (buyer, cart, total) => {

    return new Promise( async (resolve, reject) => {
        const db = getFirestore();
        const orders = db.collection('orders');

        const newOrder = {
            buyer: buyer,
            items: cart,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        };

        const itemsToUpdate = db.collection('cities')
            .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(cities => cities.id))

        const batch = db.batch();
        const query = await itemsToUpdate.get();

        const outOfStock = [];

        query.docs.forEach((doc) => {
            const itemInCart = cart.find(el => el.id === doc.id)
            if (doc.data().stock >= itemInCart.quantity) {
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.quantity})
            } else {
                outOfStock.push({id: doc.id, ...doc.data()})
            }
        });

        if (outOfStock.length === 0) {
            orders.add(newOrder)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
                })
                .catch((error) => {
                    reject(error)
                })
        } else {
            reject({
                error: "There are no places available for this tour",
                noStock: outOfStock
            })
        };

    });

};