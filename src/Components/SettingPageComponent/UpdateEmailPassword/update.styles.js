import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1.2rem;
  padding: 6px;
`;
export const Div = styled.div`
  color: white;
  width: 25%;
  margin-top: 0.6rem;
`;
export const Info = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.2px;
`;
export const InputDiv = styled.div`
  width: 70%;
  label {
    color: white;
    font-size: 0.8rem;
  }
  input {
    width: 100%;
    font-size: 0.9rem;
    padding: 0.7rem 0.5rem;
    margin: 5px 0;
    border: none;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  form {
    margin: 0.4rem 0;
  }
`;
export const Detail = styled.p`
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.7);
`;
