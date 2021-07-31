import { useState } from "react";
import Card from "../components/Card";
import Link from "next/link";
import styles from '../styles/Form.module.css';
import NumberInput from "../components/NumberInput";

export default function Form() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.form} >
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Quantas Portas?"
            value={qtdePortas}
            onChange={novaQtde => setQtdePortas(novaQtde)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Porta com Presente?"
            value={comPresente}
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>
              Iniciar
            </h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
