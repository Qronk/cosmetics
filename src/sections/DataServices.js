import { fb, db} from '../firebase';

class DataServices {

        readData(){

        db.collection("brands").get().then((querySnapshot) => {
            // this.products = querySnapshot;

            querySnapshot.forEach((doc) => {

                // doc.data() is never undefined for query doc snapshots
                this.brands.push(doc.data());
            });

        });
        db.collection("products").get().then((querySnapshot) => {
            // this.products = querySnapshot;

            querySnapshot.forEach((doc) => {

                // doc.data() is never undefined for query doc snapshots
                this.products.push(doc.data());
            });

        });
        db.collection("models").get().then((querySnapshot) => {
            // this.products = querySnapshot;

            querySnapshot.forEach((doc) => {

                // doc.data() is never undefined for query doc snapshots
                this.models.push(doc.data());
            });


        });
        db.collection("actions").get().then((querySnapshot) => {
            // this.products = querySnapshot;

            querySnapshot.forEach((doc) => {

                // doc.data() is never undefined for query doc snapshots
                this.actions.push(doc.data());
            });

        });
    }

    created() {
        this.readData();
    }

}

export default DataServices;