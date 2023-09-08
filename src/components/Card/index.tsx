import * as S from "./styles";

export interface ICard {
  id: number; 
  nome: string;
  descricao: string;
  preco: number;
}

export const Card = ({ id, nome, descricao, preco }: ICard) => {
  return (
    <S.Aside>
      <h3>
        <strong>ID: </strong> {id}
      </h3>
      <h4>Nome: {nome}</h4>
      <p>Descrição: {descricao}</p>
      <p>Preço: R$ {preco.toFixed(2)}</p>
    </S.Aside>
  );
};

