import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async () => {

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noproduct.jpg" alt="" fill />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type="hidden" name="id" />
                    <label>Title</label>
                    <input type="text" name="title" placeholder='Iphone 14 Pro Max' />
                    <label>Price</label>
                    <input type="number" name="price" placeholder='$25.00' />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder='72' />
                    <label>Color</label>
                    <input
                        type="text"
                        name="color"
                        placeholder='red'
                    />
                    <label>Size</label>
                    <textarea
                        type="text"
                        name="size"
                        placeholder='Pro Max'
                    />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows="10"
                        placeholder='This is a very good phone'
                    ></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleProductPage;