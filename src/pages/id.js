import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FiStar } from "react-icons/fi";
import { BiLike } from "react-icons/bi";

import Navbar from "../component/navbar";
import styles from "../styles/id.module.css";
import img from "../image/food.jpg";

export default dynamic(() => Promise.resolve(Id), { ssr: false });
function Id() {
  return (
    <>
      {/* <Navbar/> */}
      <div className={styles.itempage}>
        <h1 className={styles.recipe}>Recipe Name</h1>
        <div className={styles.top}>
          <div className={styles.images}>
            <Image
              width={200}
              height={200}
              objectFit="cover"
              src={img}
              alt="img"
              className={styles.img}
            />
            <Image
              width={200}
              height={200}
              objectFit="cover"
              src={img}
              alt="img"
              className={styles.img}
            />
            <Image
              width={200}
              height={200}
              objectFit="cover"
              src={img}
              alt="img"
              className={styles.img}
            />
          </div>
          <div className={styles.process}>
            <h2 className={styles.heading}>Process</h2>
          </div>
          <div className={styles.tips}>
            <h2 className={styles.heading}>Tips</h2>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.reviews}>
            <div className={styles.review}>
              <div className={styles.profile}>
                <Image
                  width={50}
                  height={50}
                  objectFit="cover"
                  src={img}
                  alt="img"
                  className={styles.img}
                />
                <span>Name</span>
              </div>
              <div className={styles.rattinganddate}>
                <div className={styles.ratting}>
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                </div>
                <div className={styles.date}>08/18/2023</div>
              </div>
              <div className={styles.reviewtext}>jyfjfdhjdxd h tiut uuiu</div>
              <div className={styles.helpful}>
                <BiLike /> Helpful (1)
              </div>
            </div>

            <div className={styles.review}>
              <div className={styles.profile}>
                <Image
                  width={50}
                  height={50}
                  objectFit="cover"
                  src={img}
                  alt="img"
                  className={styles.img}
                />
                <span>Name</span>
              </div>
              <div className={styles.rattinganddate}>
                <div className={styles.ratting}>
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                </div>
                <div className={styles.date}>08/18/2023</div>
              </div>
              <div className={styles.reviewtext}>jyfjfdhjdxd h tiut uuiu</div>
              <div className={styles.helpful}>
                <BiLike /> Helpful (1)
              </div>
            </div>

            <div className={styles.review}>
              <div className={styles.profile}>
                <Image
                  width={50}
                  height={50}
                  objectFit="cover"
                  src={img}
                  alt="img"
                  className={styles.img}
                />
                <span>Name</span>
              </div>
              <div className={styles.rattinganddate}>
                <div className={styles.ratting}>
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                </div>
                <div className={styles.date}>08/18/2023</div>
              </div>
              <div className={styles.reviewtext}>jyfjfdhjdxd h tiut uuiu</div>
              <div className={styles.helpful}>
                <BiLike /> Helpful (1)
              </div>
            </div>
          </div>

          <div className={styles.statistic}>
            <div className={styles.top}>
              <Image
                width={100}
                height={100}
                objectFit="cover"
                src={img}
                alt="img"
                className={styles.img}
              />
              <p className={styles.text}>
                What do you think of this recipe? Share your experience to help
                others.
              </p>
              <button className={styles.btn}>add rating & review</button>
            </div>
            <div className={styles.bottom}>
              <div className={styles.ratingrate}>
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                4.2 out of 5
              </div>
              <div className={styles.totalrating}>36 Ratings</div>
              <div className={styles.ratingcount}>
                <div>
                  <FiStar />
                  <div></div>
                  21
                </div>
                <div>
                  <FiStar />
                  <div></div>
                  21
                </div>
                <div>
                  <FiStar />
                  <div></div>
                  21
                </div>
                <div>
                  <FiStar />
                  <div></div>
                  21
                </div>
                <div>
                  <FiStar />
                  <div></div>
                  21
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
