import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a product...' />
        <Link href='/dashboard/products/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src='/noproduct.jpg'
                  alt='product image'
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                iPhone
              </div>
            </td>
            <td>The new IPhone 15 Pro Max</td>
            <td>$1450</td>
            <td>24.07.2024</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href='/dashboard/products/[id]?slug=1'>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default Products;
