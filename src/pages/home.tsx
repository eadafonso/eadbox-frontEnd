import React from "react";
import { FiCheckSquare, FiEye, FiFilePlus } from "react-icons/fi";
import Header from "../components/Header";
import { TableContainer } from "../styles/components/Table";
import {
  ButtonContainer,
  Card,
  CardContainer,
  Container,
  HeaderContent,
  MainContainer,
  TitleContainer,
} from "../styles/pages/homeStyles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <HeaderContent>
        <TitleContainer>
          <h3>Todos arquivos</h3>
        </TitleContainer>

        <ButtonContainer>
          <button>
            <FiFilePlus />
            Novo ficheiro
          </button>
        </ButtonContainer>
      </HeaderContent>

      <MainContainer>
        <CardContainer>
          <Card>
            <div className="cardTitle first-card">
              <h1>
                Todos <br /> Documentos
              </h1>
            </div>
            <p>
              Lorem temporibus! Enim quae ad saepe nostrum placeat optio libero
              et repudiandae a?
            </p>
          </Card>

          <Card>
            <div className="cardTitle second-card">
              <h1>
                Todas <br /> Imagens
              </h1>
            </div>
            <p>
              Lorem temporibus! Enim quae ad saepe nostrum placeat optio libero
              et repudiandae a?
            </p>
          </Card>

          <Card>
            <div className="cardTitle third-card">
              <h1>
                Todas <br /> Músicas
              </h1>
            </div>
            <p>
              Lorem temporibus! Enim quae ad saepe nostrum placeat optio libero
              et repudiandae a?
            </p>
          </Card>

          <Card>
            <div className="cardTitle four-card">
              <h1>
                Todos <br /> Vídeos
              </h1>
            </div>
            <p>
              Lorem temporibus! Enim quae ad saepe nostrum placeat optio libero
              et repudiandae a?
            </p>
          </Card>

          <Card>
            <div className="cardTitle last-card">
              <h1>
                Outros <br /> Ficheiros
              </h1>
            </div>
            <p>
              Lorem temporibus! Enim quae ad saepe nostrum placeat optio libero
              et repudiandae a?
            </p>
          </Card>
        </CardContainer>

        <h4>Ultímos uploads</h4>

        <TableContainer>
          <table className="no-efectf">
            <thead>
              <tr className="table-header">
                <th className="col" style={{ paddingLeft: 10 }}>
                  Produto
                </th>
                <th className="col">Qtdade</th>
                <th className="col">Price</th>
                <th className="col">Status</th>
                <th className="col">Opções</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  className="col"
                  style={{ paddingLeft: 10 }}
                  data-label="Produto:"
                >
                  Iphone 6
                </td>
                <td className="col" data-label="Produto:">
                  20
                </td>
                <td className="col" data-label="Produto:">
                  90.000 kz
                </td>
                <td className="col" data-label="email:">
                  Pendente
                </td>
                <td className="col icon_table">
                  <FiEye title="Ver" className="icons" />
                  <FiCheckSquare title="Ver" className="icons" />
                </td>
              </tr>

              <tr>
                <td
                  className="col"
                  style={{ paddingLeft: 10 }}
                  data-label="Produto:"
                >
                  Iphone 6
                </td>
                <td className="col" data-label="Produto:">
                  20
                </td>
                <td className="col" data-label="Produto:">
                  90.000 kz
                </td>
                <td className="col" data-label="email:">
                  Pendente
                </td>
                <td className="col icon_table">
                  <FiEye title="Ver" className="icons" />
                  <FiCheckSquare title="Ver" className="icons" />
                </td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </MainContainer>
    </Container>
  );
};

export default Home;
