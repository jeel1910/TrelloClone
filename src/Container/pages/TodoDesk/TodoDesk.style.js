import styled from "styled-components";

const TodoDeskStyle = styled.div`
  background: rgb(56, 57, 123);
  background: linear-gradient(
    173deg,
    rgba(56, 57, 123, 1) 35%,
    rgba(165, 74, 148, 1) 100%
  );
  width: 100%;
  padding: 2% 1%;
  display: flex;
  flex-direction: row;

  .add-list {
    width: 18%;
    cursor: pointer;
    border-radius: 10px;
    padding: 1%;
    background-color: #ffffff3d;
    cursor: pointer;
    height: fit-content;
    display: flex;
    flex-direction: row;
    color: white;
  }

  .add-list: hover {
    background-color: #a6c5e229;
  }
`;

export default TodoDeskStyle;
