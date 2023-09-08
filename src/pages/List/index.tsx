import { ComponentCard } from '../../components'; 
import * as A from './style'; 
import { dados } from '../../services/dados';


export function List() {
  return (
    <A.ListSection>
      {dados.map((item) => (
        <ComponentCard
          key={item.id}
          nome={item.nome}
          descricao={item.descricao}
          preco={item.preco} id={0}        />
      ))}
    </A.ListSection>
  );
}


