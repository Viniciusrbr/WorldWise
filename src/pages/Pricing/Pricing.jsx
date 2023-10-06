// usa o mesmo estilo de Product
import styles from "../Product/Product.module.css";
import img2 from "../../images/img-2.jpg";
import PageNav from "../../Components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Preços simples.
            <br />
            Apenas R$15 por mês.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img
          src={img2}
          alt="Visão geral de uma cidade grande com arranha-céus"
        />
      </section>
    </main>
  );
}
