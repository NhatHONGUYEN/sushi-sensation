import styled from "styled-components";
import Form from "./Form";

export default function ReservationBox() {
  return (
    <ReservationBoxStyled>
      <h1>RESERVATION</h1>
      <p>
        Secure your spot at Qitchen, where exceptional sushi and a <br />
        remarkable dining experience await
      </p>
      <Form />
    </ReservationBoxStyled>
  );
}

const ReservationBoxStyled = styled.div`
  width: 50%;
  border: 1px solid #efe7d2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  margin-left: 20px;
  h1 {
    margin-bottom: 35px;
    color: #efe7d2;
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    font-size: 20px;
    text-align: center;
    color: #efe7d2;
  }
`;