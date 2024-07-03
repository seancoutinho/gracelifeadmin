import React from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  alt='user'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>Pending</span>
            </td>
            <td>01.07.2024</td>
            <td>$450</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>

                <Image
                  src='/noavatar.png'
                  alt='user'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>01.07.2024</td>
            <td>$450</td>
          </tr> <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  alt='user'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe

              </div>
            </td>
            <td>
              <span className={`${styles.cancelled} ${styles.status}`}>Cancelled</span>
            </td>
            <td>01.07.2024</td>
            <td>$450</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
