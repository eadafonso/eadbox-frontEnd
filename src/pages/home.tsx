import React from "react";
import { FiFilePlus } from "react-icons/fi";
import Header from "../components/Header";
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
      </MainContainer>
    </Container>
  );
};

export default Home;
